//! Demonstrate basic usage of
//! [`portage_repo::Package`](::portage_repo::Package)
//!
//! ## Usage
//! ```bash
//! cargo run --release --example category-info PATH CATEGORYNAME PACKAGENAME
//! ```

use portage_repo::Package;
use std::env;

fn main() {
    let mut os_args = env::args_os().skip(1);
    let repo = os_args.next().expect("Missing path argument to repository");
    let cate = os_args.next().expect("Missing category name argument");
    let pack = os_args.next().expect("Missing package name argument");
    let c = Package::new(
        repo,
        cate.into_string().expect("category: Did not decode as unicode"),
        pack.into_string().expect("package: Did not decode as unicode"),
    );
    println!("{:?}", c);
}
