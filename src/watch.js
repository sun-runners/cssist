import { initialize } from './initialize.js'
import { startRootElement } from './start.js'



var debug = false;



if (typeof(MutationObserver) !== 'undefined') {
  var watcher = new MutationObserver(function(mutations, watcher) {
    mutations.forEach(function(mutation) {
      if(mutation.addedNodes){
        var elements = mutation.addedNodes;
        for(var i=0; i<elements.length; i++){
          startRootElement(elements[i]);
        }
      } else {
        var element = mutation.target;
        if(element) startRootElement(element);
      }
    });
  });
}


export var watch = function(){
  var elements, count = 0;

  // Function Section
  var getElements = function(){
    return new Promise(function (resolve, reject) {

      var interval = setInterval(function () {
        count++;
        if(count>=20){
          elements = document.querySelectorAll('body');
          clearInterval(interval);
          resolve(elements);
        }
        // count all classes
        if( document.querySelectorAll('[cssist]').length>=1 ){
          if(!window.cssist) initialize();
          elements = document.querySelectorAll('[cssist]');
          window.cssist.is_partial = true;
          clearInterval(interval);
          resolve(elements);
        }
      }, 50);

    });
  }

  getElements().then(function(elements){
    if(!window.cssist) initialize();
    if(!(elements&&elements.length>=1)) return;

    for(var i=0; i<elements.length; i++){
      var element = elements[i];
      if(element.getAttribute('cssist') == 'important') window.cssist.is_important = true;
      startRootElement(element);
      // if(watcher) watcher.observe(element, { attributes: true,  childList: true });
      element.addEventListener('DOMNodeInserted', function(event){
        if(event && event.target && !event.target.cssist) startRootElement(event.target);
      }, false);
    }
  });

};
