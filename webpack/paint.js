require("./init.js");
require("./make.js");
(function(){
  if (typeof(MutationObserver) !== 'undefined') {
    var mutationObserver = new MutationObserver(function(mutations, watcher) {
      var self = this;
      mutations.forEach(function(mutation) {
        var element = mutation.target;
        if(element && element.lastClassName !== element.className && typeof element.className=='string') cssist.paint.element(element);
        element.lastClassName = element.className;
      });
    });
  }
  cssist.paint = {
    element : function(element){
			var class_names = cssist.get.classes(element);
      for(var i=0; i<class_names.length; i++){
        var class_name = class_names[i];
        var cssist_CLASSES = [];
        if(!cssist.classes) cssist.classes = [];
        if(cssist.classes.indexOf(class_name)==-1){
          if(cssist.make.class(class_name)){
            cssist.classes.push(class_name);
          }
          if(i == class_names.length-1){
            element.setAttribute('cssist','');
          }
        }
      }
    },
    rootElement : function(element){
      var self = this;
      if( element && typeof element === 'object' && element.nodeType && element.nodeType !== 8 && element.tagName ){
  			var element_childen = element.querySelectorAll(':not([cssist])');
  			self.element(element);
        if(mutationObserver){
          mutationObserver.observe(element, { attributes: true,  attributeFilter: ['class'] });
        }
  			for(var i = 0; i < element_childen.length; i++) {
          var element_child = element_childen[i];
          self.element(element_child);
          if(mutationObserver){
            mutationObserver.observe(element_child, { attributes: true,  attributeFilter: ['class'] });
          }
      	}
        if(localStorage){
          localStorage['cssist_CSSES'] = JSON.stringify(cssist.csses);
          localStorage['cssist_CLASSES'] = JSON.stringify(cssist.classes);
        }
  		}
    }
  };
})();
