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
  
}(jQuery);
