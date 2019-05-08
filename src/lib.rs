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

    /// Returns the path to this repository
    pub fn path(&self) -> PathBuf { self.path.to_owned() }

    /// Return the name of the category
    pub fn name(&self) -> String { self.category.to_owned() }
}

impl AsRef<PathBuf> for Category {
    fn as_ref(&self) -> &PathBuf { &self.path }
}

impl From<Category> for PathBuf {
    fn from(other: Category) -> Self { other.path }
}
impl From<&Category> for PathBuf {
    fn from(other: &Category) -> Self { other.path.to_owned() }
}

/// Represents a discrete gentoo package
#[cfg_attr(feature = "external_doc", doc(include = "struct.Package.md"))]
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct Package {
    root:     PathBuf,
    category: String,
    package:  String,
    path:     PathBuf,
}

impl Package {
    /// Construct a new Package Type Object
    pub fn new<'a, P, S, SS>(root: P, category: S, package: SS) -> Self
    where
        P: Into<PathBuf>,
        S: Into<Cow<'a, str>>,
        SS: Into<Cow<'a, str>>,
    {
        let r = root.into();
        let c = category.into().into_owned();
        let p = package.into().into_owned();
        let path = r.join(&c).join(&p);
        Self { root: r, category: c, package: p, path }
    }

    /// Return the path to a gentoo package
    pub fn path(&self) -> PathBuf { self.path.to_owned() }

    /// Get the full name of this package
    pub fn name(&self) -> String {
        self.category.to_owned() + "/" + &self.package
    }
}

impl AsRef<PathBuf> for Package {
    fn as_ref(&self) -> &PathBuf { &self.path }
}

impl From<Package> for PathBuf {
    fn from(other: Package) -> Self { other.path }
}
impl From<&Package> for PathBuf {
    fn from(other: &Package) -> Self { other.path.to_owned() }
}

/// Represent a discrete Gentoo ebuild
#[cfg_attr(feature = "external_doc", doc(include = "struct.Ebuild.md"))]
#[derive(Debug, Clone, Eq, PartialEq, Ord, PartialOrd, Hash)]
pub struct Ebuild {
    root:     PathBuf,
    category: String,
    package:  String,
    ebuild:   String,
    path:     PathBuf,
}

impl Ebuild {
    /// Construct a new ebuild explicitly
    pub fn new<'a, P, S, SS, SSS>(
        root: P, category: S, package: SS, ebuild: SSS,
    ) -> Self
    where
        P: Into<PathBuf>,
        S: Into<Cow<'a, str>>,
        SS: Into<Cow<'a, str>>,
        SSS: Into<Cow<'a, str>>,
    {
        let r = root.into();
        let c = category.into().into_owned();
        let p = package.into().into_owned();
        let e = ebuild.into().into_owned();
        let path = r.join(&c).join(&p).join(&e);
        Self { root: r, category: c, package: p, ebuild: e, path }
    }

    /// Returns a path to the ebuild file
    pub fn path(&self) -> PathBuf { self.path.to_owned() }
}

impl AsRef<PathBuf> for Ebuild {
    fn as_ref(&self) -> &PathBuf { &self.path }
}

impl From<Ebuild> for PathBuf {
    fn from(other: Ebuild) -> Self { other.path }
}
impl From<&Ebuild> for PathBuf {
    fn from(other: &Ebuild) -> Self { other.path.to_owned() }
}
