# Animate It - jQuery Plugin

## Contents
* [Requirements](../blob/master/README.md#Requirements)
* [Call](../master/README.md#Call)
* [Jumper](../blob/master/README.md#Jumper)
* [Counter](../blob/master/README.md#Counter)
* [Fader](../blob/master/README.md#Fader)
* [LICENSE](../master/README.md#LICENSE)


## Requirements
  - jQuery
  
## Call
`animateIt( action, options )`;

`@action` - String. Required. `fadeInIt` / `countIt` / `jumper`
  
`@options` - Optional
  
	
### Jumper (`jumper`)
	Navigates smoothly from section to section within the page.

	Options:
	    - `duration` - integer in milliseconds. Default: 800
	    - `showStickyActive` - boolean. Use with `stickyClass` option. Default: false
	    - `stickyClass` - string. Reqiured if `showStickyActive == true`. Default class 'active'.
	    	Class that will be added to active link element 
	    	if showStickyActive == true and active link is in the area of the linked element. 
	    	Will be removed if link is out of the area of the linked element.
	
	Usage:
    	1. Use it with links.
		  `<a href="#id-of-section-to-jump-to" class="your-class">Let's Jump</a>`

		2. Call Jumper:
		  `$('.your-class').animateIt('jumpToSection');`
		  
		  To change the duration, call:
		  `$('.your-class').animateIt('jumpToSection', ({ duration: youNewDurationInteger });`
		  where `youNewDurationInteger` - Integer in milliseconds


### Counter (`countIt`) 
	Animates number counting.
	
	Options: 
    	- `duration` - integer in milliseconds. Default: 800                
    	- `easing` - string. `swing` / `linear`. Default `swing`.

    Usage:
     

### Fader (`fadeInIt`) 
	fadeIn / fadeOut content animation

	Options: 
        - `time` - integer in seconds. Default: 2 

    Usage:


		

## MIT License
Copyright (c) 2017 Nadia Atamas &lt;info@atamas-design.com&gt;


See [LICENSE][(../blob/master/LICENSE.txt)
