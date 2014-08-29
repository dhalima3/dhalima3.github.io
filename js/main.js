//INITIALIZE FLEXSLIDER
$(window).load(function(){
	$('.flexslider').flexslider();
});

// INITIALIZE EASY PIE CHART
$(function() {
    $('.chart').easyPieChart({
    	easing: 'easeOutBounce',    	
    	barColor: "#3498db",
    	scaleColor: false,
    	size: 150, //need to change CSS too (.chart width and height), (.percent line-height)
		onStep: function(from, to, percent) {
			$(this.el).find('.percent').text(Math.round(percent));
		}    	
    });
});

//SCROLLING STICKY HEADER
$(window).scroll(function () {
  if ( $(this).scrollTop() > 200 ) {
    $('header').addClass('navbar-fixed-top');
    $('header').fadeIn();
   } else if ( $(this).scrollTop() <= 200 ) {
    $('header').fadeOut();
  }
});

