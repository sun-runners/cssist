require("./get.js");
(function(){
  cssist.download = function(){
    var style_element = cssist.get.styleElement();
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/css;charset=utf-8,' + encodeURIComponent(style_element.innerHTML));
    element.setAttribute('download', 'cssist.css');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
})();
