//! Demonstrate basic usage of
//! [`portage_repo::Ebuild`](::portage_repo::Ebuild)
//!
//! ## Usage
//! ```bash
//! cargo run --release --example category-info PATH CATEGORYNAME PACKAGENAME EBUILDNAME
//! ```

use portage_repo::Ebuild;
use std::env;

fn main() {
    let mut os_args = env::args_os().skip(1);
    let repo = os_args.next().expect("Missing path argument to repository");
    let cate = os_args.next().expect("Missing category name argument");
    let pack = os_args.next().expect("Missing package name argument");
    let ebui = os_args.next().expect("Missing ebuild name argument");
    let c = Ebuild::new(
        repo,
        cate.into_string().expect("category: Did not decode as unicode"),
        pack.into_string().expect("package: Did not decode as unicode"),
        ebui.into_string().expect("ebuild: Did not decode as unicode"),
    );
    println!("{:?}", c);
    println!("path: {:?}", c.path());
}
