(function UMD(name,context,definition) {
  if (typeof module != "undefined" && module.exports) module.exports = definition(name,context);
  else if (typeof define == "function" && define.amd) define(definition);
  else context[name] = definition(name,context);
})("Tmpls",typeof global != "undefined" ? global : this,function definition(name,context) {
  "use strict";

  function init() {
    (function ___about__(G){var partial = G.definePartial, clone = G.cloneObj, error = G.error, extend = G.extend, cID = "/about";extend(cID,"/master");partial(function __content__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n\n<div id=\"content\">\n\n  <h1>About</h1>\n  <p>\n    <input type=\"checkbox\" rel=\"js-local\" /> <label for=\"local\">Local</label><br />\n    <input type=\"button\" value=\"gimme\" rel=\"js-gimme\">\n  </p>\n\n  Thanks!\n\n</div>\n\n";return ret;},"/about#content",{"type":2,"pos":{"line":4,"col":0},"val":"{$: \"#content\" }"});})(this.grips||grips);(function _____(G){var partial = G.definePartial, clone = G.cloneObj, error = G.error, extend = G.extend, cID = "/";extend(cID,"/master");partial(function __content__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n\n<div id=\"content\">\n\n  <h1>Shiny</h1>\n  <p>\n    ";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render("#stuff",ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":8,"pos":{"line":10,"col":15},"val":"#stuff"};return err;} else {return error(cID,{"type":8,"pos":{"line":10,"col":15},"val":"#stuff"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n  </p>\n\n  Thanks!\n\n</div>\n\n";return ret;},"/#content",{"type":2,"pos":{"line":4,"col":0},"val":"{$: \"#content\" }"});partial(function __stuff__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\nI've just about reached the middle of not taking you seriously. -- Mal\n";return ret;},"/#stuff",{"type":2,"pos":{"line":20,"col":0},"val":"{$: \"#stuff\" }"});})(this.grips||grips);(function ___master__(G){var partial = G.definePartial, clone = G.cloneObj, error = G.error, cID = "/master";partial(function __page__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;try {$$.title =$.page_title ? $.page_title : "Cool Awesome";} catch (err1) {return error(cID,{"type":11,"pos":{"line":2,"col":0},"val":"title = $.page_title ? $.page_title : \"Cool Awesome\""},"Assignment failed",err1);}ret += "\n\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <meta name=viewport content=\"width=device-width, initial-scale=1\">\n    <title>";try {ret += $$.title;} catch (err) {return error(cID,{"type":9,"pos":{"line":10,"col":20},"val":"title"},"Insert reference failed",err);}ret += "</title>\n    <link rel=\"stylesheet\" href=\"/css/site.css\">\n  </head>\n  <body>\n\n    <div id=\"notifications\"><div class=\"list\"></div><div class=\"close\">X</div></div>\n\n    ";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render("#nav",ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":8,"pos":{"line":17,"col":15},"val":"#nav"};return err;} else {return error(cID,{"type":8,"pos":{"line":17,"col":15},"val":"#nav"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n    ";try {ret2 = $;} catch (err) {return error(cID,{"type":12,"val":"$"},"Include template context reference failed",err);}try {ret2 = G.render("#content",ret2,$$);} catch (err) {if (err instanceof G.TemplateError) {err.ref = {"type":8,"pos":{"line":19,"col":15},"val":"#content"};return err;} else {return error(cID,{"type":8,"pos":{"line":19,"col":15},"val":"#content"},"Include template reference failed",err);}}if (ret2 instanceof G.TemplateError) {return ret2;} else {ret += ret2;}ret += "\n\n    <script src=\"/js/load.js\"></script>\n\n  </body>\n</html>\n\n";return ret;},"/master#page",{"type":2,"pos":{"line":1,"col":0},"val":"{$: \"#page\" }"});partial(function __nav__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;ret += "\n<nav>\n  <a href=\"/\">home</a>\n  <a href=\"/about\">about</a>\n</nav>\n";return ret;},"/master#nav",{"type":2,"pos":{"line":29,"col":0},"val":"{$: \"#nav\" }"});partial(function __content__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;return ret;},"/master#content",{"type":2,"pos":{"line":37,"col":0},"val":"{$: \"#content\" }"});partial(function __footer__($,$$){$$ = clone($$) || {};var i, ret = "", ret2, _;return ret;},"/master#footer",{"type":2,"pos":{"line":40,"col":0},"val":"{$: \"#footer\" }"});})(this.grips||grips);
  }

  // hybrid event bindings
  context.Events.once(name,init);

  var grips = context.grips;

  // module API
  var public_api = {
    init: init
  };

  return public_api;
});