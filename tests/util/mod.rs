use display_attr::DisplayAttr;
use std::{
    error::Error,
    io,
    path::{Path, PathBuf},
};

#[derive(DisplayAttr, Debug)]
enum ReposError {
    #[display(fmt = "Path <{:?}> lacked expected parent", _0)]
    NoParentPath(PathBuf),
    #[display(fmt = "Path <{:?}> errored during canonicalization", _1)]
    CanonicalizationError(io::Error, PathBuf),
    #[display(fmt = "Could not access repo root <{:?}>", _1)]
    NoRepoDir(io::Error, PathBuf),
    #[display(fmt = "Path <{:?}> exists but is not a directory", _0)]
    NotADir(PathBuf),
}
impl Error for ReposError {}

pub(crate) fn repos(name: &str) -> Result<PathBuf, impl Error> {
    let root = Path::new(file!());
    let canon_path = match root.canonicalize() {
        Ok(c) => c,
        Err(e) => {
            return Err(ReposError::CanonicalizationError(
                e,
                root.to_path_buf(),
            ))
        },
    };
    let parent = match canon_path.parent() {
        Some(p) => p,
        None => return Err(ReposError::NoParentPath(canon_path)),
    };
    let super_parent = match parent.parent() {
        Some(p) => p,
        None => return Err(ReposError::NoParentPath(parent.to_owned())),
    };
    let repos_root = super_parent.join("repos").join(name);
    match repos_root.metadata() {
        Err(e) => Err(ReposError::NoRepoDir(e, repos_root)),
        Ok(m) => {
            if m.is_dir() {
                Ok(repos_root)
            } else {
                Err(ReposError::NotADir(repos_root))
            }
        },
    }
}
