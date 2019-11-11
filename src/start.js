import { checkSelector } from './check.js'
import { createCssFromSelector, createCodeFromCss } from './create.js'
import { getStyleElement, getStyleSheet } from './get.js'



if (typeof(MutationObserver) !== 'undefined') {
  var watcher = new MutationObserver(function(mutations, watcher) {
    mutations.forEach(function(mutation) {
      var element = mutation.target;
      if(element && element.lastClassName !== element.className && typeof element.className=='string')
        startElement(element);
      element.lastClassName = element.className;
    });
  });
}



export var startSelector = function(selector){
  // Check selector
  if(!checkSelector(selector)) return;

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

  // getStyleElement().innerHTML += css.code;

  var sheet = getStyleSheet();
  sheet.insertRule(css.code);
}



export var startElement = function(element){
  // Check element
  if(!(element && element.classList && element.classList.length>=1)) return;

  // Set classes
  var selectors = element.classList;

  // Set mutation
  if(watcher) watcher.observe(element, { attributes: true,  attributeFilter: ['class'] });

  for(var i=0; i<selectors.length; i++){
    var selector = selectors[i];
    startSelector(selector);
  }
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
