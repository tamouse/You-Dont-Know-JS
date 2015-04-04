// Whenever you want to create a feature that you want to be able to
// call both server-side and in the browser, set it off into it's own
// module, keep it separate from the rest of the application.

(function UMD(name,context,definition) {
  if (typeof module != "undefined" && module.exports) module.exports = definition(name,context);
  else if (typeof define == "function" && define.amd) define(definition);
  else context[name] = definition(name,context);
})("Foo",typeof global != "undefined" ? global : this,function definition(name,context) {
  "use strict";

  function random() {
    return Math.random();
  }

  var public_api = {
    random: random
  };

  return public_api;
});
