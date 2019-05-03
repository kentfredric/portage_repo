//! Demonstrate basic use of [`portage_repo::Repository`]
//!
//! ## Usage
//! ```bash
//! cargo run --release --example repo-info PATH
//! ```

use portage_repo::{err::ErrorKind, Repository};
use std::env;

fn main() {
    let first =
        env::args_os().nth(1).expect("Missing path argument to repository");
    let r = Repository::new(first);
    println!("{:?}", r);
    println!("path: {:?}", r.path());
    println!("name: {:}", match r.name() {
        Ok(s) => s.to_string(),
        Err(e @ ErrorKind::PathNotFound(..)) => format!("<unknown> ({})", e),
        Err(e) => panic!("{:?}", e),
    });
}
