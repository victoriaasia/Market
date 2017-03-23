$(document).ready(function(){
  $('.home-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });

  // cut text - index page

  $('.js-desc').each (function(){
   if ($(this).text().length > 90)
     $(this).text($(this).text().substring(0, 90) + '...');
  });

  $('.js-text').each (function(){
   if ($(this).text().length > 1800)
     $(this).text($(this).text().substring(0, 1800) + '...');
  });

  // tab content - products page

  $('.js-items li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.js-items li').removeClass('current');
		$('.js-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

  // modal - rent page
	// $('.js-title, .js-document').click( function(event){
	// 	event.preventDefault();
	// 	$('.overlay').fadeIn(200,
	// 		function(){
	// 		$('.js-modal').css('display', 'block').animate({opacity: 1}, 300);
	//  });
	// });
	// $('.js-close, .overlay').click( function(){
	// 	$('.js-modal').animate({opacity: 0}, 200,
	// 			function(){
	// 				$(this).css('display', 'none');
	// 				$('.overlay').fadeOut(400);
	// 			}
	// 		);
	// });


  $('#top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);
  });

});
