import { class_sets } from './class_sets.js'



export var checkSelector = function(selector){
  if(cssist.selectors.success.indexOf(selector)>=0){
    return false;
  }
  if(cssist.selectors.fail.indexOf(selector)>=0){
    return false;
  }

  // cssist.get.styleElement().innerHTML.indexOf('.'+selector+' {')==-1
  // cssist.get.styleElement().innerHTML.indexOf('.'+selector+':')==-1

  return true;

}

export var checkClassSet = function(css){
  // Check property
  var class_set = class_sets[css.property];
  if(!class_set) return false;

  // Check value
  var index = class_set.value_set.indexOf(css.value);
  if( !(index>=0) ) return false;

  // Set class_set
  css.class_set = class_set;
  return true;
}
