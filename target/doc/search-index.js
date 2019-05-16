var N = null
 , E = ""
 , T = "t"
 , U = "u"
 , searchIndex = {};

searchIndex["category_info"] = {
 "doc": "Demonstrate basic usage of `portage_repo::Category`"
 , "i": []
 , "p": []
};
searchIndex["ebuild_info"] = {
 "doc": "Demonstrate basic usage of `portage_repo::Ebuild`"
 , "i": []
 , "p": []
};
searchIndex["package_info"] = {
 "doc": "Demonstrate basic usage of `portage_repo::Package`"
 , "i": []
 , "p": []
};
searchIndex["portage_repo"] = {
 "doc": "A low-level interface for working with Gentoo portage…"
 , "i": [
  [3, "Repository", "portage_repo", "Represents a gentoo repository", null, null]
  , [3, "Category", "", "Represents a concrete Gentoo category", null, null]
  , [3, "Package", "", "Represents a discrete gentoo package", null, null]
  , [3, "Ebuild", "", "Represent a discrete Gentoo ebuild", null, null]
  , [0, "err", "", "Various enums for representing Error states", null, null]
  , [4, "ErrorSource", "portage_repo::err", "Metadata about origin of an error", null, null]
  , [13, "CategoryFileIterator", "", "An error from a CategoryFileIterator", 0, null]
  , [13, "RepoName", "", "An error returned by a RepoName file decoder", 0, null]
  , [13, "CommentedFileReader", "", "An error returned from a CommentedFileReader decoder", 0, null]
  , [4, "ErrorKind", "", "Types of errors returned by this crate", null, null]
  , [13, "PathNotFound", "", "A specified path was not found on the filesystem", 1, null]
  , [13, "PathAccessError", "", "A specified path generated IO errors during access", 1, null]
  , [13, "NotAFile", "", "A path was expected to be a file, but it was not", 1, null]
  , [13, "FileReadError", "", "An error occurred reading a file", 1, null]
  , [13, "FileDecodeError", "", "Errors occurred decoding file content", 1, null]
  , [0, "file", "portage_repo", "Utilities for decoding various portage file formats", null, null]
  , [3, "RepoName", "portage_repo::file", "Decode `${repo}/profiles/repo_name`", null, null]
  , [3, "CommentedFileReader", "", "Decode line based files, skipping lines starting with \"#\"", null, null]
  , [3, "Categories", "", "Decode `${repo}/profiles/categories`", null, null]
  , [11, "new", "", "Create a `repo_name` file decoder for the given file `path`", 2, [
   [
    ["p"]
   ]
   , ["self"]
  ]]
  , [11, "get", "", "Obtain the name of the repo from the file", 2, [
   [
    ["self"]
   ]
   , [
    ["string"]
    , ["result", ["string", "errorkind"]]
    , ["errorkind"]
   ]
  ]]
  , [11, "for_file", "", "Creates an iterating reader for the given file", 3, [
   [
    ["p"]
   ]
   , [
    ["result", ["errorkind"]]
    , ["errorkind"]
   ]
  ]]
  , [11, "for_file", "", "Creates an iterating reader for the given file", 4, [
   [
    ["p"]
   ]
   , [
    ["result", ["errorkind"]]
    , ["errorkind"]
   ]
  ]]
  , [0, "iter", "portage_repo", "Various iterators over portage structures", null, null]
  , [3, "CategoryFileIterator", "portage_repo::iter", "Iterate a `categories` file in a portage repository", null, null]
  , [11, "for_file", "", "Create a [`CategoryFileIterator`] for a given `file` in a…", 5, [
   [
    ["q"]
    , ["p"]
   ]
   , [
    ["result", ["errorkind"]]
    , ["errorkind"]
   ]
  ]]
  , [11, "new", "portage_repo", "Construct a new Repository trait object", 6, [
   [
    ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Returns the path to this repository", 6, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "name", "", "Extract this repositories name from its profiles dir", 6, [
   [
    ["self"]
   ]
   , [
    ["string"]
    , ["result", ["string", "errorkind"]]
    , ["errorkind"]
   ]
  ]]
  , [11, "new", "", "Construct a new [`Category`] explicitly", 7, [
   [
    ["s"]
    , ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Returns the path to this repository", 7, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "name", "", "Return the name of the category", 7, [
   [
    ["self"]
   ]
   , ["string"]
  ]]
  , [11, "new", "", "Construct a new Package Type Object", 8, [
   [
    ["ss"]
    , ["s"]
    , ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Return the path to a gentoo package", 8, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "name", "", "Get the full name of this package", 8, [
   [
    ["self"]
   ]
   , ["string"]
  ]]
  , [11, "new", "", "Construct a new ebuild explicitly", 9, [
   [
    ["ss"]
    , ["sss"]
    , ["p"]
    , ["s"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Returns a path to the ebuild file", 9, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "to_owned", "", "", 6, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 6, [
   [
    ["t"]
    , ["self"]
   ]
  ]]
  , [11, "into", "", "", 6, [
   []
   , ["u"]
  ]]
  , [11, "from", "", "", 6, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 6, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 6, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 6, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 6, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 6, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "to_owned", "", "", 7, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 7, [
   [
    ["t"]
    , ["self"]
   ]
  ]]
  , [11, "into", "", "", 7, [
   []
   , ["u"]
  ]]
  , [11, "from", "", "", 7, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 7, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 7, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 7, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 7, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 7, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "to_owned", "", "", 8, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 8, [
   [
    ["t"]
    , ["self"]
   ]
  ]]
  , [11, "into", "", "", 8, [
   []
   , ["u"]
  ]]
  , [11, "from", "", "", 8, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 8, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 8, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 8, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 8, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 8, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "to_owned", "", "", 9, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 9, [
   [
    ["t"]
    , ["self"]
   ]
  ]]
  , [11, "into", "", "", 9, [
   []
   , ["u"]
  ]]
  , [11, "from", "", "", 9, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 9, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 9, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 9, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 9, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 9, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "to_owned", "portage_repo::err", "", 0, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 0, [
   [
    ["t"]
    , ["self"]
   ]
  ]]
  , [11, "into", "", "", 0, [
   []
   , ["u"]
  ]]
  , [11, "to_string", "", "", 0, [
   [
    ["self"]
   ]
   , ["string"]
  ]]
  , [11, "from", "", "", 0, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 0, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 0, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 0, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 0, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 0, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "into", "", "", 1, [
   []
   , ["u"]
  ]]
  , [11, "to_string", "", "", 1, [
   [
    ["self"]
   ]
   , ["string"]
  ]]
  , [11, "from", "", "", 1, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 1, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 1, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 1, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 1, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 1, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "to_owned", "portage_repo::file", "", 2, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 2, [
   [
    ["t"]
    , ["self"]
   ]
  ]]
  , [11, "into", "", "", 2, [
   []
   , ["u"]
  ]]
  , [11, "from", "", "", 2, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 2, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 2, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 2, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 2, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 2, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "into", "", "", 3, [
   []
   , ["u"]
  ]]
  , [11, "into_iter", "", "", 3, [
   []
   , ["i"]
  ]]
  , [11, "from", "", "", 3, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 3, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 3, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 3, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 3, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 3, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "into", "", "", 4, [
   []
   , ["u"]
  ]]
  , [11, "into_iter", "", "", 4, [
   []
   , ["i"]
  ]]
  , [11, "from", "", "", 4, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 4, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 4, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 4, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 4, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 4, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "into", "portage_repo::iter", "", 5, [
   []
   , ["u"]
  ]]
  , [11, "into_iter", "", "", 5, [
   []
   , ["i"]
  ]]
  , [11, "from", "", "", 5, [
   [
    ["t"]
   ]
   , ["t"]
  ]]
  , [11, "try_from", "", "", 5, [
   [
    ["u"]
   ]
   , ["result"]
  ]]
  , [11, "try_into", "", "", 5, [
   []
   , ["result"]
  ]]
  , [11, "borrow_mut", "", "", 5, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "borrow", "", "", 5, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "type_id", "", "", 5, [
   [
    ["self"]
   ]
   , ["typeid"]
  ]]
  , [11, "eq", "portage_repo", "", 6, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 6, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "eq", "", "", 7, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 7, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "eq", "", "", 8, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 8, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "eq", "", "", 9, [
   [
    ["ebuild"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 9, [
   [
    ["ebuild"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 6, [
   [
    ["self"]
    , ["repository"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 6, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 6, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 6, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 6, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 7, [
   [
    ["self"]
    , ["category"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 7, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 7, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 7, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 7, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 8, [
   [
    ["self"]
    , ["package"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 8, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 8, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 8, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 8, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 9, [
   [
    ["ebuild"]
    , ["self"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 9, [
   [
    ["ebuild"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 9, [
   [
    ["ebuild"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 9, [
   [
    ["ebuild"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 9, [
   [
    ["ebuild"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "cmp", "", "", 6, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["ordering"]
  ]]
  , [11, "cmp", "", "", 7, [
   [
    ["self"]
    , ["category"]
   ]
   , ["ordering"]
  ]]
  , [11, "cmp", "", "", 8, [
   [
    ["self"]
    , ["package"]
   ]
   , ["ordering"]
  ]]
  , [11, "cmp", "", "", 9, [
   [
    ["ebuild"]
    , ["self"]
   ]
   , ["ordering"]
  ]]
  , [11, "as_ref", "", "", 6, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "as_ref", "", "", 7, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "as_ref", "", "", 8, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "as_ref", "", "", 9, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "clone", "portage_repo::err", "", 0, [
   [
    ["self"]
   ]
   , ["errorsource"]
  ]]
  , [11, "clone", "portage_repo::file", "", 2, [
   [
    ["self"]
   ]
   , ["reponame"]
  ]]
  , [11, "clone", "portage_repo", "", 6, [
   [
    ["self"]
   ]
   , ["repository"]
  ]]
  , [11, "clone", "", "", 7, [
   [
    ["self"]
   ]
   , ["category"]
  ]]
  , [11, "clone", "", "", 8, [
   [
    ["self"]
   ]
   , ["package"]
  ]]
  , [11, "clone", "", "", 9, [
   [
    ["self"]
   ]
   , ["ebuild"]
  ]]
  , [11, "next", "portage_repo::file", "", 3, [
   [
    ["self"]
   ]
   , ["option"]
  ]]
  , [11, "next", "", "", 4, [
   [
    ["self"]
   ]
   , ["option"]
  ]]
  , [11, "next", "portage_repo::iter", "", 5, [
   [
    ["self"]
   ]
   , ["option"]
  ]]
  , [11, "hash", "portage_repo", "", 6, [
   [
    ["self"]
    , ["__h"]
   ]
  ]]
  , [11, "hash", "", "", 7, [
   [
    ["self"]
    , ["__h"]
   ]
  ]]
  , [11, "hash", "", "", 8, [
   [
    ["self"]
    , ["__h"]
   ]
  ]]
  , [11, "hash", "", "", 9, [
   [
    ["self"]
    , ["__h"]
   ]
  ]]
  , [11, "fmt", "portage_repo::err", "", 0, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 1, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 0, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 1, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "portage_repo::file", "", 2, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 3, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 4, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "portage_repo::iter", "", 5, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "portage_repo", "", 6, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 7, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 8, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 9, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
 ]
 , "p": [
  [4, "ErrorSource"]
  , [4, "ErrorKind"]
  , [3, "RepoName"]
  , [3, "CommentedFileReader"]
  , [3, "Categories"]
  , [3, "CategoryFileIterator"]
  , [3, "Repository"]
  , [3, "Category"]
  , [3, "Package"]
  , [3, "Ebuild"]
 ]
};
searchIndex["repo_categories_byfile"] = {
 "doc": "Demonstrate basic use of…"
 , "i": []
 , "p": []
};
searchIndex["repo_info"] = {
 "doc": "Demonstrate basic use of [`portage_repo::Repository`]"
 , "i": []
 , "p": []
};
initSearch(searchIndex);
addSearchOptions(searchIndex);
