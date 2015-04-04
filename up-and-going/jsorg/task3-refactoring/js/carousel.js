var Carousel = (function(){

  function scrollLeft(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    if (position > 0) {
      position = Math.max(0,position - 250);
    }

    $items.css({ left: (-position) + "px" });
  }

  function scrollRight(evt){
    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();

    if (position < maxPosition) {
      position = Math.min(maxPosition,position + 250);
    }

    $items.css({ left: (-position) + "px" });
  }

  function clickPerson(evt) {
    var id = $(evt.target).attr("rel").replace(/^.*(\d+)/, "$1");
    Details.loadPerson(id);
  }

  function init() {
    $content = $("[rel=js-carousel] > [rel=js-content]");
    $items = $content.children("[rel*='js-items']");
    // $items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
    // $items = $("[rel*=js-carousel-items]");

    $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
    $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");

    maxPosition = ($items.width() - $content.width());
    position = 0;

    $items.on("click", "[rel*='js-item-']", clickPerson);

    $left.on("click", scrollLeft);
    $right.on("click", scrollRight);
  }

  var $content, $items, $left, $right,
      position, maxPosition;

  return {
    init: init
  }

})();
