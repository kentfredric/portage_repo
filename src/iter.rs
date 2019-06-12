//! Various iterators over portage structures

use crate::{err::ErrorKind, file, Category};
use libc;
use std::{borrow::ToOwned, fs, io, path::PathBuf};

macro_rules! err {
    ($i:ident => $j:ident => $($x:expr),*) => {
        $crate::err::ErrorKind::$j($($x),*, $crate::err::ErrorSource::$i(file!(), line!(), column!()))
    };
}

/// Iterate a `categories` file in a portage repository
#[cfg_attr(
    feature = "external_doc",
    doc(include = "struct.CategoryFileIterator.md")
)]
#[derive(Debug)]
pub struct CategoryFileIterator {
    root:        PathBuf,
    file:        PathBuf,
    file_reader: file::Categories,
}

impl CategoryFileIterator {
    /// Create a [`CategoryFileIterator`] for a given `file` in a repository
    /// `root`
    pub fn for_file<P, Q>(root: P, file: Q) -> Result<Self, ErrorKind>
    where
        P: Into<PathBuf>,
        Q: Into<PathBuf>,
    {
        let my_file = file.into();
        let my_reader = file::Categories::for_file(&my_file)?;
        Ok(Self {
            root:        root.into(),
            file:        my_file,
            file_reader: my_reader,
        })
    }
}
impl Iterator for CategoryFileIterator {
    type Item = Result<Category, ErrorKind>;

    fn next(&mut self) -> Option<Self::Item> {
        self.file_reader
            .next()
            .map(|i| i.map(|line| Category::new(&self.root, line)))
    }
}

/// Kinds of match rules for category validation
#[derive(Debug, Clone, Copy)]
pub enum CategoryMatcher {
    /// A matcher rule for categories that excludes members from a
    /// predetermined hardcoded set
    ExcludeBlackListed(),
    /// A matcher rule for categories that excludes members if the category
    /// does not have a subdirectory containing at least one .ebuild file
    RequireEbuild(),
}

impl CategoryMatcher {
    /// Apply the given matcher against a category at path `category_path`
    /// and returns a [`Some`] for valid entries and
    /// errors, and returns a [`None`] for paths that are excluded
    pub fn select<P>(self, category_path: P) -> Result<bool, ErrorKind>
    where
        P: Into<PathBuf> + std::fmt::Debug,
        Self: Copy,
    {
        match self {
            CategoryMatcher::ExcludeBlackListed() => {
                Self::match_blacklisted(&category_path.into())
            },
            CategoryMatcher::RequireEbuild() => {
                Self::match_contains_ebuild(&category_path.into())
            },
        }
    }

    fn get_category_name(
        category_path: &PathBuf,
    ) -> Result<String, ErrorKind> {
        category_path
            .file_name()
            .ok_or_else(|| {
                err!(
                    CategoryMatcher => PathLacksFileName =>  category_path.to_owned()
                )
            })
            .and_then(|f| {
                f.to_str()
                    .ok_or_else(|| err!( CategoryMatcher => NameDecodeError =>  f.to_owned() ))
                    .map(ToOwned::to_owned)
            })
    }

    fn match_blacklisted(category_path: &PathBuf) -> Result<bool, ErrorKind> {
        let category_name = match Self::get_category_name(category_path) {
            Ok(s) => s,
            Err(e) => return Err(e),
        };
        match category_name.as_str() {
            ".git" | "distfiles" | "eclass" | "licenses" | "local"
            | "metadata" | "packages" | "profiles" | "scripts" => Ok(false),
            _ => Ok(true),
        }
    }

    fn path_is_ebuild(path: &fs::DirEntry) -> Result<bool, ErrorKind> {
        match path.file_name().to_str() {
            None => Err(
                err!( CategoryMatcher => NameDecodeError => path.file_name() ),
            ),
            Some(s) if s.ends_with(".ebuild") => match path.metadata() {
                Err(e) => match e.kind() {
                    io::ErrorKind::NotFound => Ok(false),
                    _ => Err(
                        err!( CategoryMatcher => PathAccessError => path.path(), e ),
                    ),
                },
                Ok(fmeta) => Ok(!fmeta.is_dir()),
            },
            _ => Ok(false),
        }
    }

    fn dir_contains_ebuild(path: &fs::DirEntry) -> Result<bool, ErrorKind> {
        let package_iterator = match path.path().read_dir() {
            Ok(iter) => iter,
            Err(e) => {
                return match (e.kind(), e.raw_os_error()) {
                    (io::ErrorKind::NotFound, _)
                    | (io::ErrorKind::Other, Some(libc::ENOTDIR)) => {
                        Ok(false)
                    },
                    _ => Err(err!( CategoryMatcher => PathAccessError =>
                        path.path(),
                        e
                    )),
                }
            },
        };
        for file_node in package_iterator {
            let file_path = file_node.map_err(
                |e| err!( CategoryMatcher => ReadDirError => path.path(), e ),
            )?;

            if Self::path_is_ebuild(&file_path)? {
                return Ok(true);
            }
        }
        Ok(false)
    }

    fn match_contains_ebuild(
        category_path: &PathBuf,
    ) -> Result<bool, ErrorKind> {
        let category_iterator = match category_path.read_dir() {
            Ok(iter) => iter,
            Err(e) => {
                return match (e.kind(), e.raw_os_error()) {
                    (io::ErrorKind::NotFound, _)
                    | (io::ErrorKind::Other, Some(libc::ENOTDIR)) => {
                        Ok(false)
                    },
                    _ => Err(
                        err!( CategoryMatcher => PathAccessError => category_path.to_owned(),e),
                    ),
                }
            },
        };
        for package_node in category_iterator {
            let package_path = package_node.map_err(|e|
                err!( CategoryMatcher => ReadDirError => category_path.to_owned(), e )
            )?;
            if Self::dir_contains_ebuild(&package_path)? {
                return Ok(true);
            }
        }
        Ok(false)
    }
}

/// Iterate categories in a portage repository via discovery
#[cfg_attr(
    feature = "external_doc",
    doc(include = "struct.CategoryDirsIterator.md")
)]
#[derive(Debug)]
pub struct CategoryDirsIterator {
    root:     PathBuf,
    dir_iter: fs::ReadDir,
    matchers: Vec<CategoryMatcher>,
}

impl CategoryDirsIterator {
    /// Construct a discovery based category iterator for a repository
    pub fn for_repo<P>(root: P) -> Result<Self, ErrorKind>
    where
        P: Into<PathBuf>,
    {
        let my_root = root.into();
        my_root
            .read_dir()
            .map_err(|e|
                err!( CategoryDirsIterator => PathAccessError => my_root.to_owned(), e )
            )
            .map(|i| Self {
                root:     my_root,
                dir_iter: i,
                matchers: vec![
                    CategoryMatcher::ExcludeBlackListed(),
                    CategoryMatcher::RequireEbuild(),
                ],
            })
    }
}

impl Iterator for CategoryDirsIterator {
    type Item = Result<Category, ErrorKind>;

    fn next(&mut self) -> Option<Self::Item> {
        // This is needlessly complicated due to the recursive self.next()
        // call, which of course returns Option<>, so any
        // destructuring functions like .map() or .map_err() become
        // unusable as we don't want Some(Some(...))
        // or Some(Err(Some(Ok))) etc, etc.
        loop {
            match self.dir_iter.next() {
                None => return None,
                Some(Err(e)) => {
                    return Some(Err(
                        err!( CategoryDirsIterator => ReadDirError => self.root.to_owned(), e ),
                    ))
                },
                Some(Ok(item)) => {
                    let first = self
                        .matchers
                        .iter()
                        .map(|matcher| matcher.select(&item.path()))
                        .find(|matched| match matched {
                            // first false match or err aborts
                            Ok(false) | Err(_) => true,
                            // Good matches progress to next matcher
                            _ => false,
                        });

                    match first {
                        Some(Ok(boolstate)) => {
                            // either an Ok(false), an Err()
                            debug_assert!(!boolstate);
                            continue;
                        },
                        Some(Err(e)) => return Some(Err(e)),
                        None => {
                            // either no matchers or all matchers passed
                            match item.file_name().to_str() {
                                None => unimplemented!(),
                                Some(s) => {
                                    return Some(Ok(Category::new(
                                        &self.root, s,
                                    )))
                                },
                            }
                        },
                    }
                },
            }
        }
    }
}

/// Iterate over a repositories categories
#[derive(Debug)]
pub struct CategoryIterator {
    inner: IteratorKind,
}

#[derive(Debug)]
enum IteratorKind {
    ByFile(CategoryFileIterator),
    ByDiscover(CategoryDirsIterator),
}

impl CategoryIterator {
    /// Construct a discovery based category iterator for a repository
    pub fn for_repo<P>(root: P) -> Result<Self, ErrorKind>
    where
        P: Into<PathBuf>,
    {
        let my_root = root.into();

        match CategoryFileIterator::for_file(
            &my_root,
            &my_root.join("profiles/categories"),
        ) {
            Ok(it) => return Ok(Self { inner: IteratorKind::ByFile(it) }),
            Err(ErrorKind::PathNotFound(..)) => {},
            Err(e) => return Err(e),
        }
        match CategoryDirsIterator::for_repo(&my_root) {
            Ok(it) => Ok(Self { inner: IteratorKind::ByDiscover(it) }),
            Err(e) => Err(e),
        }
    }
}

impl Iterator for CategoryIterator {
    type Item = Result<Category, ErrorKind>;

    fn next(&mut self) -> Option<Self::Item> {
        match &mut self.inner {
            IteratorKind::ByFile(f) => f.next().and_then(|r| match r {
                Ok(c) => Some(Ok(c)),
                Err(e) => Some(Err(e)),
            }),
            IteratorKind::ByDiscover(f) => f.next().and_then(|r| match r {
                Ok(c) => Some(Ok(c)),
                Err(e) => Some(Err(e)),
            }),
        }
    }
}
