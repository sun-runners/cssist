import { startSelector, startElement, startRootElement } from './start.js'
import { getPropertyValue, getEvent, getMediaQueries } from './get.js'



export var testSelector = function(selector){ return startSelector(selector, true); };

export var testElement = function(element){ return startElement(element, true); };

export var testRootElement = function(element){ return startRootElement(element, true); };



export var testPropertyValue = function(prop, val){ return getPropertyValue(prop, val); };

export var testEvent = function(evt){ return getEvent(evt); };

export var testMediaQueries = function(mqs){ return getMediaQueries(mqs); };
