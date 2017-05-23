require("./get.js");
require("./convert.js");
(function(){
  var timeout;
  cssist.make = {
    cssToStyleSheet : function(css){
      var style_element = cssist.get.styleElement();
      var css_class = cssist.convert.css2css_class(css);
      var css_text = cssist.convert.css2css_text(css);
      var css_style = "."+css_class+" { "+css_text+" }";
      if(css.max_width||css.min_width||css.max_height||css.min_height){
        var css_mediaqueries = [];
        if(css.max_width) css_mediaqueries.push('max-width:'+css.max_width);
        if(css.min_width) css_mediaqueries.push('min-width:'+css.min_width);
        if(css.max_height) css_mediaqueries.push('max-height:'+css.max_height);
        if(css.min_height) css_mediaqueries.push('min-height:'+css.min_height);
        css_style = '@media ('+css_mediaqueries.join(' and ')+') {'+css_style+' }';
      }

      if(style_element.innerHTML.indexOf(css_style)==-1){
        style_element.innerHTML += css_style+'\n';
      }
      clearTimeout(timeout);
      timeout = setTimeout(function(){
        localStorage['cssist_style'] = JSON.stringify(style_element.innerHTML);
        console.log('%c'+style_element.innerHTML, "color:#616161; font-size:9px; line-height:18px;");
        var console_text = '%c****************************************** CSSIST NOTICE *******************************************\n'
        +'                                                                                                    \n'
        +'Hi! I am Cssist. Your cssist css is updated!                                                        \n'
        +'If you want to open the webpage faster at the first time, there are two ways.                       \n'
        +'1. Paste the above "css" codes into your css file.                                                  \n'
        +'2. You can download your "cssist.css" file by typing "cssist.download();" command into this console.\n'
        +'Cssist Version: '+cssist.VERSION+'                                                                               \n'
        +'                                                                                                    \n'
        +'****************************************************************************************************\n';
        var console_style = "width:100%; color:#FFC107; background:#000000; font-size:12px; padding-top:12px; padding-bottom:12px; line-height:36px;";
        console.log(console_text, console_style);
      });
    },
    classToStyleSheet: function(class_name) {
  		var css = cssist.get.cssOfClass(class_name);
  		if(css){
        this.cssToStyleSheet(css);
        return true;
      }
      else return false;
  	}
  };
})();
