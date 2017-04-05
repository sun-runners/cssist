require("./check.js");
(function(){
  peci.replace = {
    classClasses : function(element){
      if(!(element && element.className && typeof element.className=='string')) return;
			for(var class_to_replace in peci.settings.classesToReplace){
				if(element.className.match('(^|\\s)'+class_to_replace+'(\\s|$)')){
          var class_remove = class_to_replace;
          var classes_replace = peci.settings.classesToReplace[class_remove];
          var classes_add = [];
					for(var i=0; i<classes_replace.length; i++){
						var class_add = classes_replace[i];
						if(peci.check.repeatedClass(element, class_add)) classes_add.push(class_add);
						if(i == classes_replace.length-1){
							element.className = element.className.replace(class_remove, function(match){
								return classes_add.join(' ');
							});
						}
					}
				}
			}
  	}
  };
})();
