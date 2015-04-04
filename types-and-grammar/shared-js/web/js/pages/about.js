(function(context){

  function init(){
    $("[rel=js-gimme]").click(function(evt) {
      var $local = $("[rel=js-local]");
      if ($local.is(":checked")) {
        var num = Foo.random();
        alert("Local: " + num);
      } else {
        $.ajax("/Foo")
          .then(function(resp) {
            alert("Remote: " + resp.answer);
          });
      }
    })
  }

  function teardown(){ }

  Pages.page_scripts["/about"] = {
    init: init,
    teardown: teardown
  };

})(window);
