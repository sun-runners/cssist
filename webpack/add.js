require("./check.js");
(function(){
  peci.add = {
  	elementClasses : function(element){
      if(!(element&&element.tagName)) return;
			for(var element_to_add in peci.settings.elementsToAdd){
				if(element.tagName.toLowerCase()==element_to_add){
          var classes_add = peci.settings.elementsToAdd[element_to_add];
					classes_add.forEach(function(class_add){
						if(peci.check.repeatedClass(element, class_add)){
              if(element){
                if(element.classList){
                  element.classList.add(class_add);
                }
                else{
                  element.className = element.className + ' ' + class_add;
                }
              }
            }
					});
				}
			}
  	},
  	classClasses : function(element){
      if(!(element && element.className && typeof element.className=='string')) return;
			for(var class_to_add in peci.settings.classesToAdd){
				if(element.className.match('(^|\\s)'+class_to_add+'(\\s|$)')){
          var class_to_add_copy = class_to_add;
          var classes_to_add = peci.settings.classesToAdd[class_to_add];
					var classes_add = [];
					for(var i=0; i<classes_to_add.length; i++){
						if(peci.check.repeatedClass(element, classes_to_add[i])) classes_add.push(classes_to_add[i]);
						if( i == classes_to_add.length-1 && classes_add && classes_add.length>=1){
							var regex = new RegExp(class_to_add_copy, "g");
							element.className = element.className.replace(regex, function(match){
								var classes_add_new = match+' '+classes_add.join(' ');
								return classes_add_new;
							});
						}
					}
				}
			}
  	}
  };
})();
