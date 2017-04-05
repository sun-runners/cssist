/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	window.peci={};
	__webpack_require__(1);
	__webpack_require__(11);
	peci.watch.start();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	(function(){
	  peci.watch = {
	    change : function(){
	      document.addEventListener('DOMNodeInserted', function(event){
	        peci.paint.rootElement(event.target);
	      }, false);
	    },
	    start : function(){
	      var self = this;
	      var start_interval = setInterval(function(){
	        if(!document.querySelector('body')) return;
	        self.change();
	        peci.paint.rootElement(document.querySelector('body'));
	        clearInterval(start_interval);
	      }, 1000);
	    }
	  };
	})();


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(9);
	(function(){
	  if (typeof(MutationObserver) !== 'undefined') {
	    var mutationObserver = new MutationObserver(function(mutations, watcher) {
	      var self = this;
	      mutations.forEach(function(mutation) {
	        var element = mutation.target;
	        if(element && element.lastClassName !== element.className && typeof element.className=='string') peci.paint.element(element);
	        element.lastClassName = element.className;
	      });
	    });
	  }
	  peci.paint = {
	    element : function(element){
	      peci.init.element(element);
				var class_names = peci.get.classes(element);
	      for(var i=0; i<class_names.length; i++){
	        var class_name = class_names[i];
	        var peci_CLASSES = [];
	        if(!peci.classes) peci.classes = [];
	        if(peci.classes.indexOf(class_name)==-1){
	          peci.classes.push(class_name);
	          peci.make.class(class_name);
	          if(i == class_names.length-1){
	            element.setAttribute('peci','');
	          }
	        }
	      }
	    },
	    rootElement : function(element){
	      var self = this;
	      if( element && typeof element === 'object' && element.nodeType && element.nodeType !== 8 && element.tagName ){
	  			var element_childen = element.querySelectorAll(':not([peci])');
	  			self.element(element);
	        if(mutationObserver){
	          mutationObserver.observe(element, { attributes: true,  attributeFilter: ['class'] });
	        }
	  			for(var i = 0; i < element_childen.length; i++) {
	          var element_child = element_childen[i];
	          self.element(element_child);
	          if(mutationObserver){
	            mutationObserver.observe(element_child, { attributes: true,  attributeFilter: ['class'] });
	          }
	      	}
	        if(localStorage){
	          localStorage['peci_CSSES'] = JSON.stringify(peci.csses);
	          localStorage['peci_CLASSES'] = JSON.stringify(peci.classes);
	        }
	  		}
	    }
	  };
	})();


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(4);
	__webpack_require__(8);
	__webpack_require__(9);
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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	(function(){
	  peci.replace = {
	    classClasses : function(element){
	      if(!(element && element.className && typeof element.className=='string')) return;
				for(var class_to_replace in peci.settings.classesToReplace){
					if(element.className.match('(^|\\s)'+class_to_replace+'(\\s|$)')){
	          var class_remove = class_to_replace;
	          var classes_replace = peci.settings.classesToReplace[class_remove];
	          var classes_add = [];
						for(var i=0; i<classes_replace.length; i++){
							var class_add = classes_replace[i];
							if(peci.check.repeatedClass(element, class_add)) classes_add.push(class_add);
							if(i == classes_replace.length-1){
								element.className = element.className.replace(class_remove, function(match){
									return classes_add.join(' ');
								});
							}
						}
					}
				}
	  	}
	  };
	})();


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	(function(){
	  peci.get = {
	    css : function(class_name){
	      if(!class_name){ return; }
	      var class_name_pieces = class_name.match(/^([a-zA-Z\_]+)-((?:[a-zA-Z0-9\_]|(?:\-\-))*)(?:-([a-zA-Z]{1,2}))?(?:-((?:(?:NX|NH|X|N)[0-9]+)+))?$/);
	      if(!(class_name_pieces && class_name_pieces && class_name_pieces[1] && class_name_pieces[2] ) ){ return; }
	      if(class_name_pieces[1]) var class_property = class_name_pieces[1];
	      if(class_name_pieces[2]) var class_value = class_name_pieces[2];
	      if(class_name_pieces[3]) var class_event = class_name_pieces[3];
	      if(class_name_pieces[4]) var class_mediaquery = class_name_pieces[4];
	      for(var i=0; i<peci.palette.length; i++){
	        if(class_value.match('^('+peci.palette[i].match+')$')
	          && peci.palette[i].property[class_property]
	          && peci.palette[i].getValue(class_value)){
	          var css = {
	            class:class_name,
	            property:peci.palette[i].property[class_property],
	            value:peci.palette[i].getValue(class_value),
	            event:peci.convert.eventCode2event(class_event),
	            suffix:class_mediaquery
	          };
	          return css;
	        }
	      }
	    },
	    property : function(class_name){
	      if(!class_name){ return; }
	      var class_name_pieces = class_name.match(/^([a-zA-Z\_]+)-((?:[a-zA-Z0-9\_]|(?:\-\-))*)(?:-([a-zA-Z]{1,2}))?(?:-((?:(?:NX|NH|X|N)[0-9]+)+))?$/);
	      if(!(class_name_pieces && class_name_pieces && class_name_pieces[1] && class_name_pieces[2] ) ){ return; }
	      if(class_name_pieces[1]) var class_property = class_name_pieces[1];
	      if(class_name_pieces[2]) var class_value = class_name_pieces[2];
	      for(var i=0; i<peci.palette.length; i++){
	        if(class_value.match('^('+peci.palette[i].match+')$')
	          && peci.palette[i].property[class_property]
	          && peci.palette[i].getValue(class_value)){
	          return peci.palette[i].property[class_property];
	        }
	      }
	    },
	    classes : function(element){
	      var classNames = [];
	      if(element && element.className && element.className.length>=1){ classNames = element.className.split(' ');}
	      return classNames;
	    }
	  };
	})();


/***/ },
/* 7 */
/***/ function(module, exports) {

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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	(function(){
	  peci.add = {
	  	elementClasses : function(element){
	      if(!(element&&element.tagName)) return;
				for(var element_to_add in peci.settings.elementsToAdd){
					if(element.tagName.toLowerCase()==element_to_add){
	          var classes_add = peci.settings.elementsToAdd[element_to_add];
						classes_add.forEach(function(class_add){
							if(peci.check.repeatedClass(element, class_add)){
	              if(element){
	                if(element.classList){
	                  element.classList.add(class_add);
	                }
	                else{
	                  element.className = element.className + ' ' + class_add;
	                }
	              }
	            }
						});
					}
				}
	  	},
	  	classClasses : function(element){
	      if(!(element && element.className && typeof element.className=='string')) return;
				for(var class_to_add in peci.settings.classesToAdd){
					if(element.className.match('(^|\\s)'+class_to_add+'(\\s|$)')){
	          var class_to_add_copy = class_to_add;
	          var classes_to_add = peci.settings.classesToAdd[class_to_add];
						var classes_add = [];
						for(var i=0; i<classes_to_add.length; i++){
							if(peci.check.repeatedClass(element, classes_to_add[i])) classes_add.push(classes_to_add[i]);
							if( i == classes_to_add.length-1 && classes_add && classes_add.length>=1){
								var regex = new RegExp(class_to_add_copy, "g");
								element.className = element.className.replace(regex, function(match){
									var classes_add_new = match+' '+classes_add.join(' ');
									return classes_add_new;
								});
							}
						}
					}
				}
	  	}
	  };
	})();


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(6);
	__webpack_require__(7);
	(function(){
	  peci.make = {
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
	  	},
	    css2 : function(css){
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
	  		if(css) this.css2(css);
	  	}
	  };
	})();


/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../../node_modules/css-loader/index.js!./basic.css", function() {
				var newContent = require("!!../../../../node_modules/css-loader/index.js!./basic.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)(undefined);
	// imports


	// module
	exports.push([module.id, "/*Basic Css*/\n\n/* Remove the margin */\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n  background: none;\n\tbox-shadow: none;\n  vertical-align: baseline;\n\t-ms-touch-action: manipulation;\n\ttouch-action: manipulation;\n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\tbox-sizing: border-box;\n\tborder-style: solid;\n}\n\n/* Remove outline */\n*:focus, *:active {\n\t\toutline: none !important;\n}\n\n/* Set default font family */\nhtml {\n  /*font-family: sans-serif;*/\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\n/* Correct display */\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {\n  display: block;\n}\naudio, canvas, progress, video {\n  display: inline-block;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\ntemplate, [hidden] {\n  display: none;\n}\n\n/* Correct vertical alignment */\nprogress {\n  vertical-align: baseline;\n}\n\n/* Correct link */\na {\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\na:active, a:hover {\n  outline-width: 0;\n}\n\n/* Correct text */\nabbr[title] {\n  border-bottom: none;\n  text-decoration: underline;\n  text-decoration: underline dotted;\n}\nb, strong {\n  font-weight: inherit;\n}\nb, strong {\n  font-weight: bolder;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nmark {\n  background-color: #ff0;\n  color: #000;\n}\nsmall {\n  font-size: 80%;\n}\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n\n/* Correct embedded content */\nimg {\n  border-style: none;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Correct grouping content */\ncode, kbd, pre, samp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\n/* Correct forms */\nbutton, input, select, textarea {\n  font: inherit;\n  margin: 0;\n}\noptgroup {\n  font-weight: bold;\n}\nbutton, input {\n  overflow: visible;\n}\nbutton, select {\n  text-transform: none;\n}\nbutton, html [type=\"button\"], [type=\"reset\"], [type=\"submit\"] {\n  -webkit-appearance: button;\n}\nbutton::-moz-focus-inner, [type=\"button\"]::-moz-focus-inner, [type=\"reset\"]::-moz-focus-inner, [type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\nbutton:-moz-focusring, [type=\"button\"]:-moz-focusring, [type=\"reset\"]:-moz-focusring, [type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\ntextarea {\n  overflow: auto;\n}\n[type=\"checkbox\"], [type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n[type=\"number\"]::-webkit-inner-spin-button, [type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n[type=\"search\"]::-webkit-search-cancel-button, [type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\ndiv, button, span, input, textarea, img {\n\tdisplay: block;\n\tposition: relative;\n\tfloat: left;\n}\ni {\n\tposition: relative;\n}\nth, td {\n  vertical-align: middle;\n}\n.cen {\n\tposition: relative;\n\tfloat: left;\n  top: 50%;\n  left:50%;\n\ttransform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n}\n.cen-x {\n\tposition: relative;\n\tfloat: left;\n  left: 50%;\n  transform: translateX(-50%);\n  -webkit-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n}\n.cen-y {\n\tposition: relative;\n\tfloat: left;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n}\n.b-img {\n\tbackground-size: cover;\n\t-webkit-background-size: cover;\n\t-moz-background-size: cover;\n\t-o-background-size: cover;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center center;\n\tobject-fit: cover;\n\t-webkit-object-fit: cover;\n\t-ms-object-fit: cover;\n\t-moz-object-fit: cover;\n\t-o-object-fit: cover;\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function(useSourceMap) {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			return this.map(function (item) {
				var content = cssWithMappingToString(item, useSourceMap);
				if(item[2]) {
					return "@media " + item[2] + "{" + content + "}";
				} else {
					return content;
				}
			}).join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

	function cssWithMappingToString(item, useSourceMap) {
		var content = item[1] || '';
		var cssMapping = item[3];
		if (!cssMapping) {
			return content;
		}

		if (useSourceMap) {
			var sourceMapping = toComment(cssMapping);
			var sourceURLs = cssMapping.sources.map(function (source) {
				return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
			});

			return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
		}

		return [content].join('\n');
	}

	// Adapted from convert-source-map (MIT)
	function toComment(sourceMap) {
	  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
	  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	  return '/*# ' + data + ' */';
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14).Buffer))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(15)
	var ieee754 = __webpack_require__(16)
	var isArray = __webpack_require__(17)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			// Test for IE <= 9 as proposed by Browserhacks
			// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
			// Tests for existence of standard globals is to allow style-loader 
			// to operate correctly into non-standard environments
			// @see https://github.com/webpack-contrib/style-loader/issues/177
			return window && document && document.all && !window.atob;
		}),
		getElement = (function(fn) {
			var memo = {};
			return function(selector) {
				if (typeof memo[selector] === "undefined") {
					memo[selector] = fn.call(this, selector);
				}
				return memo[selector]
			};
		})(function (styleTarget) {
			return document.querySelector(styleTarget)
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [],
		fixUrls = __webpack_require__(19);

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		options.attrs = typeof options.attrs === "object" ? options.attrs : {};

		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the <head> element
		if (typeof options.insertInto === "undefined") options.insertInto = "head";

		// By default, add <style> tags to the bottom of the target
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	};

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var styleTarget = getElement(options.insertInto)
		if (!styleTarget) {
			throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
		}
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				styleTarget.insertBefore(styleElement, styleTarget.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				styleTarget.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			styleTarget.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		options.attrs.type = "text/css";

		attachTagAttrs(styleElement, options.attrs);
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		options.attrs.type = "text/css";
		options.attrs.rel = "stylesheet";

		attachTagAttrs(linkElement, options.attrs);
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function attachTagAttrs(element, attrs) {
		Object.keys(attrs).forEach(function (key) {
			element.setAttribute(key, attrs[key]);
		});
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement, options);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, options, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
		*/
		var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

		if (options.convertToAbsoluteUrls || autoFixUrls){
			css = fixUrls(css);
		}

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 19 */
/***/ function(module, exports) {

	
	/**
	 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
	 * embed the css on the page. This breaks all relative urls because now they are relative to a
	 * bundle instead of the current page.
	 *
	 * One solution is to only use full urls, but that may be impossible.
	 *
	 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
	 *
	 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
	 *
	 */

	module.exports = function (css) {
	  // get current location
	  var location = typeof window !== "undefined" && window.location;

	  if (!location) {
	    throw new Error("fixUrls requires window.location");
	  }

		// blank or null?
		if (!css || typeof css !== "string") {
		  return css;
	  }

	  var baseUrl = location.protocol + "//" + location.host;
	  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

		// convert each url(...)
		/*
		This regular expression is just a way to recursively match brackets within
		a string.

		 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
		   (  = Start a capturing group
		     (?:  = Start a non-capturing group
		         [^)(]  = Match anything that isn't a parentheses
		         |  = OR
		         \(  = Match a start parentheses
		             (?:  = Start another non-capturing groups
		                 [^)(]+  = Match anything that isn't a parentheses
		                 |  = OR
		                 \(  = Match a start parentheses
		                     [^)(]*  = Match anything that isn't a parentheses
		                 \)  = Match a end parentheses
		             )  = End Group
	              *\) = Match anything and then a close parens
	          )  = Close non-capturing group
	          *  = Match anything
	       )  = Close capturing group
		 \)  = Match a close parens

		 /gi  = Get all matches, not the first.  Be case insensitive.
		 */
		var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
			// strip quotes (if they exist)
			var unquotedOrigUrl = origUrl
				.trim()
				.replace(/^"(.*)"$/, function(o, $1){ return $1; })
				.replace(/^'(.*)'$/, function(o, $1){ return $1; });

			// already a full url? no change
			if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			  return fullMatch;
			}

			// convert the url to a full url
			var newUrl;

			if (unquotedOrigUrl.indexOf("//") === 0) {
			  	//TODO: should we add protocol?
				newUrl = unquotedOrigUrl;
			} else if (unquotedOrigUrl.indexOf("/") === 0) {
				// path should be relative to the base url
				newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
			} else {
				// path should be relative to current directory
				newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
			}

			// send back the fixed url(...)
			return "url(" + JSON.stringify(newUrl) + ")";
		});

		// send back the fixed css
		return fixedCss;
	};


/***/ }
/******/ ]);