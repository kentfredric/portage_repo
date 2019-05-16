//! Various iterators over portage structures

use crate::{err::ErrorKind, file, Category};
use std::path::PathBuf;

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
