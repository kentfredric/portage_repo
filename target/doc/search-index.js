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
  , [13, "RepoName", "", "An error returned by a RepoName file decoder", 0, null]
  , [13, "CommentedFileReader", "", "An error returned from a CommentedFileReader decoder", 0, null]
  , [4, "ErrorKind", "", "Types of errors returned by this crate", null, null]
  , [13, "PathNotFound", "", "A specified path was not found on the filesystem", 1, null]
  , [13, "PathAccessError", "", "A specified path generated IO errors during access", 1, null]
  , [13, "FileReadError", "", "An error occurred reading a file", 1, null]
  , [13, "FileDecodeError", "", "Errors occurred decoding file content", 1, null]
  , [0, "file", "portage_repo", "Utilities for decoding various portage file formats", null, null]
  , [3, "RepoName", "portage_repo::file", "Decode `${repo}/profiles/repo_name`", null, null]
  , [3, "CommentedFileReader", "", "Decode line based files, skipping lines starting with \"#\"", null, null]
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
    ["result", ["string", "errorkind"]]
    , ["string"]
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
  , [11, "new", "portage_repo", "Construct a new Repository trait object", 4, [
   [
    ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Returns the path to this repository", 4, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "name", "", "Extract this repositories name from its profiles dir", 4, [
   [
    ["self"]
   ]
   , [
    ["result", ["string", "errorkind"]]
    , ["string"]
    , ["errorkind"]
   ]
  ]]
  , [11, "new", "", "Construct a new [`Category`] explicitly", 5, [
   [
    ["s"]
    , ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Returns the path to this repository", 5, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "name", "", "Return the name of the category", 5, [
   [
    ["self"]
   ]
   , ["string"]
  ]]
  , [11, "new", "", "Construct a new Package Type Object", 6, [
   [
    ["ss"]
    , ["s"]
    , ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Return the path to a gentoo package", 6, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "name", "", "Get the full name of this package", 6, [
   [
    ["self"]
   ]
   , ["string"]
  ]]
  , [11, "new", "", "Construct a new ebuild explicitly", 7, [
   [
    ["ss"]
    , ["sss"]
    , ["p"]
    , ["s"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Returns a path to the ebuild file", 7, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "to_owned", "", "", 4, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 4, [
   [
    ["t"]
    , ["self"]
   ]
  ]]
  , [11, "into", "", "", 4, [
   []
   , ["u"]
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
  , [11, "to_owned", "", "", 5, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 5, [
   [
    ["t"]
    , ["self"]
   ]
  ]]
  , [11, "into", "", "", 5, [
   []
   , ["u"]
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
  , [11, "eq", "portage_repo", "", 4, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 4, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "eq", "", "", 5, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 5, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "eq", "", "", 6, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 6, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "eq", "", "", 7, [
   [
    ["self"]
    , ["ebuild"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 7, [
   [
    ["self"]
    , ["ebuild"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 4, [
   [
    ["self"]
    , ["repository"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 4, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 4, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 4, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 4, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 5, [
   [
    ["self"]
    , ["category"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 5, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 5, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 5, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 5, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 6, [
   [
    ["self"]
    , ["package"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 6, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 6, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 6, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 6, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 7, [
   [
    ["self"]
    , ["ebuild"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 7, [
   [
    ["self"]
    , ["ebuild"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 7, [
   [
    ["self"]
    , ["ebuild"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 7, [
   [
    ["self"]
    , ["ebuild"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 7, [
   [
    ["self"]
    , ["ebuild"]
   ]
   , ["bool"]
  ]]
  , [11, "cmp", "", "", 4, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["ordering"]
  ]]
  , [11, "cmp", "", "", 5, [
   [
    ["self"]
    , ["category"]
   ]
   , ["ordering"]
  ]]
  , [11, "cmp", "", "", 6, [
   [
    ["self"]
    , ["package"]
   ]
   , ["ordering"]
  ]]
  , [11, "cmp", "", "", 7, [
   [
    ["self"]
    , ["ebuild"]
   ]
   , ["ordering"]
  ]]
  , [11, "as_ref", "", "", 4, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "as_ref", "", "", 5, [
   [
    ["self"]
   ]
   , ["pathbuf"]
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
  , [11, "clone", "portage_repo", "", 4, [
   [
    ["self"]
   ]
   , ["repository"]
  ]]
  , [11, "clone", "", "", 5, [
   [
    ["self"]
   ]
   , ["category"]
  ]]
  , [11, "clone", "", "", 6, [
   [
    ["self"]
   ]
   , ["package"]
  ]]
  , [11, "clone", "", "", 7, [
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
  , [11, "hash", "portage_repo", "", 4, [
   [
    ["self"]
    , ["__h"]
   ]
  ]]
  , [11, "hash", "", "", 5, [
   [
    ["self"]
    , ["__h"]
   ]
  ]]
  , [11, "hash", "", "", 6, [
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
  , [11, "fmt", "portage_repo", "", 4, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 5, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 6, [
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
 ]
 , "p": [
  [4, "ErrorSource"]
  , [4, "ErrorKind"]
  , [3, "RepoName"]
  , [3, "CommentedFileReader"]
  , [3, "Repository"]
  , [3, "Category"]
  , [3, "Package"]
  , [3, "Ebuild"]
 ]
};
searchIndex["repo_info"] = {
 "doc": "Demonstrate basic use of [`portage_repo::Repository`]"
 , "i": []
 , "p": []
};
initSearch(searchIndex);
addSearchOptions(searchIndex);
