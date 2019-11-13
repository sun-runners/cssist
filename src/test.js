import { startSelector, startElement, startRootElement } from './start.js'



export var testSelector = function(element){ return startSelector(element, true); };

export var testElement = function(element){ return startElement(element, true); };

export var testRootElement = function(element){ return startRootElement(element, true); };
