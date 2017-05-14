(function(){
  peci.convert = {
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
      if(!( media_query_codes && media_query_codes.match(/(^(?:NX|NH|X|N)[0-9]+)?((?:NX|NH|X|N)[0-9]+)?$/) )) return;
      var media_query_codes_matches = media_query_codes.match(/(^(?:NX|NH|X|N)[0-9]+)?((?:NX|NH|X|N)[0-9]+)?$/);
      var media_queries = [];
      for(i=1; i<=media_query_codes_matches.length-1; i++){
        if(media_query_codes_matches[i]) media_queries.push(self.mediaQueryCode2mediaQuery(media_query_codes_matches[i]));
      }
      return media_queries;
    },
    mediaQueryCode2mediaQuery : function(media_query_code){
      if(!media_query_code) return null;
      var media_query = {};
      if(media_query_code.match(/^NX/)) media_query.key = 'max-height';
      else if(media_query_code.match(/^NH/)) media_query.key = 'min-height';
      else if(media_query_code.match(/^X/)) media_query.key = 'max-width';
      else if(media_query_code.match(/^N/)) media_query.key = 'min-width';
      else return null;
      media_query.value = media_query_code.match(/[0-9]+$/)[0]+'px';
      media_query.code = media_query_code;
      return media_query;
    },
    property2property_cors : function(property, value){
  		if(!(property&&value)) return;
      var css_content='';
      if(Array.isArray(value)){
        for(var i=0; i<value.length; i++){
          if(value[i].property&&value[i].value){
            css_content += value[i].property+': '+value[i].value+'; ';
          }
          else{
            css_content += property+': '+value[i]+'; '
          }
        }
        return css_content;
      }
      else{
        var broswer = ['webkit', 'moz', 'o', 'ms'];
        if(property.property) css_content = property.property+': '+value+'; ';
        else css_content = property+': '+value+'; ';
        for(var i=0; i<broswer.length; i++){
          css_content += '-'+broswer[i]+'-'+property+': '+value+'; '
        }
        return css_content;
      }
  	},
    css2css_cors : function(css, css_content){
      if(!css.property.cors) return '.'+css.class+(css.event?':'+css.event:'')+css_content;
      var css_cors = '';
      if(css.property&&css.property.cors&&css.property.cors.type&&css.property.cors.type == 'class'){
        for(var i=0; i<css.property.cors.list.length; i++){
          css_cors+='.'+css.class+(css.event?':'+css.event:'')+css.property.cors.list[i]+css_content;
          if(i!=css.property.cors.list.length-1){ css_cors+='\n\n'; }
        }
      }
      return css_cors;
  	},
    css2css_text : function(css){
      var css_content = ' {'+this.property2property_cors(css.property, css.value)+'}';
      var css_text = this.css2css_cors(css, css_content);
      return css_text;
    }
  };
})();
