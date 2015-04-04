// put event handlers for header links here
$(function() {
  $("[rel=js-controls]").on('click', "[rel*=js-]", function(e) {
    var $modal = $("[rel=js-modal]");
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    var url = $(e.target).attr("href");

    $.ajax(url, { dataType: "text"})
      .then(function(content) {
        $modal.html(content).show();
      });

  });
});
