import { initialize } from './initialize.js'
import { class_sets } from './class_sets.js'



export var checkSelector = function(selector){
  if(!window.cssist) initialize();
  if(window.cssist.selectors.success.indexOf(selector)>=0) return false;
  if(window.cssist.selectors.fail.indexOf(selector)>=0) return false;
  return true;
}

export var checkClassSet = function(css){
  // Check property
  var class_set = class_sets[css.property];
  if(!(class_set && class_set.value_set)) return false;

  // Check value
  var index = class_set.value_set.indexOf(css.value);
  if( !(index>=0) ) return false;

  // Set class_set
  css.class_set = class_set;
  return true;
}
