require("./get.js");
(function(){
  peci.check = {
    repeatedClass : function(element, peci_class){
  		if(!(element, peci_class)){ return false; }
  		var peci_css = peci.get.css(peci_class);
      var classList;
      if(element.classList) classList = element.classList;
      else classList = element.className.split(' ');
      if(!classList.length>0) return true;
      for(var i=0; i<classList.length; i++){
        if(peci_css.property == peci.get.property(classList[i])){ return false; }
        if(i==classList.length-1){ return true; }
      }
  	}
  };
})();
