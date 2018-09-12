$(function(){



    // nav
	var _width=$(window).width();
	if(_width>800){
		$('.nav li').hover(function() {
			$(this).find('.two-nav').stop().slideDown()
		}, function() {
			$(this).find('.two-nav').stop().slideUp()
		});
	}

	$('.header .nav li.hasnav').click(function(event) {
		if(_width<800){
			$(this).find('.two-nav').stop().slideToggle();
			$(this).toggleClass('on');
			$(this).siblings().find('.two-nav').stop().slideUp();
			$(this).siblings().removeClass('on')
		}
	});


    $('.menu-btn').click(function(event) {
		event.stopPropagation()
		$('.nav').stop().slideToggle();
	});





























})