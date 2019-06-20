var N = null
 , E = ""
 , T = "t"
 , U = "u"
 , searchIndex = {};

searchIndex["portage_repo"] = {
 "doc": "A low-level interface for working with Gentoo portage…"
 , "i": [
  [3, "Repository", "portage_repo", "Represents a gentoo repository", null, null]
  , [0, "err", "", "Various enums for representing Error states", null, null]
  , [4, "ErrorSource", "portage_repo::err", "Metadata about origin of an error", null, null]
  , [4, "ErrorKind", "", "Types of errors returned by this crate", null, null]
  , [11, "new", "portage_repo", "Construct a new Repository trait object", 0, [
   [
    ["p"]
   ]
   , ["self"]
  ]]
  , [11, "path", "", "Returns the path to this repository", 0, [
   [
    ["self"]
   ]
   , ["pathbuf"]
  ]]
  , [11, "to_owned", "", "", 0, [
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
  , [11, "to_owned", "portage_repo::err", "", 1, [
   [
    ["self"]
   ]
   , ["t"]
  ]]
  , [11, "clone_into", "", "", 1, [
   [
    ["t"]
    , ["self"]
   ]
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
  , [11, "to_owned", "", "", 2, [
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
  , [11, "to_string", "", "", 2, [
   [
    ["self"]
   ]
   , ["string"]
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
  , [11, "eq", "portage_repo", "", 0, [
   [
    ["repository"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 0, [
   [
    ["repository"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 0, [
   [
    ["repository"]
    , ["self"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 0, [
   [
    ["repository"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 0, [
   [
    ["repository"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 0, [
   [
    ["repository"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 0, [
   [
    ["repository"]
    , ["self"]
   ]
   , ["bool"]
  ]]
  , [11, "cmp", "", "", 0, [
   [
    ["repository"]
    , ["self"]
   ]
   , ["ordering"]
  ]]
  , [11, "clone", "portage_repo::err", "", 1, [
   [
    ["self"]
   ]
   , ["errorsource"]
  ]]
  , [11, "clone", "", "", 2, [
   [
    ["self"]
   ]
   , ["errorkind"]
  ]]
  , [11, "clone", "portage_repo", "", 0, [
   [
    ["self"]
   ]
   , ["repository"]
  ]]
  , [11, "hash", "", "", 0, [
   [
    ["self"]
    , ["__h"]
   ]
  ]]
  , [11, "fmt", "portage_repo::err", "", 1, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "", "", 2, [
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
  , [11, "fmt", "", "", 2, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
  , [11, "fmt", "portage_repo", "", 0, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
 ]
 , "p": [
  [3, "Repository"]
  , [4, "ErrorSource"]
  , [4, "ErrorKind"]
 ]
};
searchIndex["repo_info"] = {
 "doc": "Demonstrate basic use of [`portage_repo::Repository`]"
 , "i": []
 , "p": []
};
initSearch(searchIndex);
addSearchOptions(searchIndex);
