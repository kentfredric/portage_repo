(function() {
 var implementors = {};
 implementors["portage_repo"] = [{
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"struct\" href=\"portage_repo/struct.Repository.html\" title=\"struct portage_repo::Repository\">Repository</a>"
  , synthetic: false
  , types: ["portage_repo::Repository"]
 }, {
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"struct\" href=\"portage_repo/struct.Category.html\" title=\"struct portage_repo::Category\">Category</a>"
  , synthetic: false
  , types: ["portage_repo::Category"]
 }, {
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>&gt; for <a class=\"struct\" href=\"portage_repo/struct.Package.html\" title=\"struct portage_repo::Package\">Package</a>"
  , synthetic: false
  , types: ["portage_repo::Package"]
 }, ];

 if (window.register_implementors) {
  window.register_implementors(implementors);
 } else {
  window.pending_implementors = implementors;
 }

})()
