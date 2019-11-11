(function(){
  cssist.convert = {
    css2css_class : function(css){
  		if(!(css.class)) return;
      var class_event = css.class+(css.event?':'+css.event:'');
      var result = class_event;
      if(typeof css.property != 'string'){
        if(css.property&&css.property.afters&&css.property.afters.length>=1){
          result = '';
          for(var i=0; i<css.property.afters.length; i++){
            if(i>0) result += ','
            result += class_event+css.property.afters[i];
          }
        }
      }
      return result;
  	}
  };
})();
