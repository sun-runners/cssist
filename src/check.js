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
