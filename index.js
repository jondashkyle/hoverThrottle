/**
 * hoverThrottle
 * - Keeps your heavy hover states from janking up scroll
 */

var extend = require('extend');
var raf    = require('raf');

var options = {
  'debounce' : 100
};

var data = {
  'ticking'  : false,
  'throttle' : null
};

/**
 * Merge the options and start listening to the events
 */
var init = function(opts) {
  options = extend(true, options, opts);
  on();
};

/**
 * Requests a new animation frame if we're not already animating
 */
var scroll = function() {
  if ( ! data.ticking ) raf(update);
  data.ticking = true;
};

/**
 * Disable cursor events, queue the throttle
 * and disable ticking when finished
 */
var update = function() {
  enabled();
  clearTimeout(data.throttle);
  data.throttle = setTimeout(disabled, options.debounce);
  data.ticking = false;

};

/**
 * Disable the pointer event prevention
 */
var disabled = function() {
  document.querySelector('html').style.removeProperty('pointer-events');
};

/**
 * Enable the pointer event prevention
 */
var enabled = function() {
  document.querySelector('html').style['pointer-events'] = 'none';
};

/**
 * Listen to scroll events
 */
var on = function() {
  window.addEventListener('scroll', scroll, false); 
};

/**
 * Stop listening to scroll events
 */
var off = function() {
  window.removeEventListener('scroll', scroll, false);
};

/**
 * Public methods
 */
module.exports = {
  init   : init,
  on     : on,
  off    : off
}