require("./get.js");
(function(){
  cssist.check = {
    repeatedClass : function(element, cssist_class){
  		if(!(element, cssist_class)){ return false; }
  		var cssist_css = cssist.get.css(cssist_class);
      var classList;
      if(element.classList) classList = element.classList;
      else classList = element.className.split(' ');
      if(!classList.length>0) return true;
      for(var i=0; i<classList.length; i++){
        if(cssist_css.property == cssist.get.property(classList[i])){ return false; }
        if(i==classList.length-1){ return true; }
      }
  	}
  };
})();
