require("./replace.js");
require("./add.js");
require("./make.js");
(function(){
  peci.init = {
    settings : function(){

      var VERSION = '1.1.59';
      if( localStorage && localStorage['peci_VERSION'] && localStorage['peci_VERSION']==VERSION ){
        peci.csses = JSON.parse(localStorage['peci_CSSES']);
        peci.classes = JSON.parse(localStorage['peci_CLASSES']);
        for(var suffix in peci.csses){
          peci.make.sheet(suffix);
          peci.styles[suffix].innerHTML = peci.csses[suffix];
        }
      }
      else{
        if(localStorage){
          localStorage['peci_VERSION'] = VERSION;
          localStorage['peci_CSSES'] = null;
          localStorage['peci_CLASSES'] = null;
        }
      }

      peci.settings = {
        classesToReplace : {
    			// 'cen'		:	['t-50', 'l-50', 't-X_50Y_50', 'p-r', 'f-l'],
    			// 'cen-x'	:	['l-50', 't-X_50', 'p-r', 'f-l'],
    			// 'cen-y'	:	['t-50', 't-Y_50'],
    			// 'b-img'	:	['bs-c', 'br-n', 'bp-cc', 'of-c']
    		},
        elementsToAdd : {
    			// 'div'			:  ['p-r', 'f-l'],
    			// 'button'	:  ['d-b', 'p-r', 'f-l'],
    			// 'span'		:  ['d-b', 'p-r', 'f-l'],
    			// 'input'		:  ['d-b', 'p-r', 'f-l'],
    			// 'textarea':  ['d-b', 'p-r', 'f-l'],
    			// 'img'			:  ['d-b', 'p-r', 'f-l'],
    			// 'i'				:  ['p-r']
    		},
        classesToAdd:{
    			// 'bo-[0-9]+px(?:-(H|h|F|f))?'	  : ['bo-s'],
    			// 'bo_b-[0-9]+px(?:-(H|h|F|f))?'	: ['bo_b-s'],
    			// 'bo_t-[0-9]+px(?:-(H|h|F|f))?'	: ['bo_t-s'],
    			// 'bo_l-[0-9]+px(?:-(H|h|F|f))?'	: ['bo_l-s'],
    			// 'bo_r-[0-9]+px(?:-(H|h|F|f))?'	: ['bo_r-s']
    		}
      }
      peci.colors = {
    		rd:'#F44336', rd50: '#FFEBEE', rd100: '#FFCDD2', rd200: '#EF9A9A', rd300: '#E57373', rd400: '#EF5350', rd500: '#F44336', rd600: '#E53935', rd700: '#D32F2F', rd800: '#C62828', rd900: '#B71C1C', //Red
    		pk:'#E91E63', pk50: '#FCE4EC', pk100: '#F8BBD0', pk200: '#F48FB1', pk300: '#F06292', pk400: '#EC407A', pk500: '#E91E63', pk600: '#D81B60', pk700: '#C2185B', pk800: '#AD1457', pk900: '#880E4F', //Pink
    		pe:'#9C27B0', pe50: '#F3E5F5', pe100: '#E1BEE7', pe200: '#CE93D8', pe300: '#BA68C8', pe400: '#AB47BC', pe500: '#9C27B0', pe600: '#8E24AA', pe700: '#7B1FA2', pe800: '#6A1B9A', pe900: '#4A148C', //Purple
    		dp:'#673AB7', dp50: '#EDE7F6', dp100: '#D1C4E9', dp200: '#B39DDB', dp300: '#9575CD', dp400: '#7E57C2', dp500: '#673AB7', dp600: '#5E35B1', dp700: '#512DA8', dp800: '#4527A0', dp900: '#311B92', //Deep Purple
    		io:'#3F51B5', io50: '#E8EAF6', io100: '#C5CAE9', io200: '#9FA8DA', io300: '#7986CB', io400: '#5C6BC0', io500: '#3F51B5', io600: '#3949AB', io700: '#303F9F', io800: '#283593', io900: '#1A237E', //Indigo
    		be:'#2196F3', be50: '#E3F2FD', be100: '#BBDEFB', be200: '#90CAF9', be300: '#64B5F6', be400: '#42A5F5', be500: '#2196F3', be600: '#1E88E5', be700: '#1976D2', be800: '#1565C0', be900: '#0D47A1', //Blue
    		lb:'#03A9F4', lb50: '#E1F5FE', lb100: '#B3E5FC', lb200: '#81D4FA', lb300: '#4FC3F7', lb400: '#29B6F6', lb500: '#03A9F4', lb600: '#039BE5', lb700: '#0288D1', lb800: '#0277BD', lb900: '#01579B', //Light Blue
    		cn:'#00BCD4', cn50: '#E0F7FA', cn100: '#B2EBF2', cn200: '#80DEEA', cn300: '#4DD0E1', cn400: '#26C6DA', cn500: '#00BCD4', cn600: '#00ACC1', cn700: '#0097A7', cn800: '#00838F', cn900: '#006064', //Cyan
    		tl:'#009688', tl50: '#E0F2F1', tl100: '#B2DFDB', tl200: '#80CBC4', tl300: '#4DB6AC', tl400: '#26A69A', tl500: '#009688', tl600: '#00897B', tl700: '#00796B', tl800: '#00695C', tl900: '#004D40', //Teal
    		gn:'#4CAF50', gn50: '#E8F5E9', gn100: '#C8E6C9', gn200: '#A5D6A7', gn300: '#81C784', gn400: '#66BB6A', gn500: '#4CAF50', gn600: '#43A047', gn700: '#388E3C', gn800: '#2E7D32', gn900: '#1B5E20', //Green
    		lg:'#8BC34A', lg50: '#F1F8E9', lg100: '#DCEDC8', lg200: '#C5E1A5', lg300: '#AED581', lg400: '#9CCC65', lg500: '#8BC34A', lg600: '#7CB342', lg700: '#689F38', lg800: '#558B2F', lg900: '#33691E', //Light Green
    		le:'#CDDC39', le50: '#F9FBE7', le100: '#F0F4C3', le200: '#E6EE9C', le300: '#DCE775', le400: '#D4E157', le500: '#CDDC39', le600: '#C0CA33', le700: '#AFB42B', le800: '#9E9D24', le900: '#827717', //Lime
    		yw:'#FFEB3B', yw50: '#FFFDE7', yw100: '#FFF9C4', yw200: '#FFF59D', yw300: '#FFF176', yw400: '#FFEE58', yw500: '#FFEB3B', yw600: '#FDD835', yw700: '#FBC02D', yw800: '#F9A825', yw900: '#F57F17', //Yellow
    		ar:'#FFC107', ar50: '#FFF8E1', ar100: '#FFECB3', ar200: '#FFE082', ar300: '#FFD54F', ar400: '#FFCA28', ar500: '#FFC107', ar600: '#FFB300', ar700: '#FFA000', ar800: '#FF8F00', ar900: '#FF6F00', //Amber
    		oe:'#FF9800', oe50: '#FFF3E0', oe100: '#FFE0B2', oe200: '#FFCC80', oe300: '#FFB74D', oe400: '#FFA726', oe500: '#FF9800', oe600: '#FB8C00', oe700: '#F57C00', oe800: '#EF6C00', oe900: '#E65100', //Orange
    		de:'#FF5722', de50: '#FBE9E7', de100: '#FFCCBC', de200: '#FFAB91', de300: '#FF8A65', de400: '#FF7043', de500: '#FF5722', de600: '#F4511E', de700: '#E64A19', de800: '#D84315', de900: '#BF360C', //Deep Orange
    		bn:'#795548', bn50: '#EFEBE9', bn100: '#D7CCC8', bn200: '#BCAAA4', bn300: '#A1887F', bn400: '#8D6E63', bn500: '#795548', bn600: '#6D4C41', bn700: '#5D4037', bn800: '#4E342E', bn900: '#3E2723', //Brown
    		gy:'#9E9E9E', gy50: '#FAFAFA', gy100: '#F5F5F5', gy200: '#EEEEEE', gy300: '#E0E0E0', gy400: '#BDBDBD', gy500: '#9E9E9E', gy600: '#757575', gy700: '#616161', gy800: '#424242', gy900: '#212121', //Grey
    		by:'#607D8B', by50: '#ECEFF1', by100: '#CFD8DC', by200: '#B0BEC5', by300: '#90A4AE', by400: '#78909C', by500: '#607D8B', by600: '#546E7A', by700: '#455A64', by800: '#37474F', by900: '#263238', //Blue Grey
    		bk: '#000000', //Black
    		we: '#FFFFFF'//White
    	};
      peci.palette = [
    		{ // Color : red, #ff0000, rgb(255,0,0)
    			property : {
    				c:'color',
            pc:{property:'color', cors:{ type:'class', list:['::-webkit-input-placeholder', '::-moz-placeholder', ':-ms-input-placeholder', ':-moz-placeholder'] }},
    				b:'background',
    				bc:'background-color',
    				bo:'border-color', bo_t:'border-top-color', bo_b:'border-bottom-color', bo_l:'border-left-color', bo_r:'border-right-color'
    			},
    			match:'(?:(?:[0-9a-zA-Z]{6})|(?:[a-z]{2}(?:[1-9]00|50))|(?:[a-z]{2})|(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))(?:(?:\_)(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))){2})(?:_(100|[1-9][0-9]|[0-9]))?',
    			value : {},
    			getValue : function(value){
    				var color = peci.convert.color2colorRGBA(value);
    				if(color) return 'rgba('+color.red+','+color.green+','+color.blue+','+color.opacity+')';
    				else return;
    			}
    		},
        { // Gradient : linear-gradient, radial-gradient, repeating-linear-gradient, repeating-radial-gradient
          property : {
            b:'background', bi:'background-image', bo:'border-image'
          },
    			match:'(lg|rg|rlg|rrg)((?:_(?:(?:10|11|12|[1-9])|(?:[0-9]+D)))?)((?:_(?:(?:[0-9a-zA-Z]{6})|(?:[a-z]{2}(?:[1-9]00|50))|(?:[a-z]{2})))+)',
          value : {},
    			getValue : function(value){
            var codes = value.match(/^(lg|rg|rlg|rrg)((?:_(?:(?:10|11|12|[1-9])|(?:[0-9_]+D)))?)((?:_(?:(?:[0-9a-zA-Z]{6})|(?:[a-z]{2}(?:[1-9]00|50))|(?:[a-z]{2})))+)$/);
            // gradient
            var gradient_code = codes[1];
            var gradient;
            if(gradient_code=='lg') gradient = 'linear-gradient';
            else if(gradient_code=='rg') gradient = 'radial-gradient';
            else if(gradient_code=='rlg') gradient = 'repeating-linear-gradient';
            else if(gradient_code=='rrg') gradient = 'repeating-radial-gradient';
            else return;
            // direction
            var direction_code = codes[2];
            var direction_from = '';
            var direction_to = '';
            var direction_degree = '';
            if(direction_code.match(/^_(?:[1-9]|10|11|12)$/)){
              direction_code = direction_code.substring(1);
              if(direction_code=='1'||direction_code=='2'){ direction_from='bottom left'; direction_to='top right'; }
              else if(direction_code=='3'){ direction_from='left'; direction_to='right'; }
              else if(direction_code=='4'||direction_code=='5'){ direction_from='top left'; direction_to='bottom right'; }
              else if(direction_code=='6'){ direction_from='top'; direction_to='bottom'; }
              else if(direction_code=='7'||direction_code=='8'){ direction_from='top right'; direction_to='bottom left'; }
              else if(direction_code=='9'){ direction_from='right'; direction_to='left'; }
              else if(direction_code=='10'||direction_code=='11'){ direction_from='bottom right'; direction_to='top left'; }
              else if(direction_code=='12'){ direction_from='bottom'; direction_to='top'; }
            }
            if(direction_code.match(/^_(?:[0-9]+D)$/)){
              direction_code = direction_code.substring(1);
              direction_code = direction_code.replace(/D/, 'deg');
              direction_degree = direction_code.replace(/\_/, '-');
            }
            // color
            var color_code = codes[3];
            color_codes = color_code.split('_');
            var colors = [];
            for(var i=0; i<color_codes.length; i++){
              color_codes[i] = color_codes[i].replace(/_|\s/g, '');
              if(color_codes[i]&&peci.convert.color2cssRGBA(color_codes[i])) colors.push(peci.convert.color2cssRGBA(color_codes[i]));
            }
            color_codes = color_codes.filter(function(color_codes){ if(color_codes) return true; else return false; });
            var color = colors.join(', ');
            values = [
              peci.convert.color2cssRGBA(color_codes[0]),
              '-webkit-'+gradient+'('+(direction_degree?direction_degree+',':(direction_from?direction_from+',':''))+' '+color+')',
              '-o-'+gradient+'('+(direction_degree?direction_degree+',':(direction_to?direction_to+',':''))+' '+color+')',
              '-moz-'+gradient+'('+(direction_degree?direction_degree+',':(direction_to?direction_to+',':''))+' '+color+')',
              '-ms-'+gradient+'('+(direction_degree?direction_degree+',':(direction_to?direction_to+',':''))+' '+color+')',
              gradient+'(to '+(direction_degree?direction_degree+',':(direction_to?direction_to+',':''))+' '+color+')',
              {property:'filter', value:"progid:DXImageTransform.Microsoft.gradient(startColorstr='"+peci.convert.color2cssRGBA(color_codes[0])+"', endColorstr='"+peci.convert.color2cssRGBA(color_codes[color_codes.length-1])+"');"}
            ];
            return values;
    			}
        },
    		{ // Shadow
    			property : {
    				bs:'box-shadow', ts:'text-shadow'
    			},
    			value : {},
    			match:'((?:[0-9]+_){1,4})_((?:(?:(?:[0-9a-zA-Z]{6})|(?:[a-z]{2})|(?:[a-z]{2}(?:50|[1-9]00))|(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))(?:(?:\_)(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))){2})(?:_(100|[1-9][0-9]|[0-9]))?)?)',
    			getValue : function(value){
    				var pieces = value.match(/^((?:[0-9]+_){1,4})_((?:(?:(?:[0-9a-zA-Z]{6})|(?:[a-z]{2})|(?:[a-z]{2}(?:50|[1-9]00))|(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))(?:(?:\_)(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))){2})(?:_(100|[1-9][0-9]|[0-9]))?)?)$/);
    				var piece_shadow = pieces[1];
    				var piece_color = pieces[2];
    				var shadows = piece_shadow.match(/^(?:([0-9]+)_)(?:([0-9]+)_)?(?:([0-9]+)_)?(?:([0-9]+)_)?$/);
    				var color = peci.convert.color2cssRGBA(piece_color);
    				var getShadow = function(h_shadow, v_shadow, blur, spread){
    					return !h_shadow&&''||
    					h_shadow&&!v_shadow&&(h_shadow+'px')||
    					h_shadow&&v_shadow&&!blur&&(h_shadow+'px '+v_shadow+'px')||
    					h_shadow&&v_shadow&&blur&&!spread&&(h_shadow+'px '+v_shadow+'px '+blur+'px')||
    					(h_shadow+'px '+v_shadow+'px '+blur+'px '+spread+'px');
    				};
    				if(!(shadows&&color)) return null;
    				return getShadow(shadows[1],shadows[2],shadows[3],shadows[4])+' '+color;
    			}
    		},
    		{ // Decimal
    			property : {
    				o:'opacity'
    			},
    			match:'(?:[1-9])?[0-9]|100',
    			getValue : function(value){
    				return Number(value)*0.01;
    			}
    		},
    		{ // Float: none, left, right, initial, inherit;
    			property : {
    				f:'float'
    			},
    			match : 'n|l|r|il|it',
    			getValue : function(value){
    				if(value=='n') return 'none';
            else if(value=='l') return 'left';
            else if(value=='r') return 'right';
            else if(value=='il') return 'initial';
            else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},
        { // Text Align: left, right, center, justify, initial, inherit;
    			property : {
    				t:'text-align',
    			},
          match : 'l|r|c|j|il|it',
    			getValue : function(value){
    				if(value=='l') return 'left';
    				else if(value=='r') return 'right';
    				else if(value=='c') return 'center';
            else if(value=='j') return 'justify';
            else if(value=='il') return 'initial';
            else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},
    		{ // Length : px, pt, cm, em, vw, vh, vmin
    			property : {
    				w:'width', xw:'max-width', nw:'min-width', h:'height', xh:'max-height', nh:'min-height',
    				b:'bottom', r:'right', t:'top', l:'left',
    				m:'margin', mb:'margin-bottom', ml:'margin-left', mr:'margin-right', mt:'margin-top',
    				p:'padding', pb:'padding-bottom', pl:'padding-left', pr:'padding-right', pt:'padding-top',
    				bs:'background-size',
    				bo:'border-width', bo_t:'border-top-width', bo_b:'border-bottom-width', bo_l:'border-left-width', bo_r:'border-right-width',
    				bor:'border-radius', bor_tl:'border-top-left-radius', bor_tr:'border-top-right-radius', bor_bl:'border-bottom-left-radius', bor_br:'border-bottom-right-radius',
    				ls:'letter-spacing', ws:'word-spacing',
    				lh:'line-height',
    				f:'font-size'
    			},
    			match:'(_?(?:[0-9o]{7,}|[0-9o]{1,5})(?:px|pt|cm|em|vw|vh|vmax|vmin)?)((:?(:?\_|\_\_|D|M)[0-9o]+(?:px|pt|cm|em|vw|vh|vmax|vmin)?)*)?',
    			getValue : function(value){
    				var calc_boolean = false;
    				if(value.match('(_?(?:[0-9o]{7,}|[0-9o]{1,5})(?:px|pt|cm|em|vw|vh|vmax|vmin)?)((?:(?:\_|\_\_|D|M)[0-9o]+(?:px|pt|cm|em|vw|vh|vmax|vmin)?)*)?')[2]){ calc_boolean = true; }
            value = value.replace(/[0-9]+o[0-9]+/g, function(match){
              return peci.convert.o2comma(match);
            });
            value = value.replace(/([DM]?[0-9\.]+)(px|pt|cm|em|vw|vh|vmax|vmin)?/g, function(match, num, unit){
    					if(!unit && num && !num.match('^[DM]')){
    						return match+'%';
    					}
    					else return match;
    				});
    				value = value.replace(/^(_?(?:[0-9\.]{7,}|[0-9\.]{1,5})(?:px|pt|cm|em|vw|vh|vmax|vmin)?)/, function(match){
    					return match.replace(/_/g,'-');
    				});
    				if(value.match('_')){
    					value = value.replace(/_/g,' - ');
    				}
    				if(value.match('__')){
    					value = value.replace(/__/g,' + ');
    				}
    				if(value.match('_')){
    					value = value.replace(/_/g,' - ');
    				}
    				if(value.match('D')){
    					value = value.replace(/D/g,' / ');
    				}
    				if(value.match('M')){
    					value = value.replace(/M/g,' * ');
    				}
    				if(calc_boolean) value = 'calc('+value+')';
    				return value;
    			}
    		},
    		{ // Number
    			property : {
    				z:'z-index'
    			},
    			match:'[0-9]*',
    			getValue : function(value){
    				return value;
    			}
    		},
    		{ // Percentage
    			property : {
    				b:'bottom', r:'right', t:'top', l:'left',
    				m:'margin', mb:'margin-bottom', ml:'margin-left', mr:'margin-right', mt:'margin-top',
    				p:'padding', pb:'padding-bottom', pl:'padding-left', pr:'padding-right', pt:'padding-top',
    				w:'width', xw:'max-width', nw:'min-width', h:'height', xh:'max-height', nh:'min-height',
    				bo:'border-radius', bo_tl:'border-top-left-radius', bo_tr:'border-top-right-radius', bo_bl:'border-bottom-left-radius', bo_br:'border-bottom-right-radius',
    				lh:'line-height'
    			},
    			match:'100|[1-9][0-9]|[0-9]',
    			getValue : function(value){
    				value = String(value);
    				return value.match('^(?:100|[1-9][0-9]|[0-9])$')&&value.match('^(?:100|[1-9][0-9]|[0-9])$')[0]+'%'||null;
    			}
    		},
    		{ // Transform
    			property : {
    				t:'transform'
    			},
    			match:'([XY]_?((([\_DM]?[0-9])+(px|pt|cm|em|vw|vh|vmax|vmin)?)+)+)+',
    			getValue : function(value){
    				var getValue_num = function(value_num){
    					value = value.replace(/([DM]?[0-9]+)(px|pt|cm|em|vw|vh|vmax|vmin)?/g, function(match, num, unit){
    						if(!unit && num && !num.match('^[DM]')){
    							return match+'%';
    						}
    						else return match;
    					});
    					if(value_num.match('__')){
    						value_num = value_num.replace(/__/g,'+');
    					}
    					if(value_num.match('_')){
    						value_num = value_num.replace(/_/g,'-');
    					}
    					if(value_num.match('D')){
    						value_num = value_num.replace(/D/g,'/');
    					}
    					if(value_num.match('M')){
    						value_num = value_num.replace(/M/g,'*');
    					}
    					return value_num;
    				};
    				var getValue_xy = function(xy){
    					var value_xy = value.match(xy+'(([\_DM]?[0-9])+(px|pt|cm|em|vw|vh|vmax|vmin)?)+') && value.match(xy+'(([\_DM]?[0-9])+(px|pt|cm|em|vw|vh|vmax|vmin)?)+')[0] || null;
    					value_xy = value_xy && value_xy.match('(([\_DM]?[0-9])+(px|pt|cm|em|vw|vh|vmax|vmin)?)+')[0] && getValue_num(value_xy.match('(([\_DM]?[0-9])+(px|pt|cm|em|vw|vh|vmax|vmin)?)+')[0]) || '0';
    					if(value_xy&&value_xy!='0'&&!value_xy.match('px|pt|cm|em|vw|vh|vmax|vmin')) value_xy = value_xy+'%';
    					return value_xy;
    				};
    				return 'translate('+[getValue_xy('X'), getValue_xy('Y')].join()+')';
    			}
    		},
    		{ // XY
    			property : {
    				bp:'background-position', bs:'background-size'
    			},
    			match:'X([0-9])+(px)?Y([0-9])+(px)?',
    			getValue : function(value){
    				var getValue_xy = function(xy){
              if(!value.match(xy+'([0-9])+(px)?'))return;
              var match = value.match(xy+'([0-9])+(px)?')[0];
    					var value_xy = match&&match.match('([0-9])+(px)?')[0] || null;
    					if(value_xy&&value_xy!='0'&&!value_xy.match('px')) value_xy = value_xy+'%';
    					return value_xy;
    				};
    				return [getValue_xy('X'), getValue_xy('Y')].join(' ');
    			}
    		},
    		{ // transition-property: property;
    			property : {
    				tn:'transition-property'
    			},
    			match:'a|all|(?:[a-z]{4,}(?:[A-Z][a-z]+)?)(?:__[a-z]{4,}(?:[A-Z][a-z]+)?)*',
    			getValue : function(value){
    				if(value=='a'||value=='all') return 'all';
    				var values = value.split('__');
    				for(var i=0; i<values.length; i++){
    					values[i] = peci.convert.snake2camel(values[i]);
    				}
    				return values.join(', ');
    			}
    		},
    		{ // transition-duration: time;
    			property : {
    				tn:'transition-duration'
    			},
    			match:'[0-9o]+(ms|s)',
    			getValue : function(value){
    				return peci.convert.o2comma(value);
    			}
    		},
    		{ // transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|initial|inherit;
    			property : {
    				tn:'transition-timing-function'
    			},
    			match:'l|e|ei|eo|eio|ss|se|il|it',
    			getValue : function(value){
    				if(value=='l') return 'linear';
    				else if(value=='e') return 'ease';
    				else if(value=='ei') return 'ease-in';
    				else if(value=='eo') return 'ease-out';
    				else if(value=='eio') return 'ease-in-out';
    				else if(value=='ss') return 'step-start';
    				else if(value=='se') return 'step-end';
    				else if(value=='il') return 'initial';
    				else if(value=='it') return 'inherit';
    				else return ;
    			}
    		},
    		{ // transition-delay: time|initial|inherit;
    			property : {
    				tn_d:'transition-delay'
    			},
    			match:'[0-9o]+(ms|s)',
    			getValue : function(value){
    				return value;
    			}
    		},
    		{ // Thick : medium, thin, thick
    			property : {
    				bo:'border-width', bo_t:'border-top-width', bo_b:'border-bottom-width', bo_l:'border-left-width', bo_r:'border-right-width'
    			},
    			match:'m|tn|tk',
    			getValue : function(value){
    				if(value=='m') return 'medium';
    				else if(value=='tn') return 'thin';
    				else if(value=='tk') return 'thick';
    				else return null;
    			}
    		},
    		{ // Auto
    			property : {
    				m:'margin', p:'padding'
    			},
    			match:'auto',
    			getValue : function(value){
    				return '0 auto';
    			}
    		},
    		{ // Auto
    			property : {
    				w:'width', h:'height',
    				b:'bottom', r:'right', t:'top', l:'left',
    				z:'z-index'
    			},
    			match:'a',
    			getValue : function(value){
    				return 'auto';
    			}
    		},
    		{ // None
    			property : {
    				b:'background'
    			},
    			match:'n',
    			getValue : function(value){
    				return 'none';
    			}
    		},
    		{ // Transparent
    			property : {
    				bo:'border-color'
    			},
    			match:'t',
    			getValue : function(value){
    				return 'transparent';
    			}
    		},
    		{// Style : hidden, dotted, dashed, solid, double, groove, ridge, inset, outset
    			property : {
    				bo:'border-style', bo_t:'border-top-style', bo_b:'border-bottom-style', bo_l:'border-left-style', bo_r:'border-right-style'
    			},
    			match:'h|dotted|dashed|s|double|g|r|i|o',
    			getValue : function(value){
    				if(value=='h') return 'hidden';
    				else if(value=='dotted') return 'dotted';
    				else if(value=='dashed') return 'dashed';
    				else if(value=='s') return 'solid';
    				else if(value=='double') return 'double';
    				else if(value=='g') return 'groove';
    				else if(value=='r') return 'ridge';
    				else if(value=='i') return 'inset';
    				else if(value=='o') return 'outset';
    				else return null;
    			}
    		},
    		{ // Size : medium, xx-small, x-small, small, large, x-large, xx-large, smaller, larger
    			property : {
    				f:'font-size'
    			},
    			match:'md|xxsm|xsm|sm|lg|xlg|xxlg',
    			getValue : function(value){
    				if(value=='md') return 'medium';
    				else if(value=='xxsm') return 'xx-small';
    				else if(value=='xsm') return 'x-small';
    				else if(value=='sm') return 'small';
    				else if(value=='lg') return 'large';
    				else if(value=='xlg') return 'x-large';
    				else if(value=='xxlg') return 'xx-large';
    				else return null;
    			}
    		},
    		{ // Overflow : visible, hidden, scroll, auto
    			property : {
    				o:'overflow', ox:'overflow-x', oy:'overflow-y'
    			},
    			match:'a|h|o|s|v',
    			getValue : function(value){
            if(value=='a') return 'auto';
    				else if(value=='h') return 'hidden';
            else if(value=='o') return 'overlay';
    				else if(value=='s') return 'scroll';
            else if(value=='v') return 'visible';
    				else return null;
    			}
    		},
    		{ // Display : block, flex, inline-block, inline-flex, inline-table, list-item, none
    			property : {
    				d:'display',
    			},
    			match:'b|f|i|if|it|l|n',
    			getValue : function(value){
    				if(value=='b') return 'block';
    				else if(value=='f') return 'flex';
    				else if(value=='i') return 'inline-block';
    				else if(value=='if') return 'inline-flex';
    				else if(value=='it') return 'inline-table';
    				else if(value=='l') return 'list-item';
    				else if(value=='n') return 'none';
    				else return null;
    			}
    		},
    		{ // Position : static, absolute, fixed, relative, initial, inherit
    			property : {
    				p:'position',
    			},
    			match:'s|a|f|r|il|it',
    			getValue : function(value){
    				if(value=='s') return 'static';
    				else if(value=='a') return 'absolute';
    				else if(value=='f') return 'fixed';
    				else if(value=='r') return 'relative';
    				else if(value=='il') return 'initial';
    				else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},
    		{ // Size : bold, bolder, lighter, 100, 200, 300, 400, 500, 600, 700, 800, 900
    			property : {
    				fw:'font-weight'
    			},
    			match:'b|br|l|100|200|300|400|500|600|700|800|900',
    			getValue : function(value){
    				if(value=='b') return 'bold';
    				else if(value=='br') return 'bolder';
    				else if(value=='l') return 'lighter';
    				else if(value=='100') return '100';
    				else if(value=='200') return '200';
    				else if(value=='300') return '300';
    				else if(value=='400') return '400';
    				else if(value=='500') return '500';
    				else if(value=='600') return '600';
    				else if(value=='700') return '700';
    				else if(value=='800') return '800';
    				else if(value=='900') return '900';
    				else return null;
    			}
    		},
    		{ // Background Image
    			property : {
    				bi:'background-image'
    			},
    			match:'([a-zA-Z0-9_-]+(\_\_|\-\-))+([a-zA-Z0-9_-]+)(png|jpg|gif)',
    			getValue : function(value){
    				value = value.replace(/__/g, '/');
    				value = value.replace(/--/g, '/');
    				value = value.replace(/(png|jpg|gif)$/g, function(match){
    					return '.'+match;
    				});
    				return 'url('+value+')';
    			}
    		},
    		{ // background-attachment : scroll fixed local initial inherit
    			property : {
    				ba:'background-attachment'
    			},
    			match:'s|f|l|il|it',
    			getValue : function(value){
    				if(value=='s') return 'scroll';
    				else if(value=='f') return 'fixed';
    				else if(value=='l') return 'local';
    				else if(value=='il') return 'initial';
    				else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},
    		{ // background-blend-mode : normal multiply screen overlay darken lighten color-dodge saturation color luminosity
    			property : {
    				ba:'background-blend-mode'
    			},
    			match:'n|m|s|o|d|l|cd|s|c|lu',
    			getValue : function(value){
    				if(value=='n') return 'normal';
    				else if(value=='m') return 'multiply';
    				else if(value=='s') return 'screen';
    				else if(value=='o') return 'overlay';
    				else if(value=='d') return 'darken';
    				else if(value=='l') return 'lighten';
    				else if(value=='cd') return 'color-dodge';
    				else if(value=='s') return 'saturation';
    				else if(value=='c') return 'color';
    				else if(value=='lu') return 'luminosity';
    				else return null;
    			}
    		},
    		{ // background-clip : border-box padding-box content-box initial inherit
    			property : {
    				bc:'background-clip'
    			},
    			match:'b|p|c|t|il|it',
    			getValue : function(value){
    				if(value=='b') return 'border-box';
    				else if(value=='p') return 'padding-box';
    				else if(value=='c') return 'content-box';
    				else if(value=='t') return 'text !important';
    				else if(value=='il') return 'initial';
    				else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},
        { // text-fill-color : border-box padding-box content-box initial inherit
    			property : {
    				tf:'text-fill-color'
    			},
    			match:'t|il|it',
    			getValue : function(value){
    				if(value=='t') return 'transparent';
            else if(value=='u') return 'unset';
            else if(value=='il') return 'initial';
    				else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},

    		{ // background-origin : border-box padding-box content-box initial inherit
    			property : {
    				bo:'background-origin'
    			},
    			match:'b|p|c|t|il|it',
    			getValue : function(value){
    				if(value=='b') return 'border-box';
    				else if(value=='p') return 'padding-box';
    				else if(value=='c') return 'content-box';
    				else if(value=='t') return 'text';
    				else if(value=='il') return 'initial';
    				else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},
    		{ // Background-size : auto length percentage cover contain initial inherit;
    			property : {
    				bs:'background-size'
    			},
    			match:'a|l|p|c|cn|il|it',
    			getValue : function(value){
    				if(value=='a') return 'auto';
    				else if(value=='c') return 'cover';
    				else if(value=='cn') return 'contain';
    				else if(value=='il') return 'initial';
    				else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},
    		{ // Background-repeat : repeat, repeat-x, repeat-y, no-repeat initial inherit;
    			property : {
    				br:'background-repeat'
    			},
    			match:'r|rx|ry|n|il|it',
    			getValue : function(value){
    				if(value=='r') return 'repeat';
    				else if(value=='rx') return 'repeat-x';
    				else if(value=='ry') return 'repeat-y';
    				else if(value=='n') return 'no-repeat';
    				else if(value=='il') return 'initial';
    				else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},
    		{ // Background-position : left top, left center, left bottom, right top, right center, right bottom, center top ,center center ,center bottom, initial, inherit
    			property : {
    				bp:'background-position'
    			},
    			match:'lt|lc|lb|rt|rc|rb|ct|cc|cb|il|it',
    			getValue : function(value){
    				if(value=='lt') return 'left top';
    				else if(value=='lc') return 'left center';
    				else if(value=='lb') return 'left bottom';
    				else if(value=='rt') return 'right top';
    				else if(value=='rc') return 'right center';
    				else if(value=='rb') return 'right bottom';
    				else if(value=='ct') return 'center top';
    				else if(value=='cc') return 'center center';
    				else if(value=='cb') return 'center bottom';
    				else if(value=='il') return 'initial';
    				else if(value=='it') return 'inherit';
    				else return null;
    			}
    		},
    		{ // Object-fit : fill, cover, contain, none, scale-down
    			property : {
    				of:'object-fit'
    			},
    			match:'f|c|cn|n|sd',
    			getValue : function(value){
    				if(value=='f') return 'fill';
    				else if(value=='c') return 'cover';
    				else if(value=='cn') return 'contain';
    				else if(value=='n') return 'none';
    				else if(value=='sd') return 'scale-down';
    				else return null;
    			}
    		},
    		{ // Cursor : alias, all-scroll, auto, cell, context-menu, col-resize, copy, crosshair, default, e-resize, ew-resize, grab, grabbing, help, move,
    			// n-resize, ne-resize, nesw-resize, ns-resize, nw-resize, nwse-resize, no-drop, none, not-allowed, pointer, progress, row-resize,
    			// s-resize, se-resize, sw-resize, text, URL, vertical-text, w-resize, wait, zoom-in, zoom-out
    			property : {
    				cr:'cursor'
    			},
    			match:'alias|all_scroll|auto|cell|context_menu|col_resize|copy|crosshair|default|e_resize|ew_resize|grab|grabbing|help|move|n_resize|ne_resize|nesw_resize|ns_resize|nw_resize|nwse_resize|no_drop|none|not_allowed|n_resize|pointer|progress|row_resize|s_resize|se_resize|sw_resize|text|URL|w_resize|wait|zoom_in|zoom_out',
    			getValue : function(value){
    				if(value=='alias') return 'alias';
    				else if(value=='all_scroll') return 'all-scroll';
    				else if(value=='auto') return 'auto';
    				else if(value=='cell') return 'cell';
    				else if(value=='context_menu') return 'context-menu';
    				else if(value=='col_resize') return 'col-resize';
    				else if(value=='copy') return 'copy';
    				else if(value=='crosshair') return 'crosshair';
    				else if(value=='default') return 'default';
    				else if(value=='e_resize') return 'e-resize';
    				else if(value=='ew_resize') return 'ew-resize';
    				else if(value=='grab') return 'grab';
    				else if(value=='grabbing') return 'grabbing';
    				else if(value=='help') return 'help';
    				else if(value=='move') return 'move';
    				else if(value=='n_resize') return 'n-resize';
    				else if(value=='ne_resize') return 'ne-resize';
    				else if(value=='nesw_resize') return 'nesw-resize';
    				else if(value=='ns_resize') return 'ns-resize';
    				else if(value=='nw_resize') return 'nw-resize';
    				else if(value=='nwse_resize') return 'nwse-resize';
    				else if(value=='no_drop') return 'no-drop';
    				else if(value=='none') return 'none';
    				else if(value=='not_allowed') return 'not-allowed';
    				else if(value=='n_resize') return 'n-resize';
    				else if(value=='pointer') return 'pointer';
    				else if(value=='progress') return 'progress';
    				else if(value=='row_resize') return 'row-resize';
    				else if(value=='s_resize') return 's-resize';
    				else if(value=='se_resize') return 'se-resize';
    				else if(value=='sw_resize') return 'sw-resize';
    				else if(value=='text') return 'text';
    				else if(value=='URL') return 'URL';
    				else if(value=='w_resize') return 'w-resize';
    				else if(value=='wait') return 'wait';
    				else if(value=='zoom_in') return 'zoom-in';
    				else if(value=='zoom_out') return 'zoom-out';
    				else return null;
    			}
    		},
        { // vertical-align: baseline, sub, super, top, text-top, middle, bottom, text-bottom, initial, inherit;
          property : {
            v:'vertical-align'
          },
          match:'b|sb|tp|m|b|tb|il|it',
          getValue : function(value){
            if(value=='b') return 'baseline';
            else if(value=='sb') return 'sub';
            else if(value=='sr') return 'super';
            else if(value=='tp') return 'top';
            else if(value=='tt') return 'text-top';
            else if(value=='m') return 'middle';
            else if(value=='b') return 'bottom';
            else if(value=='tb') return 'text-bottom';
            else if(value=='il') return 'initial';
            else if(value=='it') return 'inherit';
            else return null;
          }
        },
        { // white-space: normal, nowrap, pre, pre-line, pre-wrap, initial, inherit;
          property : {
            ws:'white-space'
          },
          match:'normal|nowrap|pre|preline|prewrap|il|it',
          getValue : function(value){
            if(value=='normal') return 'normal';
            else if(value=='nowrap') return 'nowrap';
            else if(value=='pre') return 'pre';
            else if(value=='preline') return 'pre-line';
            else if(value=='prewrap') return 'pre-wrap';
            else if(value=='il') return 'initial';
            else if(value=='it') return 'inherit';
            else return null;
          }
        }
    	];
    },
    element : function(element){
      peci.replace.classClasses(element);
			peci.add.elementClasses(element);
			peci.add.classClasses(element);
    }
  };
  peci.init.settings();
})();
