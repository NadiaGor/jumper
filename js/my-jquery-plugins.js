
+function( $ ){

/*
* jumpToSection
*
* @options - duration in milliseconds. Default: 800
*
*/

  $.fn.jumpToSection = function( options ) {
        var settings = $.extend({
          duration: 800
        }, options);
        return this.each(function() {
              var elFrom = this;
              var elTo = $(this).attr('href');
              var elToPosition = $(elTo).offset().top;
              $(window).resize(function() {
                  elToPosition = $(elTo).offset().top;
              });
  
              $(this).click(function(e) {
                  e.preventDefault();
                  $('html, body').animate({
                      scrollTop: elToPosition
                  }, settings.duration);
              });
          });
      };


/*
* animateIt
*
* @action - String Required. fadeInIt / countIt
*
* @options - Optional. 
*       For countIt: 
*           - duration - integer in milliseconds. Default: 2500                
*           - easing - string. swing / linear. Default swing.
*
*       For countIt: 
*           - time - integer in seconds. Default: 2 
*
*
*/

$.fn.animateIt = function( action, options ) {
        var self = this;
        var elToShow = [];
        var settings = $.extend({
            duration: 2500,
            easing: 'swing',
            time: 2
        }, options);
        

        self.each( function() { 
            //var elPositionBottom = $(this).offset().top + $(this).height();
            var elPositionTop = $(this).offset().top;
            var txt = jQuery(this).html();
            var elHtml = parseInt( (txt.replace(' ','').replace('$','')), 10);
            elToShow.push([this, elPositionTop, elHtml]);
        });

        $(window).resize(function() {
            self.each( function(i) {
                //elPositionBottom = jQuery(this).offset().top + jQuery(this).height();
                elPositionTop = $(this).offset().top;
                elToShow[i][1] = elPositionTop;
            });
            
        });

        if ( action == "fadeInIt" ) {
            
            jQuery(window).scroll( function() {
                $(elToShow).each( function() {
                var currentPosBottom = ( $(window).scrollTop() ) + ( $(window).height() );
                if ( currentPosBottom >= this[1] ) {
                        $(this[0]).css({
                            'opacity': '1',
                            'filter': 'alpha(opacity=1)',
                            'transition': 'opacity ' + settings.time + 's ease-in',
                            '-ms-transition': 'opacity ' + settings.time + 's ease-in',
                            '-webkit-transition': 'opacity ' + settings.time + 's ease-in',
                            '-moz-transition': 'opacity ' + settings.time + 's ease-in',
                            '-o-transition': 'opacity ' + settings.time + 's ease-in'
                        });
                    } else {
                        $(this[0]).css({
                            'opacity': '0',
                            'filter': 'alpha(opacity=0)',
                            // 'transition': 'opacity ' + settings.time + 's ease-in',
                            // '-ms-transition': 'opacity ' + settings.time + 's ease-in',
                            // '-webkit-transition': 'opacity ' + settings.time + 's ease-in',
                            // '-moz-transition': 'opacity ' + settings.time + 's ease-in',
                            // '-o-transition': 'opacity ' + settings.time + 's ease-in'
                        });
                    }
                });
            });

        } else if ( action == "countIt" ) {
            $(window).scroll( function() {
                $(elToShow).each( function(i) {
                    var currentPosBottom = ( $(window).scrollTop() ) + ( $(window).height() );
                    if ( currentPosBottom >= this[1] ) {
                        
                        $(this[0]).prop('Counter', 0).animate({
                            Counter: this[2]
                        }, {
                            duration: settings.duration,
                            easing: settings.easing,
                            step: function(now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    }
                });
            });

        } else {
            console.log('There is no such action - ' + action);
        }
    };
 
  
}(jQuery);

