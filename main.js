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

  	// var headerHeight = $('header').outerHeight();
  	var headerHeight = $('#title').outerHeight();

  	if(window.parent.screen.width <= 750){
  		$(window).on('load', function(){
      		$('header').css('top', '-' + headerHeight + 'px');
  		});
  		$(window).on('scroll', function(){
  			if($(window).scrollTop() == 0){
      			$('header').css('top', '-' + headerHeight + 'px');
  			}else{
  				$('header').css('top', '0');
  			}
  		});
  	}else{
  		$('header').css('top', '0');
  	}


	//modal
	$("#modals-wrapper").hide();

	$(".grades").on('click', '#_01_asao', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_01_asao_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_02_usami', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_02_usami_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_03_endo', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_03_endo_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_04_oikawa', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_04_oikawa_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_05_okada', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_05_okada_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_06_kanai', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_06_kanai_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_07_kobayashi', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_07_kobayashi_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_08_shikichi', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_08_shikichi_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_09_shimizu', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_09_shimizu_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_10_shimizu', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_10_shimizu_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_11_shin', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_11_shin_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_12_maeda', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_12_maeda_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_13_li', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_13_li_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_14_yoshida', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_14_yoshida_modal").fadeIn(500);
	});

	//M1
	$(".grades").on('click', '#_01_osato', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_01_osato_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_02_otaki', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_02_otaki_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_03_oka', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_03_oka_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_04_kang', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_04_kang_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_05_koga', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_05_koga_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_06_kobayashi', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_06_kobayashi_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_07_shiina', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_07_shiina_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_08_shishikura', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_08_shishikura_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_09_shimura', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_09_shimura_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_10_seko', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_10_seko_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_11_hirai', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_11_hirai_modal").fadeIn(500);
	});

	$(".grades").on('click', '#_12_hukuhara', function(){
  		$('body').css('overflow', 'visible');
		$("#modals-wrapper").fadeIn(500);
		$("#_12_hukuhara_modal").fadeIn(500);
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
		window.location.href = "https://www.instagram.com/geidainewmedia/";
	});
});