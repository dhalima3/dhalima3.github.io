//SCROLLING STICKY HEADER
$(window).scroll(function () {
  if ( $(this).scrollTop() > 200 ) {
    $('header').addClass('navbar-fixed-top');
    $('header').fadeIn();
   } else if ( $(this).scrollTop() <= 200 ) {
    $('header').fadeOut();
  }
});

