Jumper
Navigate smoothly from section to section within the page.
Requires jQuery.

CALL 
jumpToSection( options );
  @options - Integer, duration in milliseconds. Default: 800

USAGE
1. Use it with links.
  <a hreh="#id-of-section-to-jump-to" class="your-class">Let's Jump</a>

2. Call Jumper:
  $('.your-class').jumpToSection();
  To change the duration, call:
  $('.your-class').jumpToSection({ duration: youNewDurationInteger });
  where youNewDurationInteger - Integer
