(function() {
 var implementors = {};
 implementors["portage_repo"] = [{
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"portage_repo/err/enum.ErrorSource.html\" title=\"enum portage_repo::err::ErrorSource\">ErrorSource</a>"
  , synthetic: false
  , types: ["portage_repo::err::ErrorSource"]
 }, {
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"enum\" href=\"portage_repo/err/enum.ErrorKind.html\" title=\"enum portage_repo::err::ErrorKind\">ErrorKind</a>"
  , synthetic: false
  , types: ["portage_repo::err::ErrorKind"]
 }, ];

 if (window.register_implementors) {
  window.register_implementors(implementors);
 } else {
  window.pending_implementors = implementors;
 }

})()
