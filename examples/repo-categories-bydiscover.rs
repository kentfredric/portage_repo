//! Demonstrate basic use of [`portage_repo::iter::CategoryDirsIterator`]
//!
//! ## Usage
//! ```bash
//! cargo run --release --example repo-categories-bydiscovery PATH
//! ```

use portage_repo::{iter::CategoryDirsIterator, Repository};
use std::env;
fn main() {
    let mut os_args = env::args_os().skip(1);
    let repo = Repository::new(
        os_args.next().expect("Missing path argument to repository"),
    );
    let iter = CategoryDirsIterator::for_repo(repo.path())
        .expect("Could not creae iterator");
    println!("{:?}", iter);
    for c in iter {
        let cat = c.expect("Error in category discovery");
        println!("{:?} in {:?}", cat.name(), cat.path());
    }
}
