import $ from 'jquery';

// smooth scrolling
// Select all links with hashes
$('a[href*="#"].link-smooth-to').click(function(event) {
  $('a[href*="#"].link-smooth-to').not($(this)).parent().removeClass('is-active');
  $(this).parent().addClass('is-active');
  // On-page links
  if (
    location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') 
      && 
      location.hostname === this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  }
});
// smooth scrolling
