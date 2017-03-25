$(document).ready(function(){

  // header-menu-links
  var url = document.location.href;
  var str = url.substr(0, url.lastIndexOf('/'));
  var nUrl = url.substr(url.lastIndexOf('/')+1);
  $('.js-menu-link').each(function(){
      if( $(this).attr('href') === nUrl){
          $(this).addClass('menu-link-active');
      };
  });

  // slider

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


//top-btn

$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});
$('.top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});

});
