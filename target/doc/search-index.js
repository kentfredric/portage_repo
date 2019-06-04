var N = null
 , E = ""
 , T = "t"
 , U = "u"
 , searchIndex = {};

searchIndex["portage_repo"] = {
 "doc": "A low-level interface for working with Gentoo portage…"
 , "i": [
  [3, "Repository", "portage_repo", "Represents a gentoo repository", null, null]
  , [11, "new", "", "Construct a new Repository trait object", 0, [
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
  , [11, "eq", "", "", 0, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "ne", "", "", 0, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "partial_cmp", "", "", 0, [
   [
    ["self"]
    , ["repository"]
   ]
   , [
    ["ordering"]
    , ["option", ["ordering"]]
   ]
  ]]
  , [11, "lt", "", "", 0, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "le", "", "", 0, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "gt", "", "", 0, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "ge", "", "", 0, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["bool"]
  ]]
  , [11, "cmp", "", "", 0, [
   [
    ["self"]
    , ["repository"]
   ]
   , ["ordering"]
  ]]
  , [11, "clone", "", "", 0, [
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
  , [11, "fmt", "", "", 0, [
   [
    ["self"]
    , ["formatter"]
   ]
   , ["result"]
  ]]
 ]
 , "p": [
  [3, "Repository"]
 ]
};
searchIndex["repo_info"] = {
 "doc": "Demonstrate basic use of [`portage_repo::Repository`]"
 , "i": []
 , "p": []
};
initSearch(searchIndex);
addSearchOptions(searchIndex);
