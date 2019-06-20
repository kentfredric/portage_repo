(function() {
 var implementors = {};
 implementors["portage_repo"] = [{
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"portage_repo/struct.Repository.html\" title=\"struct portage_repo::Repository\">Repository</a>"
  , synthetic: true
  , types: ["portage_repo::Repository"]
 }, {
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"portage_repo/err/enum.ErrorSource.html\" title=\"enum portage_repo::err::ErrorSource\">ErrorSource</a>"
  , synthetic: true
  , types: ["portage_repo::err::ErrorSource"]
 }, {
  text: "impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"portage_repo/err/enum.ErrorKind.html\" title=\"enum portage_repo::err::ErrorKind\">ErrorKind</a>"
  , synthetic: true
  , types: ["portage_repo::err::ErrorKind"]
 }, ];

 if (window.register_implementors) {
  window.register_implementors(implementors);
 } else {
  window.pending_implementors = implementors;
 }

})()
