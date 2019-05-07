A low-level interface for working with Gentoo portage repositories.

This crate provides a collection of utilities for iterating and
working with literal filesystem repositories for Gentoo Portage.

```rust
use portage_repo::{Category, Repository};
use std::path::Path;
let r = Repository::new("/usr/portage");
let c = Category::new("/usr/portage", "dev-perl");
assert_eq!(r.path(), Path::new("/usr/portage"));
assert_eq!(c.path(), Path::new("/usr/portage/dev-perl"));
assert_eq!(c.name(), "dev-perl");
```
