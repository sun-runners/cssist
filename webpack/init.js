require("./make.js");
(function(){
  peci.init = {
    settings : function(){

      var VERSION = '1.1.60';
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

      peci.value_sets = {}, peci.property_sets = {};
      function initializeValueSets(){

        var getValueFromValues = function(value){ return this.values[value]; }
        var getValueFromOriginalValue = function(value){ return value; }

        // CONSTANT
        peci.value_sets.auto = {
          regex: '(?:a)',
          values: { a: 'auto' },
          examples: ['a'],
          getValue: getValueFromValues
        };
        peci.value_sets.all = {
          regex: '(?:a)',
          values: { a: 'all' },
          examples: ['a'],
          getValue: getValueFromValues
        };
        peci.value_sets.none = {
          regex: '(?:n)',
          values: { n: 'none' },
          examples: ['n'],
          getValue: getValueFromValues
        };
        peci.value_sets.normal = {
          regex: '(?:n)',
          values: { n: 'normal' },
          examples: ['n'],
          getValue: getValueFromValues
        };
        peci.value_sets.initial = {
          regex: '(?:il)',
          values: { il: 'initial' },
          examples: ['il'],
          getValue: getValueFromValues
        };
        peci.value_sets.inherit = {
          regex: '(?:it)',
          values: { it: 'inherit' },
          examples: ['it'],
          getValue: getValueFromValues
        };

        // KIND
        peci.value_sets.position_kind = {
          regex: '(?:s|a|f|r)',
          values: { s: 'static', a: 'absolute', f: 'fixed', r: 'relative' },
          examples: ['s', 'r'],
          getValue: getValueFromValues
        };
        peci.value_sets.display_kind = {
          regex: '(?:i|b|f|ib|if|it|li|ri|t)',
          values: { i: 'inline', b: 'block', f: 'flex', ib: 'inline-block', if: 'inline-flex', it: 'inline-table', li: 'list-item', ri: 'run-in', t: 'table' },
          examples: ['l', 'rr'],
          getValue: getValueFromValues
        };
        peci.value_sets.overflow_kind = {
          regex: '(?:h|o|s|v)',
          values: { h: 'hidden', o: 'overlay', s: 'scroll', v: 'visible' },
          examples: ['h', 'v'],
          getValue: getValueFromValues
        };
        peci.value_sets.float_kind = {
          regex: '(?:l|r)',
          values: { l: 'left', r: 'right' },
          examples: ['l', 'r'],
          getValue: getValueFromValues
        };
        peci.value_sets.text_align_kind = {
          regex: '(?:l|r|c|j)',
          values: { l: 'left', r: 'right', c: 'center', j: 'justify' },
          examples: ['l', 'j'],
          getValue: getValueFromValues
        };
        peci.value_sets.transition_timing_function_kind = {
          regex: '(?:l|e|ei|eo|eio|ss|se)',
          values: { l: 'linear', e: 'ease', ei: 'ease-in', eo: 'ease-out', eio: 'ease-in-out', ss: 'step-start', se: 'step-end',  },
          examples: ['l', 'se'],
          getValue: getValueFromValues
        };
        peci.value_sets.background_size_kind = {
          regex: '(?:cr|cn)',
          values: { cr: 'cover', cn: 'contain' },
          examples: ['cr', 'cn'],
          getValue: getValueFromValues
        };
        peci.value_sets.font_size_kind = {
          regex: '(?:m|xxs|xs|s|l|xl|xxl|sr|lr)',
          values: { m: 'medium', xxs: 'xx-small', xs:'x-small', s:'small', l:'large', xl:'x-large', xxl:'xx-large', sr:'smaller', lr:'larger' },
          examples: ['m', 'lr'],
          getValue: getValueFromValues
        };
        peci.value_sets.thick_kind = {
          regex: '(?:m|tn|tk)',
          values: { m: 'medium', tn: 'thin', tk:'thick' },
          examples: ['m', 'tk'],
          getValue: getValueFromValues
        };
        peci.value_sets.length_unit_kind = {
          regex: '(?:em|ex|ch|rem|vw|vh|vmax|vmin|cm|mm|in|px|pt|pc|p|n)',
          values: { em: 'em', ex: 'ex', ch: 'ch', rem: 'rem', vw:'vw' , vh: 'vh', vmax:'vmax', vmin:'vmin', cm:'cm', mm:'mm', in:'in', px:'px', pt:'pt', pc:'pc', p:'%', n:'' },
          examples: ['em', 'p'],
          getValue: getValueFromValues
        };
        peci.value_sets.gradient_kind = {
          regex: '(?:rl|rr|l|r)',
          values: { l: 'linear-gradient', r: 'radial-gradient', rl: 'repeating-linear-gradient', rr: 'repeating-radial-gradient' },
          examples: ['l', 'rr'],
          getValue: getValueFromValues
        };

        // NUMBER
        peci.value_sets.integer = {
          regex: '(?:_?[0-9]+)',
          examples: ['_100', '100'],
          getValue: function(value){ return value.replace(/_/g,'-'); }
        };
        peci.value_sets.integer_0 = {
          regex: '(?:[0-9]+)',
          examples: ['100'],
          getValue: function(value){ return Math.abs(value); }
        };
        peci.value_sets.integer_0_12 = {
          regex: '(?:10|11|12|[0-9])',
          examples: ['0', '12'],
          getValue: function(value){ return Math.floor(value)%13; }
        };
        peci.value_sets.integer_0_255 = {
          regex: '(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:[01]?[0-9]?[0-9]))',
          examples: ['0', '255'],
          getValue: function(value){ return Math.floor(value)%256; }
        };
        peci.value_sets.integer_3digits = {
          regex: '(?:_?[0-9]{0,3})',
          examples: ['_999', '999'],
          getValue: function(value){ return Math.floor(peci.value_sets.integer.getValue(value))%1000; }
        };
        peci.value_sets.float = {
          regex: peci.value_sets.integer.regex+'(?:o'+peci.value_sets.integer_0.regex+')?',
          examples: ['0', '7o777', '_7o777'],
          getValue: function(value){ return value.replace(/o/g, '.'); }
        };
        peci.value_sets.float_0_100 = {
          regex: '(?:100|[0-9]?[0-9])(?:o[0-9]+)?',
          examples: ['0', '10', '100', '7o777'],
          getValue: function(value){ return peci.value_sets.float.getValue(value.replace(/_/g,'-'))%101; }
        };
        peci.value_sets.float_0 = {
          regex: peci.value_sets.integer.regex+'(?:o'+peci.value_sets.integer_0.regex+')?',
          examples: ['0', '7o777'],
          getValue: function(value){ return peci.value_sets.float.getValue(value.replace(/_/g,'-')); }
        };

        // OPACITY
        peci.value_sets.opacity = {
          regex: peci.value_sets.float_0_100.regex,
          examples: ['0', '50o50', '100'],
          getValue: function(value){ return peci.value_sets.float_0_100.getValue(value)*0.01; }
        };

        // LENGTH
        peci.value_sets.length = {
          regex: peci.value_sets.float_0.regex+'(?:'+peci.value_sets.length_unit_kind.regex+')?',
          examples: ['0px', '50p', '50', '100vw', '3n'],
          getValue: function(value){
            var regex = new RegExp('('+peci.value_sets.float_0.regex+')('+peci.value_sets.length_unit_kind.regex+')?');
            var matches = value.match(regex);
            var result = '';
            if(peci.value_sets.float_0.getValue(matches[1])){ // 길이 값
              result = peci.value_sets.float_0.getValue(matches[1]);
            }
            if(matches[2]){ // 길이 단위
              result += peci.value_sets.length_unit_kind.getValue(matches[2]);
            } else {
              result += '%';
            }
            return result;
          }
        };
        peci.value_sets.calc = {
          regex: '(?:__|_|M|D)',
          examples: ['__','_','D','M'],
          getValue: function(value){
            var result = null;
            if(value=='__'){ result = ' + '; }
            else if(value=='_'){ result = ' - '; }
            else if(value=='M'){ result = ' * '; }
            else if(value=='D'){ result = ' / '; }
            return result;
          }
        };
        peci.value_sets.length_calc = {
          regex: '(?:'+peci.value_sets.calc.regex+'?'+peci.value_sets.length.regex+')+',
          examples: ['0', '50', '100_100px', '100M2_100vwD3__100cmD4_100pxD5_100M6_100vwD7__100cmD8_100pxD9'],
          getValue: function(value){
            var regex = new RegExp('('+peci.value_sets.calc.regex+'?'+peci.value_sets.length.regex+')', 'g');
            var matches = value.match(regex);
            var result = 'calc( ';
            for(var i=0; i<matches.length; i++){
              var regex_each = new RegExp('('+peci.value_sets.calc.regex+')?('+peci.value_sets.length.regex+')');
              var matches_each = matches[i].match(regex_each);
              if(matches_each[1]){
                result += peci.value_sets.calc.getValue(matches_each[1]);
              }
              if(!(matches_each[1]=='D'||matches_each[1]=='M')&&matches_each[2]){
                result += peci.value_sets.length.getValue(matches_each[2]);
              } else{
                result += matches_each[2];
              }
            }
            result += ' )';
            return result;
          }
        };
        peci.value_sets.length_calc_2D = {
          regex: '(?:[X|Y]'+peci.value_sets.length_calc.regex+')+',
          examples: ['X100pxY50px', 'X100_10pxY50pxM10', 'X100M2_100vwD3__100cmD4_100pxD5_100M6_100vwD7__100cmD8_100pxD9'],
          getValue: function(value){
            var result = '';
            var regex_X = new RegExp('X('+peci.value_sets.length_calc.regex+')');
            var matches_X = value.match(regex_X);
            if(matches_X){
              result += peci.value_sets.length_calc.getValue(matches_X[0]);
            } else {
              result += 0;
            }
            result += ' ';
            var regex_Y = new RegExp('Y('+peci.value_sets.length_calc.regex+')');
            var matches_Y = value.match(regex_Y);
            if(matches_Y){
              result += peci.value_sets.length_calc.getValue(matches_Y[0]);
            } else {
              result += 0;
            }
            return result;
          }
        };

        // DEGREE
        peci.value_sets.degree = {
          regex: '(?:_?[0-9]+)(?:d)',
          examples: ['180d', '_90d'],
          getValue: function(value){ return value.replace(/d/g, 'deg'); }
        };

        // TIME
        peci.value_sets.hour = {
          regex: peci.value_sets.integer_0.regex+'h',
          examples: ['0h', '100h'],
          getValue: getValueFromOriginalValue
        };
        peci.value_sets.hour_0_12 = {
          regex: peci.value_sets.integer_0_12.regex+'h',
          examples: ['0h', '12h'],
          getValue: getValueFromOriginalValue
        };
        peci.value_sets.second = {
          regex: peci.value_sets.float_0.regex+'s',
          examples: ['0s', '100s'],
          getValue: getValueFromOriginalValue
        };
        peci.value_sets.millisecond = {
          regex: peci.value_sets.float_0.regex+'ms',
          examples: ['0ms', '100ms'],
          getValue: getValueFromOriginalValue
        };

        // TRANSFORM
        peci.value_sets.translate_length_calc_2D = {
          regex: '(?:[X|Y]'+peci.value_sets.length_calc.regex+')+',
          examples: ['X100pxY50px', 'X100_10pxY50pxM10'],
          examples: ['X100pxY50px', 'X100_10pxY50pxM10', 'X100M2_100vwD3__100cmD4_100pxD5_100M6_100vwD7__100cmD8_100pxD9'],
          getValue: function(value){
            var result = 'translate(';
            var regex_X = new RegExp('X('+peci.value_sets.length_calc.regex+')');
            var matches_X = value.match(regex_X);
            if(matches_X){
              result += peci.value_sets.length_calc.getValue(matches_X[0]);
            } else {
              result += 0;
            }
            result += ', ';
            var regex_Y = new RegExp('Y('+peci.value_sets.length_calc.regex+')');
            var matches_Y = value.match(regex_Y);
            if(matches_Y){
              result += peci.value_sets.length_calc.getValue(matches_Y[0]);
            } else {
              result += 0;
            }
            result += ')';
            return result;
          }
        };

        // DIRECTION
        peci.value_sets.direction = {
          regex: '(?:l|r|t|b|c)',
          values: { l: 'left', r: 'left', t: 'top', b: 'bottom', c: 'center' },
          examples: ['l', 'c'],
          getValue: getValueFromValues
        };
        peci.value_sets.direction_2D = {
          regex: '(?:lt|lc|lb|rt|rc|rb|ct|cc|cb)',
          values: { lt: 'left top', lc: 'left center', lb: 'left bottom', rt: 'right top', rc: 'right center', rb: 'right bottom', ct: 'center top', cc: 'center center', cb: 'center bottom' },
          examples: ['lt', 'cc'],
          getValue: getValueFromValues
        };

        // COLOR
        peci.value_sets.hex_color = {
          regex: '(?:[0-9a-fA-F]{6})',
          examples: ['000000', 'aaaaaa', 'FFFFFF'],
          getValue: function(value){
            var result = 'rgba(';
            result += parseInt(value.substring(0,2), 16)+', ';
            result += parseInt(value.substring(2,4), 16)+', ';
            result += parseInt(value.substring(4,6), 16);
            result += ', 100)';
            return result;
          },
          getObject: function(value){
            var result = {
              red:parseInt(value.substring(0,2), 16),
              green:parseInt(value.substring(2,4), 16),
              blue:parseInt(value.substring(4,6), 16)
            };
            return result;
          }
        };
        peci.value_sets.google_color = {
          regex: '(?:rd|pk|pe|dp|io|be|lb|cn|tl|gn|lg|le|yw|ar|oe|de|bn|gy|by|bk|we)(?:[1-9]00|50)?',
          values: {
            rd:'F44336', rd50: 'FFEBEE', rd100: 'FFCDD2', rd200: 'EF9A9A', rd300: 'E57373', rd400: 'EF5350', rd500: 'F44336', rd600: 'E53935', rd700: 'D32F2F', rd800: 'C62828', rd900: 'B71C1C', //Red
            pk:'E91E63', pk50: 'FCE4EC', pk100: 'F8BBD0', pk200: 'F48FB1', pk300: 'F06292', pk400: 'EC407A', pk500: 'E91E63', pk600: 'D81B60', pk700: 'C2185B', pk800: 'AD1457', pk900: '880E4F', //Pink
            pe:'9C27B0', pe50: 'F3E5F5', pe100: 'E1BEE7', pe200: 'CE93D8', pe300: 'BA68C8', pe400: 'AB47BC', pe500: '9C27B0', pe600: '8E24AA', pe700: '7B1FA2', pe800: '6A1B9A', pe900: '4A148C', //Purple
            dp:'673AB7', dp50: 'EDE7F6', dp100: 'D1C4E9', dp200: 'B39DDB', dp300: '9575CD', dp400: '7E57C2', dp500: '673AB7', dp600: '5E35B1', dp700: '512DA8', dp800: '4527A0', dp900: '311B92', //Deep Purple
            io:'3F51B5', io50: 'E8EAF6', io100: 'C5CAE9', io200: '9FA8DA', io300: '7986CB', io400: '5C6BC0', io500: '3F51B5', io600: '3949AB', io700: '303F9F', io800: '283593', io900: '1A237E', //Indigo
            be:'2196F3', be50: 'E3F2FD', be100: 'BBDEFB', be200: '90CAF9', be300: '64B5F6', be400: '42A5F5', be500: '2196F3', be600: '1E88E5', be700: '1976D2', be800: '1565C0', be900: '0D47A1', //Blue
            lb:'03A9F4', lb50: 'E1F5FE', lb100: 'B3E5FC', lb200: '81D4FA', lb300: '4FC3F7', lb400: '29B6F6', lb500: '03A9F4', lb600: '039BE5', lb700: '0288D1', lb800: '0277BD', lb900: '01579B', //Light Blue
            cn:'00BCD4', cn50: 'E0F7FA', cn100: 'B2EBF2', cn200: '80DEEA', cn300: '4DD0E1', cn400: '26C6DA', cn500: '00BCD4', cn600: '00ACC1', cn700: '0097A7', cn800: '00838F', cn900: '006064', //Cyan
            tl:'009688', tl50: 'E0F2F1', tl100: 'B2DFDB', tl200: '80CBC4', tl300: '4DB6AC', tl400: '26A69A', tl500: '009688', tl600: '00897B', tl700: '00796B', tl800: '00695C', tl900: '004D40', //Teal
            gn:'4CAF50', gn50: 'E8F5E9', gn100: 'C8E6C9', gn200: 'A5D6A7', gn300: '81C784', gn400: '66BB6A', gn500: '4CAF50', gn600: '43A047', gn700: '388E3C', gn800: '2E7D32', gn900: '1B5E20', //Green
            lg:'8BC34A', lg50: 'F1F8E9', lg100: 'DCEDC8', lg200: 'C5E1A5', lg300: 'AED581', lg400: '9CCC65', lg500: '8BC34A', lg600: '7CB342', lg700: '689F38', lg800: '558B2F', lg900: '33691E', //Light Green
            le:'CDDC39', le50: 'F9FBE7', le100: 'F0F4C3', le200: 'E6EE9C', le300: 'DCE775', le400: 'D4E157', le500: 'CDDC39', le600: 'C0CA33', le700: 'AFB42B', le800: '9E9D24', le900: '827717', //Lime
            yw:'FFEB3B', yw50: 'FFFDE7', yw100: 'FFF9C4', yw200: 'FFF59D', yw300: 'FFF176', yw400: 'FFEE58', yw500: 'FFEB3B', yw600: 'FDD835', yw700: 'FBC02D', yw800: 'F9A825', yw900: 'F57F17', //Yellow
            ar:'FFC107', ar50: 'FFF8E1', ar100: 'FFECB3', ar200: 'FFE082', ar300: 'FFD54F', ar400: 'FFCA28', ar500: 'FFC107', ar600: 'FFB300', ar700: 'FFA000', ar800: 'FF8F00', ar900: 'FF6F00', //Amber
            oe:'FF9800', oe50: 'FFF3E0', oe100: 'FFE0B2', oe200: 'FFCC80', oe300: 'FFB74D', oe400: 'FFA726', oe500: 'FF9800', oe600: 'FB8C00', oe700: 'F57C00', oe800: 'EF6C00', oe900: 'E65100', //Orange
            de:'FF5722', de50: 'FBE9E7', de100: 'FFCCBC', de200: 'FFAB91', de300: 'FF8A65', de400: 'FF7043', de500: 'FF5722', de600: 'F4511E', de700: 'E64A19', de800: 'D84315', de900: 'BF360C', //Deep Orange
            bn:'795548', bn50: 'EFEBE9', bn100: 'D7CCC8', bn200: 'BCAAA4', bn300: 'A1887F', bn400: '8D6E63', bn500: '795548', bn600: '6D4C41', bn700: '5D4037', bn800: '4E342E', bn900: '3E2723', //Brown
            gy:'9E9E9E', gy50: 'FAFAFA', gy100: 'F5F5F5', gy200: 'EEEEEE', gy300: 'E0E0E0', gy400: 'BDBDBD', gy500: '9E9E9E', gy600: '757575', gy700: '616161', gy800: '424242', gy900: '212121', //Grey
            by:'607D8B', by50: 'ECEFF1', by100: 'CFD8DC', by200: 'B0BEC5', by300: '90A4AE', by400: '78909C', by500: '607D8B', by600: '546E7A', by700: '455A64', by800: '37474F', by900: '263238', //Blue Grey
            bk:'000000', //Black
            we:'FFFFFF' //White
          },
          examples: ['yw', 'rd500'],
          getValue: function(value){
            return peci.value_sets.hex_color.getValue(this.values[value]);
          },
          getObject: function(value){
            return peci.value_sets.hex_color.getObject(this.values[value]);
          }
        };
        peci.value_sets.rgb_color = {
          regex: peci.value_sets.integer_0_255.regex+'(?:_'+peci.value_sets.integer_0_255.regex+'){2}',
          examples: ['0_0_0', '10_10_10', '100_100_100', '255_255_255'],
          getValue: function(value){
            splits = value.split('_');
            var result = 'rgba(';
            result += splits[0]+', ';
            result += splits[1]+', ';
            result += splits[2];
            result += ', 100)';
            return result;
          },
          getObject: function(value){
            splits = value.split('_');
            var result = {
              red:splits[0],
              green:splits[1],
              blue:splits[2]
            };
            return result;
          }
        };
        peci.value_sets.rgba_color = {
          regex: '(?:'+peci.value_sets.google_color.regex+'|'+peci.value_sets.hex_color.regex+'|'+peci.value_sets.rgb_color.regex+')'+'(?:_'+peci.value_sets.opacity.regex+')?',
          examples: ['rd_0','yw500_25','123456_50', 'abcDEF_75', '255_255_255_100','255_255_255'],
          getValue: function(value){
            var regex = new RegExp('(?:('+peci.value_sets.google_color.regex+')|('+peci.value_sets.hex_color.regex+')|('+peci.value_sets.rgb_color.regex+'))'+'(?:_('+peci.value_sets.opacity.regex+'))?');
            var matches = value.match(regex);
            var object_rgb;
            var opacity;
            if(matches[1]){
              var regex_each = new RegExp('('+peci.value_sets.google_color.regex+')(?:_('+peci.value_sets.opacity.regex+'))?');
              var matches_each = value.match(regex_each);
              object_rgb = peci.value_sets.google_color.getObject(matches_each[1]);
              if(matches_each[2]) opacity = peci.value_sets.opacity.getValue(matches_each[2]);
            }
            else if(matches[2]){
              var regex_each = new RegExp('('+peci.value_sets.hex_color.regex+')(?:_('+peci.value_sets.opacity.regex+'))?');
              var matches_each = value.match(regex_each);
              object_rgb = peci.value_sets.hex_color.getObject(matches_each[1]);
              if(matches_each[2]) opacity = peci.value_sets.opacity.getValue(matches_each[2]);
            }
            else if(matches[3]){
              var regex_each = new RegExp('('+peci.value_sets.rgb_color.regex+')(?:_('+peci.value_sets.opacity.regex+'))?');
              var matches_each = value.match(regex_each);
              object_rgb = peci.value_sets.rgb_color.getObject(matches_each[1]);
              if(matches_each[2]) opacity = peci.value_sets.opacity.getValue(matches_each[2]);
            }
            if(matches_each[2]){
              return 'rgba('+object_rgb.red+','+object_rgb.green+','+object_rgb.blue+','+opacity+')';
            } else {
              return 'rgb('+object_rgb.red+','+object_rgb.green+','+object_rgb.blue+')';
            }
          }
        };

        // GRADIENT
        peci.value_sets.gradient = {
          regex: '(?:'+peci.value_sets.gradient_kind.regex+'_)?'+'(?:'+peci.value_sets.degree.regex+'|'+peci.value_sets.hour.regex+')'+'(?:_'+peci.value_sets.rgba_color.regex+'){2,}',
          examples: ['l_30d_rd_oe_yw_gn_be_io_pe', 'rr_1h_000000_50_FFFFFF_50'],
          getValue: function(value){ return value; }
        };

        // SHADOW
        peci.value_sets.shadow = {
          regex: peci.value_sets.integer_3digits.regex+'_'+peci.value_sets.integer_3digits.regex+'(?:_'+peci.value_sets.integer_3digits.regex+')?'+'(?:_'+peci.value_sets.rgba_color.regex+')',
          examples: ['2_2_bk_30', '2_2_2_000000_50'],
          getValue: function(value){ return value; }
        };

        // URL
        peci.value_sets.file_name = {
          regex: '[a-zA-Z0-9_-]+',
          examples: ['aA0_zZ9'],
          getValue: function(value){ return value; }
        };
        peci.value_sets.image_extension = {
          regex: '(?:png|jpg|gif|PNG|JPG|GIF)',
          examples: ['png','GIF'],
          getValue: function(value){ return value; }
        };
        peci.value_sets.image_url = {
          regex: peci.value_sets.file_name.regex+'([__]'+peci.value_sets.file_name.regex+')*'+'_'+peci.value_sets.image_extension.regex,
          examples: ['images__image_png'],
          getValue: function(value){ return value; }
        };

        // VARIABLE
        peci.value_sets.variable = {
          regex: '(?:[a-z]+)(?:[A-Z][a-z]+)*',
          examples: ['linear','ease','easeIn','easeOut','easeInOut'],
          getValue: function(value){
            var result = value.replace(/[A-Z]/g, function(letter, index) {
              return index == 0 ? letter.toLowerCase() : '-'+letter.toLowerCase();
            }).replace(/\s+/g, '');
            return result;
          }
        };
        peci.value_sets.variables = {
          regex: peci.value_sets.variable.regex+'(?:_'+peci.value_sets.variable.regex+')*',
          examples: ['width_backgroundColor'],
          getValue: function(value){
            var splits = value.split('_');
            var result = '';
            for(var i=0; i<splits.length; i++){
              if(result.length>=1){ result += ' ' }
              result += peci.value_sets.variable.getValue(splits[i]);
            }
            return result;
          }
        };

      };
      function testValueSets(){
        for(var prop in peci.value_sets){
          var regex = new RegExp('^'+peci.value_sets[prop].regex+'$');
          if(peci.value_sets[prop].examples){
            for(var i=0; i<peci.value_sets[prop].examples.length; i++){
              var matches = peci.value_sets[prop].examples[i].match(regex);
              if(!(matches&&matches.input==matches[0])||peci.value_sets[prop].test){
                console.log('\n');
                console.log(prop, regex, peci.value_sets[prop].examples[i], matches);
                if(matches) console.log(peci.value_sets[prop].getValue(matches[0]));
              }
            }
          }
        }
      };
      initializeValueSets();
      // testValueSets();

      function initializePropertySets(){
        peci.property_sets = [
          {
            properties: {
              c: 'color', pc: 'placeholder',
              bc:'background-color',
              bo:'border-color', bo_t:'border-top-color', bo_b:'border-bottom-color', bo_l:'border-left-color', bo_r:'border-right-color'
            },
            value_sets: [peci.value_sets.rgba_color]
          },{
            properties: { b:'background' },
            value_sets: [peci.value_sets.rgba_color, peci.value_sets.gradient, peci.value_sets.none, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { p:'position' },
            value_sets: [peci.value_sets.position_kind, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { d:'display' },
            value_sets: [peci.value_sets.display_kind, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { o:'overflow', ox:'overflow-x', oy:'overflow-y' },
            value_sets: [peci.value_sets.overflow_kind, peci.value_sets.auto, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { bi:'background-image' },
            value_sets: [peci.value_sets.url, peci.value_sets.none, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { bs:'box-shadow', ts:'text-shadow' },
            value_sets: [peci.value_sets.shadow]
          },{
            properties: { o:'opacity' },
            value_sets: [peci.value_sets.opacity]
          },{
            properties: { f:'float' },
            value_sets: [peci.value_sets.none, peci.value_sets.float_kind, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { t:'text-align' },
            value_sets: [peci.value_sets.text_align_kind, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: {
              w:'width', xw:'max-width', nw:'min-width', h:'height', xh:'max-height', nh:'min-height',
              b:'bottom', r:'right', t:'top', l:'left',
              m:'margin', mb:'margin-bottom', ml:'margin-left', mr:'margin-right', mt:'margin-top',
              ws:'word-spacing'
            },
            value_sets: [peci.value_sets.length_calc, peci.value_sets.auto, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { lh:'line-height' },
            value_sets: [peci.value_sets.normal,  peci.value_sets.length_calc, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { ls:'letter-spacing' },
            value_sets: [peci.value_sets.normal, peci.value_sets.length_calc, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: {
              p:'padding', pb:'padding-bottom', pl:'padding-left', pr:'padding-right', pt:'padding-top',
              bor:'border-radius', bor_tl:'border-top-left-radius', bor_tr:'border-top-right-radius', bor_bl:'border-bottom-left-radius', bor_br:'border-bottom-right-radius',
            },
            value_sets: [peci.value_sets.length_calc, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { f:'font-size' },
            value_sets: [peci.value_sets.font_size_kind, peci.value_sets.length_calc, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { bo:'border-width', bo_t:'border-top-width', bo_b:'border-bottom-width', bo_l:'border-left-width', bo_r:'border-right-width' },
            value_sets: [peci.value_sets.length_calc, peci.value_sets.auto, peci.value_sets.initial, peci.value_sets.inherit, peci.value_sets.thick_kind]
          },{
            properties: { z:'z-index' },
            value_sets: [peci.value_sets.auto, peci.value_sets.integer, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { bs:'background-size' },
            value_sets: [peci.value_sets.auto, peci.value_sets.length_calc_2D, peci.value_sets.background_size_kind, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { bp:'background-position' },
            value_sets: [peci.value_sets.direction_2D, peci.value_sets.length_calc_2D, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { t:'transform' },
            value_sets: [peci.value_sets.translate_length_calc_2D]
          },{
            properties: { tn:'transition-property' },
            value_sets: [peci.value_sets.all, peci.value_sets.variables]
          },{
            properties: { tn:'transition-duration', tndy:'transition-delay' },
            value_sets: [peci.value_sets.second, peci.value_sets.millisecond, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { tn:'transition-timing-function' },
            value_sets: [peci.value_sets.transition_timing_function_kind, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: { tn:'transition-timing-function' },
            value_sets: [peci.value_sets.transition_timing_function_kind, peci.value_sets.initial, peci.value_sets.inherit]
          },{
            properties: {
              color: 'color', opacity: 'opacity',
              background: 'background', background_attachment: 'background-attachment', background_blend_mode: 'background-blend-mode', background_color: 'background-color', background_image: 'background-image', background_position: 'background-position', background_repeat: 'background-repeat', background_clip: 'background-clip', background_origin: 'background-origin', background_size: 'background-size', border: 'border', border_bottom: 'border-bottom', border_bottom_color: 'border-bottom-color', border_bottom_left_radius: 'border-bottom-left-radius', border_bottom_right_radius: 'border-bottom-right-radius', border_bottom_style: 'border-bottom-style', border_bottom_width: 'border-bottom-width', border_color: 'border-color', border_image: 'border-image', border_image_outset: 'border-image-outset', border_image_repeat: 'border-image-repeat', border_image_slice: 'border-image-slice', border_image_source: 'border-image-source', border_image_width: 'border-image-width', border_ltransitioneft: 'border-left', border_left_color: 'border-left-color', border_left_style: 'border-left-style', border_left_width: 'border-left-width', border_radius: 'border-radius', border_right: 'border-right', border_right_color: 'border-right-color', border_right_style: 'border-right-style', border_right_width: 'border-right-width', border_style: 'border-style', border_top: 'border-top', border_top_color: 'border-top-color', border_top_left_radius: 'border-top-left-radius', border_top_right_radius: 'border-top-right-radius', border_top_style: 'border-top-style', border_top_width: 'border-top-width', border_width: 'border-width', box_decoration_break: 'box-decoration-break', box_shadow: 'box-shadow',
              bottom: 'bottom', clear: 'clear', clip: 'clip', display: 'display', float: 'float', height: 'height', left: 'left', margin: 'margin', margin_bottom: 'margin-bottom', margin_left: 'margin-left', margin_right: 'margin-right', margin_top: 'margin-top', max_height: 'max-height', max_width: 'max-width', min_height: 'min-height', min_width: 'min-width', overflow: 'overflow', overflow_x: 'overflow-x', overflow_y: 'overflow-y', padding: 'padding', padding_bottom: 'padding-bottom', padding_left: 'padding-left', padding_right: 'padding-right', padding_top: 'padding-top', position: 'position', right: 'right', top: 'top', visibility: 'visibility', width: 'width', vertical_align: 'vertical-align', z_index: 'z-index',
              align_content: 'align-content', align_items: 'align-items', align_self: 'align-self', flex: 'flex', flex_basis: 'flex-basis', flex_direction: 'flex-direction', flex_flow: 'flex-flow', flex_grow: 'flex-grow', flex_shrink: 'flex-shrink', flex_wrap: 'flex-wrap', justify_content: 'justify-content', order: 'order',
              hanging_punctuation: 'hanging-punctuation', hyphens: 'hyphens', letter_spacing: 'letter-spacing', line_break: 'line-break', line_height: 'line-height', overflow_wrap: 'overflow-wrap', tab_size: 'tab-size', text_align: 'text-align', text_align_last: 'text-align-last', text_combine_upright: 'text-combine-upright', text_indent: 'text-indent', text_justify: 'text-justify', text_transform: 'text-transform', white_space: 'white-space', word_break: 'word-break', word_spacing: 'word-spacing', word_wrap: 'word-wrap',
              text_decoration: 'text-decoration', text_decoration_color: 'text-decoration-color', text_decoration_line: 'text-decoration-line', text_decoration_style: 'text-decoration-style', text_shadow: 'text-shadow', text_underline_position: 'text-underline-position',
              font: 'font', font_family: 'font-family', font_feature_settings: 'font-feature-settings', font_kerning: 'font-kerning', font_language_override: 'font-language-override', font_size: 'font-size', font_size_adjust: 'font-size-adjust', font_stretch: 'font-stretch', font_style: 'font-style', font_synthesis: 'font-synthesis', font_variant: 'font-variant', font_variant_alternates: 'font-variant-alternates', font_variant_caps: 'font-variant-caps', font_variant_east_asian: 'font-variant-east-asian', font_variant_ligatures: 'font-variant-ligatures', font_variant_numeric: 'font-variant-numeric', font_variant_position: 'font-variant-position', font_weight: 'font-weight', direction: 'direction', text_orientation: 'text-orientation', text_combine_upright: 'text-combine-upright', unicode_bidi: 'unicode-bidi', user_select: 'user-select', writing_mode: 'writing-mode', border_collapse: 'border-collapse', border_spacing: 'border-spacing', caption_side: 'caption-side', empty_cells: 'empty-cells', table_layout: 'table-layout', counter_increment: 'counter-increment', counter_reset: 'counter-reset', list_style: 'list-style', list_style_image: 'list-style-image', list_style_position: 'list-style-position', list_style_type: 'list-style-type',
              animation: 'animation', animation_delay: 'animation-delay', animation_direction: 'animation-direction', animation_duration: 'animation-duration', animation_fill_mode: 'animation-fill-mode', animation_iteration_count: 'animation-iteration-count', animation_name: 'animation-name', animation_play_state: 'animation-play-state', animation_timing_function: 'animation-timing-function',
              backface_visibility: 'backface-visibility', perspective: 'perspective', perspective_origin: 'perspective-origin', transform_origin: 'transform-origin', transform_style: 'transform-style',
              transition_property: 'transition-property', transition_duration: 'transition-duration', transition_timing_function: 'transition-timing-function', transition_delay: 'transition-delay',
              box_sizing: 'box-sizing', content: 'content', cursor: 'cursor', ime_mode: 'ime-mode', nav_down: 'nav-down', nav_index: 'nav-index', nav_left: 'nav-left', nav_right: 'nav-right', nav_up: 'nav-up', outline: 'outline', outline_color: 'outline-color', outline_offset: 'outline-offset', outline_style: 'outline-style', outline_width: 'outline-width', resize: 'resize', text_overflow: 'text-overflow',
              break_after: 'break-after', break_before: 'break-before', break_inside: 'break-inside', column_count: 'column-count', column_fill: 'column-fill', column_gap: 'column-gap', column_rule: 'column-rule', column_rule_color: 'column-rule-color', column_rule_style: 'column-rule-style', column_rule_width: 'column-rule-width', column_span: 'column-span', column_width: 'column-width', columns: 'columns', widows: 'widows',
              orphans: 'orphans', page_break_after: 'page-break-after', page_break_before: 'page-break-before', page_break_inside: 'page-break-inside',
              marks: 'marks', quotes: 'quotes',
              filter: 'filter',
              image_orientation: 'image-orientation', image_rendering: 'image-rendering', image_resolution: 'image-resolution', object_fit: 'object-fit', object_position: 'object-position',
              mask_type: 'mask-type',
              mark: 'mark', mark_after: 'mark-after', mark_before: 'mark-before', phonemes: 'phonemes', rest: 'rest', rest_after: 'rest-after', rest_before: 'rest-before', voice_balance: 'voice-balance', voice_duration: 'voice-duration', voice_pitch: 'voice-pitch', voice_pitch_range: 'voice-pitch-range', voice_rate: 'voice-rate', voice_stress: 'voice-stress', voice_volume: 'voice-volume',
              marquee_direction: 'marquee-direction', marquee_play_count: 'marquee-play-count', marquee_speed: 'marquee-speed', marquee_style: 'marquee-style',
            },
            value_sets: [peci.value_sets.variable]
          }
        ];
      };
      initializePropertySets();

    }
  };
  peci.init.settings();
})();
