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

	$(".grades").on('click', '#01_asao', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#01_asao_modal").fadeIn(500);
	});

	$(".grades").on('click', '#02_usami', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#02_usami_modal").fadeIn(500);
	});

	$(".grades").on('click', '#03_endo', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#03_endo_modal").fadeIn(500);
	});

	$(".grades").on('click', '#04_oikawa', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#04_oikawa_modal").fadeIn(500);
	});

	$(".grades").on('click', '#05_okada', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#05_okada_modal").fadeIn(500);
	});

	$(".grades").on('click', '#06_kanai', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#06_kanai_modal").fadeIn(500);
	});

	$(".grades").on('click', '#07_kobayashi', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#07_kobayashi_modal").fadeIn(500);
	});

	$(".grades").on('click', '#08_shikichi', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#08_shikichi_modal").fadeIn(500);
	});

	$(".grades").on('click', '#09_shimizu', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#09_shimizu_modal").fadeIn(500);
	});

	$(".grades").on('click', '#10_shimizu', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#10_shimizu_modal").fadeIn(500);
	});

	$(".grades").on('click', '#11_shin', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#11_shin_modal").fadeIn(500);
	});

	$(".grades").on('click', '#12_maeda', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#12_maeda_modal").fadeIn(500);
	});

	$(".grades").on('click', '#13_li', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#13_li_modal").fadeIn(500);
	});

	$(".grades").on('click', '#14_yoshida', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#14_yoshida_modal").fadeIn(500);
	});

	//M1
	$(".grades").on('click', '#01_osato', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#01_osato_modal").fadeIn(500);
	});

	$(".grades").on('click', '#02_otaki', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#02_otaki_modal").fadeIn(500);
	});

	$(".grades").on('click', '#03_oka', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#03_oka_modal").fadeIn(500);
	});

	$(".grades").on('click', '#04_kang', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#04_kang_modal").fadeIn(500);
	});

	$(".grades").on('click', '#05_koga', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#05_koga_modal").fadeIn(500);
	});

	$(".grades").on('click', '#06_kobayashi', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#06_kobayashi_modal").fadeIn(500);
	});

	$(".grades").on('click', '#07_shiina', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#07_shiina_modal").fadeIn(500);
	});

	$(".grades").on('click', '#08_shishikura', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#08_shishikura_modal").fadeIn(500);
	});

	$(".grades").on('click', '#09_shimura', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#09_shimura_modal").fadeIn(500);
	});

	$(".grades").on('click', '#10_seko', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#10_seko_modal").fadeIn(500);
	});

	$(".grades").on('click', '#11_hirai', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#11_hirai_modal").fadeIn(500);
	});

	$(".grades").on('click', '#12_hukuhara', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#12_hukuhara_modal").fadeIn(500);
	});

	$("#modals-wrapper").on('click', '.back-button', function(){
  		$('body').css('overflow', 'visible');
		$(".artist-modal").fadeOut(500);
		$("#modals-wrapper").fadeOut(500);
	});
	$("#modals-wrapper").on("click", '#modals-bg', function(){
  		$('body').css('overflow', 'visible');
		$(".artist-modal").fadeOut(500);
		$("#modals-wrapper").fadeOut(500);
	});

	$(".grades").on("click", ".artist-wrapper", function(){
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