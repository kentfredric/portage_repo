(function() {
 var implementors = {};
 implementors["portage_repo"] = [{
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"portage_repo/err/enum.ErrorSource.html\" title=\"enum portage_repo::err::ErrorSource\">ErrorSource</a>"
  , synthetic: false
  , types: ["portage_repo::err::ErrorSource"]
 }, {
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"portage_repo/file/struct.RepoName.html\" title=\"struct portage_repo::file::RepoName\">RepoName</a>"
  , synthetic: false
  , types: ["portage_repo::file::RepoName"]
 }, {
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"portage_repo/struct.Repository.html\" title=\"struct portage_repo::Repository\">Repository</a>"
  , synthetic: false
  , types: ["portage_repo::Repository"]
 }, ];

 if (window.register_implementors) {
  window.register_implementors(implementors);
 } else {
  window.pending_implementors = implementors;
 }

})()
