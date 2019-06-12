$(function(){
	//menu bar
	$("#title").click(function(){
		$(window).scrollTop(0);
	});
	$("#header-top").click(function(){
		$("html,body").animate({
			scrollTop:$('.top-wrapper').offset().top
		});
	});
	$("#header-about").click(function(){
		$("html,body").animate({
			scrollTop:$('.about-wrapper').offset().top - $('header').height()
		});
	});
	$("#header-exhibitors").click(function(){
		$("html,body").animate({
			scrollTop:$('.exhibitors-wrapper').offset().top - $('header').height()
		});
	});
	$("#header-access").click(function(){
		$("html,body").animate({
			scrollTop:$('.access-wrapper').offset().top - $('header').height()
		});
	});


	//modal
	$("#modals-wrapper").hide();
	$(".artist-modal").hide();

	$("#01_asao").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#01_asao_modal").fadeIn(500);
	});

	$("#02_usami").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#02_usami_modal").fadeIn(500);
	});


	$("#modals-bg").click(function(){
  		$('body').css('overflow', 'visible');
		$(".artist-modal").fadeOut(500);
		$("#modals-wrapper").fadeOut(500);
	});
	$(".back-button").click(function(){
  		$('body').css('overflow', 'visible');
		$(".artist-modal").fadeOut(500);
		$("#modals-wrapper").fadeOut(500);
	});


	//footer
	$("#twitter-button").click(function(){
		window.location.href = "https://twitter.com/geidai_newmedia";
	});
	$("#facebook-button").click(function(){
		window.location.href = "https://www.facebook.com/Tokyo.Geidai.New.Media/";
	});
	$("#instagram-button").click(function(){
		window.location.href = "http://hiroya-endo.net/";
	});
});