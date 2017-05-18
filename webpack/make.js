require("./get.js");
require("./convert.js");
(function(){
  cssist.make = {
    css : function(css){
      if(!css) return;
  		if(!(css.suffix&&css.suffix.match(/(^(?:NX|NH|X|N)[0-9]+)((?:NX|NH|X|N)[0-9]+)?$/))) css.suffix = 'BASIC';
      css.text = cssist.convert.css2css_text(css);
      if(!cssist.styles) cssist.csses = {};
      if(!cssist.csses[css.suffix]) cssist.csses[css.suffix] = '';
  		if(cssist.csses[css.suffix].indexOf(css.text)==-1){
        cssist.csses[css.suffix] += '\n'+css.text+'\n';
      }
      if(!cssist.styles) cssist.styles = {};
      if(!cssist.styles[css.suffix]) this.sheet(css.suffix);

      if(!cssist.timeout) cssist.timeout = {};
      if(cssist.timeout[css.suffix]) clearTimeout(cssist.timeout[css.suffix]);
      cssist.timeout[css.suffix] = setTimeout(function(){
        cssist.styles[css.suffix].innerHTML = cssist.csses[css.suffix];
      }, 0);
  	},
    class : function(class_name) {
  		var css = cssist.get.css(class_name);
  		if(css){
        this.css(css);
        return true;
      }
      else return false;
  	},
    sheet : function(suffix){
      var style = document.createElement("STYLE");
      var media = 'all';
      var media_queries = cssist.convert.mediaQueryCodes2mediaQueries(suffix);
      if(media_queries&&media_queries.length==1&&media_queries[0].key=='max-width'){
        media_queries.unshift({ key:'min-width', value:'1px' });
      }
      if(media_queries&&media_queries.length>=1){
        for(var i=0; i<media_queries.length; i++){
          if(media_queries[i]) media += ' and ('+media_queries[i].key+':'+media_queries[i].value+')';
        }
      }
      style.setAttribute("media", media);
      style.setAttribute("type", 'text/css');
      style.setAttribute("id", suffix);
  		document.head.appendChild(style);
      if(!cssist.styles) cssist.styles = {};
      cssist.styles[suffix] = style;
  	}
  };
})();
