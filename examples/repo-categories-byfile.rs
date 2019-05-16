//! Demonstrate basic use of [`portage_repo::iter::CategoryFileIterator`]
//!
//! ## Usage
//! ```bash
//! cargo run --release --example repo-categories-byfile PATH
//! ```

use portage_repo::{iter::CategoryFileIterator, Repository};
use std::env;
fn main() {
    let mut os_args = env::args_os().skip(1);
    let repo = Repository::new(
        os_args.next().expect("Missing path argument to repository"),
    );
    let iter = CategoryFileIterator::for_file(
        repo.path(),
        repo.path().join("profiles/categories"),
    )
    .expect("Could not create iterator");
    println!("{:?}", iter);
    for c in iter {
        let cat = c.expect("Error in category discovery");
        println!("{:?} in {:?}", cat.name(), cat.path());
    }
}
