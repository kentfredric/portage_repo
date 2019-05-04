#![cfg_attr(feature = "external_doc", feature(external_doc))]
#![cfg_attr(feature = "non_exhaustive", feature(non_exhaustive))]
#![cfg_attr(feature = "external_doc", doc(include = "lib.md"))]
#![cfg_attr(
    not(feature = "external_doc"),
    doc = "A low-level interface for working with Gentoo portage \
           repositories."
)]
use std::{borrow::Cow, path::PathBuf};

pub mod err;
pub mod file;
use crate::{err::ErrorKind, file::RepoName};

/// Represents a gentoo repository
#[cfg_attr(feature = "external_doc", doc(include = "struct.Repository.md"))]
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct Repository {
    root: PathBuf,
}

impl Repository {
    /// Construct a new Repository trait object
    pub fn new<P>(root: P) -> Self
    where
        P: Into<PathBuf>,
    {
        Self { root: root.into() }
    }

    /// Returns the path to this repository
    pub fn path(&self) -> PathBuf { self.root.to_owned() }

    /// Extract this repositories name from its profiles dir
    pub fn name(&self) -> Result<String, ErrorKind> {
        let r = RepoName::new(self.root.join("profiles/repo_name"));
        r.get()
    }
}

impl AsRef<PathBuf> for Repository {
    fn as_ref(&self) -> &PathBuf { &self.root }
}

impl From<Repository> for PathBuf {
    fn from(other: Repository) -> Self { other.root }
}
impl From<&Repository> for PathBuf {
    fn from(other: &Repository) -> Self { other.root.to_owned() }
}

/// Represents a concrete Gentoo category
#[cfg_attr(feature = "external_doc", doc(include = "struct.Category.md"))]
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct Category {
    root:     PathBuf,
    category: String,
    path:     PathBuf,
}

impl Category {
    /// Construct a new [`Category`] explicitly
    pub fn new<'a, P, S>(root: P, category: S) -> Self
    where
        P: Into<PathBuf>,
        S: Into<Cow<'a, str>>,
    {
        let r = root.into();
        let c = category.into().into_owned();
        let path = r.join(&c);
        Self { root: r, category: c, path }
    }
}
