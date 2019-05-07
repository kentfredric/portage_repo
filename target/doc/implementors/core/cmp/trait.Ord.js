(function() {
 var implementors = {};
 implementors["portage_repo"] = [{
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"portage_repo/struct.Repository.html\" title=\"struct portage_repo::Repository\">Repository</a>"
  , synthetic: false
  , types: ["portage_repo::Repository"]
 }, {
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"portage_repo/struct.Category.html\" title=\"struct portage_repo::Category\">Category</a>"
  , synthetic: false
  , types: ["portage_repo::Category"]
 }, {
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> for <a class=\"struct\" href=\"portage_repo/struct.Package.html\" title=\"struct portage_repo::Package\">Package</a>"
  , synthetic: false
  , types: ["portage_repo::Package"]
 }, ];

 if (window.register_implementors) {
  window.register_implementors(implementors);
 } else {
  window.pending_implementors = implementors;
 }

})()
