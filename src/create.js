import { getCssOfClass, getPropertyValue, getEvent, getMediaQueries, getCodesCors, getCodesMediaQuery } from './get.js'
import { checkClassSet } from './check.js'



// Variable Section
var debug = false;



var createCss = function(css){ if(debug) console.log('[create] createCss', css);
  // Set property and value

  var result = getPropertyValue(css.property, css.value);
  if(!result){
    // Set valid
    css.valid = false; return css;
  }
  css.property = result.property;
  css.value = result.value;

  // Set event
  css.event = getEvent(css.event);

  // Set valid
  css.valid = true;
  return css;
}


// Create Function Section
export var createCssFromSelector = function(selector){
  // Set css
  var css = getCssOfClass(selector);
  if(!css){ return null; }

  // Check class_set
  if( checkClassSet(css) ){
    var selectors = css.class_set.get_classes(css.value);
    css.csses = [];
    for(var i=0; i<selectors.length; i++){
      var css_i = getCssOfClass(selectors[i]);
      css_i = createCss(css_i);
      css.csses.push(css_i);
    }
    css.valid = true;
  }
  else css = createCss(css);
  // Check valid
  if(!(css&&css.valid)) return css;

  // Set media_queries
  var media_queries = getMediaQueries(css.media_query);
  css = Object.assign(css, media_queries);

  return css;
}

export var createCodeFromCss = function(css){
  var codes;
  // Get Cors Codes
  codes = getCodesCors(css);

  // Get MediaQuery Codes
  codes = getCodesMediaQuery(codes, css);

  return codes;
}
