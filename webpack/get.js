require("./convert.js");
(function(){
  cssist.get = {
    css : function(class_name){
      if(!class_name){ return; }
      var class_name_pieces = class_name.match(/^([a-zA-Z\_]+)-((?:[a-zA-Z0-9\_]|(?:\-\-))*)(?:-([a-zA-Z]{1,2}))?(?:-((?:(?:NX|NH|X|N)[0-9]+)+))?$/);
      if(!(class_name_pieces && class_name_pieces && class_name_pieces[1] && class_name_pieces[2] ) ){ return; }
      if(class_name_pieces[1]) var class_property = class_name_pieces[1];
      if(class_name_pieces[2]) var class_value = class_name_pieces[2];
      if(class_name_pieces[3]) var class_event = class_name_pieces[3];
      if(class_name_pieces[4]) var class_mediaquery = class_name_pieces[4];
      for(var i=0; i<cssist.property_sets.length; i++){
        property_set = cssist.property_sets[i];
        if(property_set.properties[class_property]){
          var property = property_set.properties[class_property];
          for(var j=0; j<property_set.value_sets.length; j++){
            var value_set = property_set.value_sets[j];
            var regex = new RegExp(value_set.regex);
            if(class_value.match(regex)){
              var value = value_set.getValue(class_value);
              if(!(value === undefined || value === null)){
                var css = {
                  class:class_name,
                  property:property,
                  value:value,
                  event:cssist.convert.eventCode2event(class_event),
                  suffix:class_mediaquery
                };
                return css;
              }
            }
          }
        }
        // if(class_value.match('^('+cssist.palette[i].match+')$')
        //   && cssist.palette[i].property[class_property]
        //   && cssist.palette[i].getValue(class_value)){
        //   var css = {
        //     class:class_name,
        //     property:cssist.palette[i].property[class_property],
        //     value:cssist.palette[i].getValue(class_value),
        //     event:cssist.convert.eventCode2event(class_event),
        //     suffix:class_mediaquery
        //   };
        //   return css;
        // }

      }
    },
    property : function(class_name){
      if(!class_name){ return; }
      var class_name_pieces = class_name.match(/^([a-zA-Z\_]+)-((?:[a-zA-Z0-9\_]|(?:\-\-))*)(?:-([a-zA-Z]{1,2}))?(?:-((?:(?:NX|NH|X|N)[0-9]+)+))?$/);
      if(!(class_name_pieces && class_name_pieces && class_name_pieces[1] && class_name_pieces[2] ) ){ return; }
      if(class_name_pieces[1]) var class_property = class_name_pieces[1];
      if(class_name_pieces[2]) var class_value = class_name_pieces[2];
      for(var i=0; i<cssist.palette.length; i++){
        if(class_value.match('^('+cssist.palette[i].match+')$')
          && cssist.palette[i].property[class_property]
          && cssist.palette[i].getValue(class_value)){
          return cssist.palette[i].property[class_property];
        }
      }
    },
    classes : function(element){
      var classNames = [];
      if(element && element.className && element.className.length>=1){ classNames = element.className.split(' ');}
      return classNames;
    }
  };
})();
