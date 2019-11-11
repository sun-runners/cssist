var package_json = require('../package.json');
import { getStyleElement } from './get.js'
import { value_sets } from './value_sets.js'
import { property_sets } from './property_sets.js'



var debug = true;

var greeting = `// CSSIST
// The following codes are automatically generated on `+new Date();
greeting += '\n\n\n';

var cssist_default = {
  version: package_json.version,
  csses:{
    success:[],
    fail:[]
  },
  selectors:{
    success:[],
    fail:[]
  },
  stylesheet:greeting
};

export var initialize = function(){
  if(localStorage['cssist']) var cssist = JSON.parse(localStorage['cssist']);
  if(cssist && package_json && cssist.version == package_json.version) window.cssist = cssist;
  else window.cssist = cssist_default;

  getStyleElement(window.cssist.stylesheet);


  if(debug){
    window.value_sets = value_sets;
    window.property_sets = property_sets;
  }
};
