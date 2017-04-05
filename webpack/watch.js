require("./paint.js");
(function(){
  peci.watch = {
    change : function(){
      document.addEventListener('DOMNodeInserted', function(event){
        peci.paint.rootElement(event.target);
      }, false);
    },
    start : function(){
      var self = this;
      var start_interval = setInterval(function(){
        if(!document.querySelector('body')) return;
        self.change();
        peci.paint.rootElement(document.querySelector('body'));
        clearInterval(start_interval);
      }, 1000);
    }
  };
})();
