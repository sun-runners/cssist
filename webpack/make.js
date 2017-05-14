require("./get.js");
require("./convert.js");
(function(){
  peci.make = {
    css : function(css){
      if(!css) return;
  		if(!(css.suffix&&css.suffix.match(/(^(?:NX|NH|X|N)[0-9]+)((?:NX|NH|X|N)[0-9]+)?$/))) css.suffix = 'BASIC';
      css.text = peci.convert.css2css_text(css);
      if(!peci.styles) peci.csses = {};
      if(!peci.csses[css.suffix]) peci.csses[css.suffix] = '';
  		if(peci.csses[css.suffix].indexOf(css.text)==-1){
        peci.csses[css.suffix] += '\n'+css.text+'\n';
      }
      if(!peci.styles) peci.styles = {};
      if(!peci.styles[css.suffix]) this.sheet(css.suffix);

      if(!peci.timeout) peci.timeout = {};
      if(peci.timeout[css.suffix]) clearTimeout(peci.timeout[css.suffix]);
      peci.timeout[css.suffix] = setTimeout(function(){
        peci.styles[css.suffix].innerHTML = peci.csses[css.suffix];
      }, 0);
  	},
    class : function(class_name) {
  		var css = peci.get.css(class_name);
  		if(css) this.css(css);
  	},
    sheet : function(suffix){
      var style = document.createElement("STYLE");
      var media = 'all';
      var media_queries = peci.convert.mediaQueryCodes2mediaQueries(suffix);
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
      if(!peci.styles) peci.styles = {};
      peci.styles[suffix] = style;
  	}
  };
})();
