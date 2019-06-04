//! Demonstrate basic use of [`portage_repo::Repository`]
//!
//! ## Usage
//! ```bash
//! cargo run --release --example repo-info PATH
//! ```

use portage_repo::Repository;
use std::env;

fn main() {
    let first =
        env::args_os().nth(1).expect("Missing path argument to repository");
    let r = Repository::new(first);
    println!("{:?}", r);
    println!("path: {:?}", r.path());
}
