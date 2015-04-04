var Details = (function(){

  // on click of a carousel item, do an Ajax request for
  // the "details/2.html" (or whatever) file for the person
  // clicked, and load those contents into the `$content` div.

  // hint: you will probably want to use "event propagation"
  // (aka "event delegation"), by attaching a single event
  // handler the `$content` element rather than individual
  // event handlers to each item in the carousel.

  function loadPerson(id) {
    $.ajax("details/" + id + ".html", { dataType: "text"} )
      .then(function(content) {
        $content.html(content);
      });
  }

  function selectPerson(e) {
    e.preventDefault();
    var id = $(e.target).attr("data-person");
    EVT.emit("person-selected", id);
  }

  function init() {
    $content = $("[rel=js-details]");
    $content.on("click","[rel=js-select-person]",selectPerson);
    EVT.on("person-selected", loadPerson);
  }

  var $content;

  EVT.on("initialize", init);

  return {
    init: init,
    loadPerson: loadPerson
  }

})();
