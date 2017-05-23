require("./convert.js");
(function(){
  cssist.get = {

    // Classes
    classesOfElement : function(element){
      var classNames = [];
      if(element && element.className && element.className.length>=1) classNames = element.className.split(' ');
      return classNames;
    },
    classPiecesOfClass: function(class_name){
      if(!class_name){ return; }
      var class_pieces = class_name.match(/^([a-zA-Z\_]+)-((?:[a-zA-Z0-9\_]|(?:\-\-))*)(?:-([a-zA-Z]{1,2}))?(?:-((?:(?:XH|NH|XW|NW|X|N)[0-9]+)+))?$/);
      if(!(class_pieces&&class_pieces[1]&&class_pieces[2] ) ){ return; }
      return {
        class_name: class_name,
        property: class_pieces[1],
        value: class_pieces[2],
        event: class_pieces[3]?class_pieces[3]:null,
        media_query: class_pieces[4]?class_pieces[4]:null
      };
    },

    // Css
    cssSetsOfClassPieces: function(class_pieces){
      for(var i=0; i<cssist.property_sets.length; i++){
        var property_set = cssist.property_sets[i];
        if(property_set.properties[class_pieces.property]){
          for(var j=0; j<property_set.value_sets.length; j++){
            var value_set = property_set.value_sets[j];
            var regex = new RegExp(value_set.regex);
            if(class_pieces.value.match(regex)){
              return {
                property_set : property_set,
                value_set : value_set
              };
            }
          }
        }
      }
    },
    cssOfCssSetsAndClassPieces: function(class_pieces, css_sets){
      var class_name = class_pieces.class_name;
      var property = css_sets.property_set.properties[class_pieces.property];
      var value = css_sets.value_set.getValue(class_pieces.value);
      var event = cssist.convert.eventCode2event(class_pieces.event);
      var media_queries = cssist.convert.mediaQueryCodes2mediaQueries(class_pieces.media_query);
      if((value === undefined || value === null)) return;
      return {
        class:class_name,
        property:property,
        value:value,
        event:event,
        max_height:media_queries.max_height?media_queries.max_height:null,
        min_height:media_queries.min_height?media_queries.min_height:null,
        max_width:media_queries.max_width?media_queries.max_width:null,
        min_width:media_queries.min_width?media_queries.min_width:null
      };
    },
    cssOfClass : function(class_name){
      var class_pieces, css_sets, css;
      class_pieces = this.classPiecesOfClass(class_name);
      if(!class_pieces) return;
      css_sets = this.cssSetsOfClassPieces(class_pieces);
      if(!css_sets) return;
      css = this.cssOfCssSetsAndClassPieces(class_pieces, css_sets);
      if(!css) return;
      return css;
    },

    // Style
    styleElement: function(){
      var style_element;
      if(document.querySelectorAll('style#cssist')&&document.querySelectorAll('style#cssist')[0]){
        return document.querySelectorAll('style#cssist')[0];
      }
      var style = document.createElement("STYLE");

      // WebKit hack :(
      style.appendChild(document.createTextNode(''));

      style.setAttribute("type", 'text/css');
      style.setAttribute("id", "cssist");
      document.head.appendChild(style);
      return style;
    },
    styleSheet: function(){
      var style_element = this.styleElement();
      return style_element.styleSheet || style_element.sheet;
    }

  };
})();
