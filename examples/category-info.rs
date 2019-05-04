//! Demonstrate basic usage of
//! [`portage_repo::Category`](::portage_repo::Category)
//!
//! ## Usage
//! ```bash
//! cargo run --release --example category-info PATH CATEGORYNAME
//! ```

use portage_repo::Category;
use std::env;

fn main() {
    let mut os_args = env::args_os().skip(1);
    let repo = os_args.next().expect("Missing path argument to repository");
    let cate = os_args.next().expect("Missing category name argument");
    let c = Category::new(
        repo,
        cate.into_string().expect("Did not decode as unicode"),
    );
    println!("{:?}", c);
}
