# hoverThrottle

A DOM Node module which keeps your heavy hover states from janking up scroll. It does this by adding `pointer-events: none` to `HTML` while scrolling. When finished scrolling, the style is removed.

## Initialization and Options

To get things going require the module. The only option is the amount of time between the last scroll event and the `pointer-events` being reset.
	
    var hoverThrottle = require('hoverThrottle');
    
    hoverThrottle.init({
	    'debounce' : 100
    });

You can then turn the plugin on and off like so:

    hoverThrottle.on();
    hoverThrottle.off();

s/o Jon Gacnik for the original idea.
