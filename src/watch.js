// require("./paint.js");
import { startRootElement } from './start.js'

if (typeof(MutationObserver) !== 'undefined') {
  var watcher = new MutationObserver(function(mutations, watcher) {
    mutations.forEach(function(mutation) {
      var element = mutation.target;
      if(element) startRootElement(element);
    });
  });
}

export var watch = function(){
  var elements, count = 0;
  var interval = setInterval(function () {
    count++;
    if(count>=300){ clearInterval(interval); }
    // count all classes
    if( document.querySelectorAll('[cssist]').length>=1 ) elements = document.querySelectorAll('[cssist]');
    else elements = document.querySelectorAll('body');

    if(elements.length>=1){
      clearInterval(interval);
      for(var i=0; i<elements.length; i++){
        var element = elements[i];
        startRootElement(element);
        if(watcher) watcher.observe(element, { attributes: true,  childList: true });
      }
    }

  }, 10);

};
