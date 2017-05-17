require("./paint.js");
(function(){
  cssist.watch = {
    change : function(){
      document.addEventListener('DOMNodeInserted', function(event){
        cssist.paint.rootElement(event.target);
      }, false);
    },
    start : function(){
      var self = this;
      var start_interval = setInterval(function(){
        if(!document.querySelector('body')) return;
        self.change();
        cssist.paint.rootElement(document.querySelector('body'));
        clearInterval(start_interval);
      }, 1000);
    }
  };
})();
