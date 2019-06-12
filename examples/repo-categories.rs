//! Demonstrate basic use of [`portage_repo::iter::CategoryIterator`]
//!
//! ## Usage
//! ```bash
//! cargo run --release --example repo-categories PATH
//! ```

use portage_repo::{iter::CategoryIterator, Repository};
use std::env;
fn main() {
    let mut os_args = env::args_os().skip(1);
    let repo = Repository::new(
        os_args.next().expect("Missing path argument to repository"),
    );
    let iter = CategoryIterator::for_repo(repo.path())
        .expect("Could not creae iterator");
    println!("{:?}", iter);
    for c in iter {
        match c {
            Ok(cat) => println!("{:?} in {:?}", cat.name(), cat.path()),
            e @ Err(..) => println!("Error: {:?}", e),
        }
    }
}
