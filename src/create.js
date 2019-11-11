import { getCssOfClass, getPropertyValue, getEvent, getMediaQueries, getCodesCors, getCodesMediaQuery } from './get.js'


// Create Function Section
export var createCssFromSelector = function(selector){
  // Set css
  var css = getCssOfClass(selector); if(!css){ return null; }

  // Set property and value
  var result = getPropertyValue(css.property, css.value); if(!result){ css.valid = false; return css; }
  css.property = result.property;
  css.value = result.value;

  // Set event
  css.event = getEvent(css.event);

  // Set media_queries
  var media_queries = getMediaQueries(css.media_query);
  css = Object.assign(css, media_queries);

  css.valid = true;
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
