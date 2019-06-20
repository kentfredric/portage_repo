//! Various enums for representing Error states

use display_attr::DisplayAttr;
use std::{error, io, path::PathBuf};

/// Metadata about origin of an error
#[derive(DisplayAttr, Debug, Copy, Clone)]
#[cfg_attr(feature = "non_exhaustive", non_exhaustive)]
pub enum ErrorSource {
    /// An error returned by a RepoName file decoder
    #[display(fmt = "via RepoName in {} @ l{}:c{}", _0, _1, _2)]
    RepoName(&'static str, u32, u32),
    /// An error returned from a CommentedFileReader decoder
    #[display(fmt = "via CommentedFileReader in {} @ l{}:c{}", _0, _1, _2)]
    CommentedFileReader(&'static str, u32, u32),
}

/// Types of errors returned by this crate
#[derive(DisplayAttr, Debug)]
#[cfg_attr(feature = "non_exhaustive", non_exhaustive)]
pub enum ErrorKind {
    /// A specified path was not found on the filesystem
    #[display(fmt = "Path {:?} not found: {} {}", _0, _1, _2)]
    PathNotFound(PathBuf, io::Error, ErrorSource),
    /// A specified path generated IO errors during access
    #[display(fmt = "Error accessing path {:?}: {} {}", _0, _1, _2)]
    PathAccessError(PathBuf, io::Error, ErrorSource),
    /// An error occurred reading a file
    #[display(fmt = "Error reading {:?}: {} {}", _0, _1, _2)]
    FileReadError(PathBuf, io::Error, ErrorSource),
    /// Errors occurred decoding file content
    #[display(fmt = "Error decoding {:?}: {} {}", _0, _1, _2)]
    FileDecodeError(PathBuf, io::Error, ErrorSource),
}

impl error::Error for ErrorKind {}
