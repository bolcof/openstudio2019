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

	$("#03_endo").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#03_endo_modal").fadeIn(500);
	});

	$("#04_oikawa").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#04_oikawa_modal").fadeIn(500);
	});

	$("#05_okada").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#05_okada_modal").fadeIn(500);
	});

	$("#06_kanai").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#06_kanai_modal").fadeIn(500);
	});

	$("#07_kobayashi").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#07_kobayashi_modal").fadeIn(500);
	});

	$("#08_shikichi").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#08_shikichi_modal").fadeIn(500);
	});

	$("#09_shimizu").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#09_shimizu_modal").fadeIn(500);
	});

	$("#10_shimizu").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#10_shimizu_modal").fadeIn(500);
	});

	$("#11_shin_usami").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#11_shin_modal").fadeIn(500);
	});

	$("#12_maeda").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#12_maeda_modal").fadeIn(500);
	});

	$("#13_li").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#12_li_modal").fadeIn(500);
	});

	$("#14_yoshida").click(function(){
  		$('body').css('overflow', 'hidden');
		$("#modals-wrapper").fadeIn(500);
		$("#14_yoshida_modal").fadeIn(500);
	});

	$("#modals-bg").click(function(){
  		$('body').css('overflow', 'visible');
		$(".artist-modal").fadeOut(500);
		$("#modals-wrapper").fadeOut(500);
	});

	//iOSだと動かない疑惑
	$(document).on('click', '.back-button', function(){
  		$('body').css('overflow', 'visible');
		$(".artist-modal").fadeOut(500);
		$("#modals-wrapper").fadeOut(500);
	});
	$(".back-button").on("click", function(){
		alert("aaa");
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