// Initialize
import { initialize } from './initialize.js'
initialize();

// Watch
import { watch } from './watch.js'
watch();

import { download } from './download.js'
window.cssist.download = download;

import { testSelector, testElement, testRootElement, testPropertyValue, testEvent, testMediaQueries } from './test.js'
window.cssist.testSelector = testSelector;
window.cssist.testElement = testElement;
window.cssist.testRootElement = testRootElement;
window.cssist.testPropertyValue = testPropertyValue;
window.cssist.testEvent = testEvent;
window.cssist.testMediaQueries = testMediaQueries;
