(function(){
  peci.convert = {
		o2comma : function(num){
			return num.replace(/[0-9o]+/g, function(match){
			  return match.replace(/o/g, '.');
      });
		},
		snake2camel : function(snake){
			return snake.replace(/(\-\w)/g, function(match){return match[1].toUpperCase();});
		},
		camel2snake : function(snake){
			return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
				return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
			}).replace(/\s+/g, '');
		},
		colorCode2colorHex : function(color_code){
			if(!(color_code&&peci.colors[color_code])) return;
			return peci.colors[color_code];
		},
		colorHex2colorRGB : function(color_hex){
			if(!(color_hex&&color_hex.match('^#?[0-9a-zA-Z]{6}$'))) return;
			color_hex = color_hex.replace('#','');
			return {
				red : parseInt(color_hex.substring(0,2), 16),
				green : parseInt(color_hex.substring(2,4), 16),
				blue : parseInt(color_hex.substring(4,6), 16)
			};
		},
		colorRGBCode2colorRGB : function(color_rgb_code){
			if(!(color_rgb_code&&color_rgb_code.split('_').length==3)) return;
			color_rgb_code = color_rgb_code.split('_');
			return {
				red : color_rgb_code[0],
				green : color_rgb_code[1],
				blue : color_rgb_code[2]
			};
		},
		percentage2float : function(percentage){
			percentage = String(percentage);
			if(!(percentage&&percentage.match('(?:100|[1-9][0-9]|[0-9])$'))) percentage = 100;
			return Number(percentage)/100;
		},
		color2colorRGBA : function(color){
			if(!color) return;
      if(!color.match('^(?:(?:[0-9a-zA-Z]{6})|(?:[a-z]{2}(?:[1-9]00|50))|(?:[a-z]{2})|(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))(?:(?:\_)(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))){2})')) return;
			var color_rgba;
      color_rgb = color.match('^(?:(?:[0-9a-zA-Z]{6})|(?:[a-z]{2}(?:[1-9]00|50))|(?:[a-z]{2})|(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))(?:(?:\_)(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))){2})')[0];
			if(color_rgb.match('^([a-z]{2}(?:[1-9]00|50)|[a-z]{2})$')) color_rgba = this.colorHex2colorRGB(this.colorCode2colorHex(color_rgb.match('^([a-z]{2}(?:[1-9]00|50)|[a-z]{2})$')[0]));
			else if(color_rgb.match('^[0-9a-zA-Z]{6}$')) color_rgba = this.colorHex2colorRGB(color_rgb.match('^[0-9a-zA-Z]{6}$')[0]);
			else if(color_rgb.match('^(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))(?:(?:\_)(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))){2}$')) color_rgba = this.colorRGBCode2colorRGB(color_rgb.match('^(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))(?:(?:\_)(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))){2}$')[0]);
			else return;
			if(!color_rgba) return;
			if(color.match('_(?:100|[1-9][0-9]|[0-9])$')) color_rgba.opacity = this.percentage2float(color.match('(?:100|[1-9][0-9]|[0-9])$')[0]);
			else color_rgba.opacity = 100;
			return color_rgba;
		},
		color2cssRGBA : function(color){
			if(!color) return;
			color = this.color2colorRGBA(color);
      if(color){
        return 'rgba('+color.red+','+color.green+','+color.blue+','+color.opacity+')';
      }
      else return;
		},
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
