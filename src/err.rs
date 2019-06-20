//! Various enums for representing Error states

use display_attr::DisplayAttr;
use std::error;

/// Metadata about origin of an error
#[derive(DisplayAttr, Debug, Copy, Clone)]
#[cfg_attr(feature = "non_exhaustive", non_exhaustive)]
pub enum ErrorSource {}

/// Types of errors returned by this crate
#[derive(DisplayAttr, Debug, Copy, Clone)]
#[cfg_attr(feature = "non_exhaustive", non_exhaustive)]
pub enum ErrorKind {}

impl error::Error for ErrorKind {}
