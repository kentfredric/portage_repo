//! Utilities for decoding various portage file formats

use crate::err::ErrorKind;
use std::{fs, io, path::PathBuf};

macro_rules! err {
    ($i:ident => $j:ident => $($x:expr),*) => {
        $crate::err::ErrorKind::$j($($x),*, $crate::err::ErrorSource::$i(file!(), line!(), column!()))
    };
}

/// Decode `${repo}/profiles/repo_name`
#[derive(Debug, Clone)]
pub struct RepoName {
    path: PathBuf,
}

impl RepoName {
    /// Create a `repo_name` file decoder for the given file `path`
    pub fn new<P>(path: P) -> Self
    where
        P: Into<PathBuf>,
    {
        Self { path: path.into() }
    }

    /// Obtain the name of the repo from the file
    pub fn get(&self) -> Result<String, ErrorKind> {
        fs::read_to_string(&self.path)
            .map_err(|e| match e.kind() {
                io::ErrorKind::NotFound => err!( RepoName => PathNotFound => self.path.to_owned(), e ),
                _ => err!( RepoName => FileReadError => self.path.to_owned(), e )
            })
            .map(|content| content.trim_end().to_owned())
    }
}
