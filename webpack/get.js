require("./convert.js");
(function(){
  peci.get = {
    css : function(class_name){
      if(!class_name){ return; }
      var class_name_pieces = class_name.match(/^([a-zA-Z\_]+)-((?:[a-zA-Z0-9\_]|(?:\-\-))*)(?:-([a-zA-Z]{1,2}))?(?:-((?:(?:NX|NH|X|N)[0-9]+)+))?$/);
      if(!(class_name_pieces && class_name_pieces && class_name_pieces[1] && class_name_pieces[2] ) ){ return; }
      if(class_name_pieces[1]) var class_property = class_name_pieces[1];
      if(class_name_pieces[2]) var class_value = class_name_pieces[2];
      if(class_name_pieces[3]) var class_event = class_name_pieces[3];
      if(class_name_pieces[4]) var class_mediaquery = class_name_pieces[4];
      for(var i=0; i<peci.palette.length; i++){
        if(class_value.match('^('+peci.palette[i].match+')$')
          && peci.palette[i].property[class_property]
          && peci.palette[i].getValue(class_value)){
          var css = {
            class:class_name,
            property:peci.palette[i].property[class_property],
            value:peci.palette[i].getValue(class_value),
            event:peci.convert.eventCode2event(class_event),
            suffix:class_mediaquery
          };
          return css;
        }
      }
    },
    property : function(class_name){
      if(!class_name){ return; }
      var class_name_pieces = class_name.match(/^([a-zA-Z\_]+)-((?:[a-zA-Z0-9\_]|(?:\-\-))*)(?:-([a-zA-Z]{1,2}))?(?:-((?:(?:NX|NH|X|N)[0-9]+)+))?$/);
      if(!(class_name_pieces && class_name_pieces && class_name_pieces[1] && class_name_pieces[2] ) ){ return; }
      if(class_name_pieces[1]) var class_property = class_name_pieces[1];
      if(class_name_pieces[2]) var class_value = class_name_pieces[2];
      for(var i=0; i<peci.palette.length; i++){
        if(class_value.match('^('+peci.palette[i].match+')$')
          && peci.palette[i].property[class_property]
          && peci.palette[i].getValue(class_value)){
          return peci.palette[i].property[class_property];
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
