(function(){
  cssist.convert = {
    eventCode2event : function(event_code){
      if(!(event_code && event_code.toLowerCase().match(/^ct|cy|p|kp|ku|h|f|a|me|mo|mm|md|mu|ml|mo|c|dc|w$/))) return;
      var events = { // CSS Pseudo-classes
        'a':'active',
        'c':'checked',
        'd':'disabled',
        'ey':'empty',
        'e':'enabled',
        'f':'focus',
        'h':'hover',
        'ir':'in-range',
        'i':'invalid',
        'l':'link',
        'oot':'only-of-type',
        'oc':'only-child',
        'o':'optional',
        'oor':'out-of-range',
        'ro':'read-only',
        'rw':'read-write',
        'r':'required',
        'r':'root',
        't':'target',
        'v':'valid',
        'vd':'visited'
      };
      return events[event_code.toLowerCase()];
    },
    mediaQueryCodes2mediaQueries : function(media_query_codes){
      var self = this;
      var media_queries = {};
      if(!media_query_codes) return media_queries;
      var media_query_codes_matches = media_query_codes.match(/(^(?:XH|NH|XW|NW|X|N)[0-9]+)?((?:XH|NH|XW|NW|X|N)[0-9]+)?$/);
      for(i=1; i<=media_query_codes_matches.length-1; i++){
        var media_query = self.mediaQueryCode2mediaQuery(media_query_codes_matches[i]);
        if(media_query) media_queries[media_query.key] = media_query.value;
      }
      return media_queries;
    },
    mediaQueryCode2mediaQuery : function(media_query_code){
      if(!media_query_code) return null;
      var media_query = {};
      if(media_query_code.match(/^XW[0-9]+/)||media_query_code.match(/^X[0-9]+/)) media_query.key = 'max_width';
      else if(media_query_code.match(/^NW[0-9]+/)||media_query_code.match(/^N[0-9]+/)) media_query.key = 'min_width';
      else if(media_query_code.match(/^XH[0-9]+/)) media_query.key = 'max_height';
      else if(media_query_code.match(/^NH[0-9]+/)) media_query.key = 'min_height';
      else return null;
      media_query.value = media_query_code.match(/[0-9]+$/)[0]+'px';
      return media_query;
    },
    css2css_text : function(css){
  		if(!(css.property&&css.value!=null&&css.value!=undefined)) return;
      var css_text='';
      if(Array.isArray(css.value)){
        for(var i=0; i<css.value.length; i++){
          if(css.value[i].property&&css.value[i].value){
            css_text += (css.value[i].property.name?css.value[i].property.name:css.value[i].property)+': '+css.value[i].value+'; ';
          }
          else{
            css_text += (css.property.name?css.property.name:css.property)+': '+css.value[i]+'; '
          }
        }
        return css_text;
      }
      else{
        var broswers = ['webkit', 'moz', 'o', 'ms'];
        if(css.property) css_text = (css.property.name?css.property.name:css.property)+': '+css.value+'; ';
        else css_text = (css.property.name?css.property.name:css.property)+': '+css.value+'; ';
        for(var i=0; i<broswers.length; i++){
          css_text += '-'+broswers[i]+'-'+(css.property.name?css.property.name:css.property)+': '+css.value+'; '
        }
        return css_text;
      }
  	},
    css2css_class : function(css){
  		if(!(css.class)) return;
      var class_event = css.class+(css.event?':'+css.event:'');
      var result = class_event;
      if(typeof css.property != 'string'){
        if(css.property&&css.property.afters&&css.property.afters.length>=1){
          result = '';
          for(var i=0; i<css.property.afters.length; i++){
            if(i>0) result += ','
            result += class_event+css.property.afters[i];
          }
        }
      }
      return result;
  	}
    // ,
    // css2css_cors : function(css, css_content){
    //   // if(!css.property.cors) return '.'+css.class+(css.event?':'+css.event:'')+css_content;
    //   // var css_cors = '';
    //   // if(css.property&&css.property.cors&&css.property.cors.type&&css.property.cors.type == 'class'){
    //   //   for(var i=0; i<css.property.cors.list.length; i++){
    //   //     css_cors+='.'+css.class+(css.event?':'+css.event:'')+css.property.cors.list[i]+css_content;
    //   //     if(i!=css.property.cors.list.length-1){ css_cors+='\n\n'; }
    //   //   }
    //   // }
    //   // return css_cors;
  	// },
    // css2css_text : function(css){
    //   var css_content = ' {'+this.property2property_cors(css.property, css.value)+'}';
    //   // var css_text = this.css2css_cors(css, css_content);
    //   return css_text;
    // }
  };
})();
