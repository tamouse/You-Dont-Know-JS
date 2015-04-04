var Header = (function() {

  function headerLinkClicks(e) {
    var $modal = $("[rel=js-modal]");
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var url = $(e.target).attr("href");

    $.ajax(url, { dataType: "text"})
      .then(function(content) {
        $modal.html(content).show();
      });

  };

  function init() {
    $("[rel=js-controls]").on('click', "[rel*=js-]", headerLinkClicks);
  };

  var $modal;

  EVT.on("initialize", init);

  return {
    init: init
  }

})();
