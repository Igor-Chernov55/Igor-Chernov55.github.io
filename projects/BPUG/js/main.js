$(function() {

	$('.navbar').click(function() {
		$('.menu').addClass('menu_open');
		$('.blackout').fadeIn(300);
	});

	$(document).mouseup(function (e){
		var div = $(".menu__content");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
		    if ($('.menu').hasClass('menu_open')) {
		    	$('.menu').removeClass('menu_open');
				$('.blackout').fadeOut(300);
		    } 	
		}
	});

	$('.modal-link').click(function() {
		var modal = $(this).attr('href');
		$(modal).fadeIn(300);
		return false;
	});

	$('.modal__close, .modal__blackout').click(function() {
		$(this).parents('.modal').fadeOut(300);
		return false;
	});

	$('.popup-link').click(function() {
		var popup = $(this).attr('href');
		$(popup).slideDown(300);
		$('.blackout').fadeIn(300);
		return false;
	});

	$('.blackout').click(function() {
		$('.popup').slideUp(300);
		$(this).fadeOut(300);
	});

	$('.tabs__link').click(function() {
		var tab = $(this).attr('href');
		$('.tab').hide();
		$(tab).show();
		$('.tabs__link').removeClass('tabs__link_active');
		$(this).addClass('tabs__link_active');
		return false;
	});

	$('.user-menu__profile-link').click(function() {
		if ($(window).outerWidth() > 768) {
			$('.nav').slideToggle(300);
			return false;
		}
	});

	$(document).mouseup(function (e){
		var div = $(".user-menu__profile-link, .nav");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
		    	$('.nav').slideUp(300);	
		}
	});

	$('.user-menu__notifications').click(function() {
		$('.notes').slideToggle(300);
		return false;
	});

	$(document).mouseup(function (e){
		var div = $(".user-menu__notifications, .notes");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0) {
		    	$('.notes').slideUp(300);	
		}
	});
});