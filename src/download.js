import { initialize } from './initialize.js'



export var download = function(){
  if(!window.cssist) initialize();

  // Set content
  var stylesheet = window.cssist.stylesheet;

  // Create a tag
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/css;charset=utf-8,' + encodeURIComponent(stylesheet));
  element.setAttribute('download', 'cssist.css');
  element.style.display = 'none';

  // Add a tag
  document.body.appendChild(element);

  // Download with a tag
  element.click();

  // Remove a tag
  document.body.removeChild(element);
};
