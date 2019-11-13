import { checkSelector } from './check.js'
import { createCssFromSelector, createCodeFromCss } from './create.js'
import { getStyleSheet } from './get.js'



// Variable Section
var debug = true;



if (typeof(MutationObserver) !== 'undefined') {
  var watcher = new MutationObserver(function(mutations, watcher) {
    mutations.forEach(function(mutation) {
      var element = mutation.target;
      // For: Do not start when lastClassName == className
      if(element && element.lastClassName !== element.className && typeof element.className=='string') startElement(element);
      element.lastClassName = element.className;
    });
  });
}



export var startSelector = function(selector){
  if(debug) console.log('[start] startSelector', selector);

  // Create css
  var css = createCssFromSelector(selector);

  // Fail
  if(!(css&&css.valid)){
    cssist.selectors.fail.push(selector);
    if(css) cssist.csses.fail.push(css); return;
  }

  // Success
  // Create code
  css.code = createCodeFromCss(css);

  cssist.selectors.success.push(selector);
  cssist.csses.success.push(css);
  cssist.stylesheet += css.code;

  // Apply css
  var sheet = getStyleSheet();
  if(sheet.insertRule) {
    sheet.insertRule(css.code);
	} else {
		sheet.addRule(css.selector, css.rules);
	}
  localStorage.setItem('cssist', JSON.stringify(cssist));
}



export var startElement = function(element){
  // Check element
  if(!(element && element.classList && element.classList.length>=1)) return;

  // Set classes
  var selectors = element.classList;

  for(var i=0; i<selectors.length; i++){
    var selector = selectors[i];
    // Check selector
    if(!checkSelector(selector)) continue;
    startSelector(selector);
  }

  // Set mutation
  if(watcher) watcher.observe(element, { attributes: true,  attributeFilter: ['class'] });
}



export var startRootElement = function(element){
  // Check element
  if( !(element && typeof element === 'object' && element.nodeType && element.nodeType !== 8 && element.tagName) ) return;

  // Start element
  startElement(element);

  // Get element_childen
  var element_childen = element.querySelectorAll('*');

  // Check element_childen
  if(!(element_childen && element_childen.length>=1)) return;

  // Start element_childen
  for(var i = 0; i < element_childen.length; i++) startElement(element_childen[i]);
};
