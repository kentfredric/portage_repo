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
  , [0, "err", "", "Various enums for representing Error states", null, null]
  , [4, "ErrorSource", "portage_repo::err", "Metadata about origin of an error", null, null]
  , [13, "RepoName", "", "An error returned by a RepoName file decoder", 0, null]
  , [4, "ErrorKind", "", "Types of errors returned by this crate", null, null]
  , [13, "PathNotFound", "", "A specified path was not found on the filesystem", 1, null]
  , [13, "FileReadError", "", "An error occurred reading a file", 1, null]
  , [0, "file", "portage_repo", "Utilities for decoding various portage file formats", null, null]
  , [3, "RepoName", "portage_repo::file", "Decode `${repo}/profiles/repo_name`", null, null]
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
  , [11, "new", "portage_repo", "Construct a new Repository trait object", 3, [
   [
    ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Returns the path to this repository", 3, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "name", "", "Extract this repositories name from its profiles dir", 3, [
   [
    ["self"]
   ]
   , [
    ["string"]
    , ["result", ["string", "errorkind"]]
    , ["errorkind"]
   ]
  ]]
  , [11, "new", "", "Construct a new [`Category`] explicitly", 4, [
   [
    ["s"]
    , ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Returns the path to this repository", 4, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "name", "", "Return the name of the category", 4, [
   [
    ["self"]
   ]
   , ["string"]
  ]]
  , [11, "new", "", "Construct a new Package Type Object", 5, [
   [
    ["ss"]
    , ["s"]
    , ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Return the path to a gentoo package", 5, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "to_owned", "", "", 3, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 3, [
   [
    ["t"]
    , ["self"]
   ]
  ]]
  , [11, "into", "", "", 3, [
   []
   , ["u"]
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
  , [11, "eq", "portage_repo", "", 3, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 3, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "eq", "", "", 4, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 4, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "eq", "", "", 5, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 5, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 3, [
   [
    ["self"]
    , ["repository"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 3, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 3, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 3, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 3, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 4, [
   [
    ["self"]
    , ["category"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 4, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 4, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 4, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 4, [
   [
    ["self"]
    , ["category"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 5, [
   [
    ["self"]
    , ["package"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 5, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 5, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 5, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 5, [
   [
    ["self"]
    , ["package"]
   ]
   , ["bool"]
  ]]
  , [11, "cmp", "", "", 3, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["ordering"]
  ]]
  , [11, "cmp", "", "", 4, [
   [
    ["self"]
    , ["category"]
   ]
   , ["ordering"]
  ]]
  , [11, "cmp", "", "", 5, [
   [
    ["self"]
    , ["package"]
   ]
   , ["ordering"]
  ]]
  , [11, "as_ref", "", "", 3, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "as_ref", "", "", 4, [
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
  , [11, "clone", "portage_repo", "", 3, [
   [
    ["self"]
   ]
   , ["repository"]
  ]]
  , [11, "clone", "", "", 4, [
   [
    ["self"]
   ]
   , ["category"]
  ]]
  , [11, "clone", "", "", 5, [
   [
    ["self"]
   ]
   , ["package"]
  ]]
  , [11, "hash", "", "", 3, [
   [
    ["self"]
    , ["__h"]
   ]
  ]]
  , [11, "hash", "", "", 4, [
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
  , [11, "fmt", "portage_repo", "", 3, [
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
  , [11, "fmt", "", "", 5, [
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
  , [3, "Repository"]
  , [3, "Category"]
  , [3, "Package"]
 ]
};
searchIndex["repo_info"] = {
 "doc": "Demonstrate basic use of [`portage_repo::Repository`]"
 , "i": []
 , "p": []
};
initSearch(searchIndex);
addSearchOptions(searchIndex);
