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
			var class_names = cssist.get.classesOfElement(element);
      for(var i=0; i<class_names.length; i++){
        var class_name = class_names[i];
        if(i == class_names.length-1){
          element.setAttribute('cssist','');
        }
        if(!cssist.classes_success) cssist.classes_success = [];
        if(!cssist.classes_fail) cssist.classes_fail = [];
        if(cssist.get.styleElement().innerHTML.indexOf('.'+class_name+' {')==-1
          &&cssist.get.styleElement().innerHTML.indexOf('.'+class_name+':')==-1
          &&cssist.classes_success.indexOf(class_name)==-1
          &&cssist.classes_fail.indexOf()==-1
          &&['cen', 'cen-x', 'cen-y', 'b-img'].indexOf(class_name)==-1
        ){
          console.log(class_name);
          var result = cssist.make.classToStyleSheet(class_name);
          if(result) cssist.classes_success.push(class_name);
          else cssist.classes_fail.push(class_name);
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
  		}
    }
  };
})();
