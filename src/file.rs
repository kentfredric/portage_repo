//! Utilities for decoding various portage file formats

use crate::err::ErrorKind;
use std::{
    fs,
    io::{self, BufRead},
    path::PathBuf,
};

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

/// Decode line based files, skipping lines starting with "#"
#[derive(Debug)]
pub struct CommentedFileReader {
    path: PathBuf,
    file: io::Lines<io::BufReader<fs::File>>,
}

impl CommentedFileReader {
    /// Creates an iterating reader for the given file
    pub fn for_file<P>(path: P) -> Result<Self, ErrorKind>
    where
        P: Into<PathBuf>,
    {
        let my_file = path.into();
        fs::File::open(&my_file)
            .map_err(|e| match e.kind() {
                io::ErrorKind::NotFound => err!( CommentedFileReader => PathNotFound => my_file.to_owned(), e ),
                _ => err!( CommentedFileReader => PathAccessError => my_file.to_owned(), e )
            })
            .map(|f| Self {
                path: my_file,
                file: io::BufReader::new(f).lines(),
            })
    }
}

impl Iterator for CommentedFileReader {
    type Item = Result<String, ErrorKind>;

    fn next(&mut self) -> Option<Self::Item> {
        loop {
            match self.file.next() {
                None => return None,
                Some(Err(e)) => match e.kind() {
                    io::ErrorKind::InvalidData => {
                        return Some(Err(
                            err!( CommentedFileReader => FileDecodeError => self.path.to_owned(), e ),
                        ))
                    },
                    _ => {
                        return Some(Err(
                            err!( CommentedFileReader => FileReadError => self.path.to_owned(), e ),
                        ))
                    },
                },
                Some(Ok(s)) => {
                    if s.is_empty() {
                        continue;
                    }
                    if s.trim_start().starts_with('#') {
                        continue;
                    }
                    return Some(Ok(s));
                },
            }
        }
    }
}
