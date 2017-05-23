require("./get.js");
require("./convert.js");
(function(){
  cssist.make = {
    cssToStyleSheet : function(css){
      // @media only screen and (max-width : 1140px) { header { display: none; } }
      var style_element = cssist.get.styleElement();
      var css_class = cssist.convert.css2css_class(css);
      var css_text = cssist.convert.css2css_text(css);
      var css_style = "."+css_class+" { "+css_text+" }";
      if(style_element.innerHTML.indexOf(css_style)==-1){
        style_element.innerHTML += css_style+'\n';
      }
      localStorage['cssist_style'] = JSON.stringify(style_element.innerHTML);
  	},
    classToStyleSheet : function(class_name) {
  		var css = cssist.get.cssOfClass(class_name);
  		if(css){
        this.cssToStyleSheet(css);
        return true;
      }
      else return false;
  	}
  };
})();
