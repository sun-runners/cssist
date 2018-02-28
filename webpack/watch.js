require("./paint.js");
(function(){
  cssist.watch = {
    change : function(element){
      element.addEventListener('DOMNodeInserted', function(event){
        cssist.paint.rootElement(event.target);
      }, false);
    },
    start : function(){
      var self = this;
      var elements;
      var interval = setInterval(function () {
        if( document.querySelectorAll('[cssist]').length>=1 ){
          elements = document.querySelectorAll('[cssist]');
        }
        else {
          elements = document.querySelectorAll('body');
        }
        if(elements.length>=1){
          clearInterval(interval);
          for(var i=0; i<elements.length; i++){
            cssist.paint.rootElement(elements[i]);
            self.change(elements[i]);
          }
        }

      }, 1000);

    }
  };
})();
