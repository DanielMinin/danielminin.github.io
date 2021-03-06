$(function() {


	//Slow Scroll
	$(document).ready(function(){
		$(".navigation").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;
			
			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});

	// Magnific Popup Script
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	// Mobile Menu

	$(".mobile-mnu").click(function() {
		var mmAPI = $("#my-menu").data( "mmenu" );
		mmAPI.open()
	  var thiss = $(this).find("toggle-mnu")
	  $(this).toggleClass("on");
	  $(".main-mnu").slideToggle();
	  return false;
	});

	$("#my-menu").mmenu({
		extensions : [ 'widescreen', 'theme-white', 'position-right', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title : "Меню"
		}
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});

	//Open
	$("#hd-1").click(function() {
		$(".block-8").removeClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
		
	});

	$("#hd-2").click(function() {
		$(".block-9").removeClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
		
	});

	$("#hd-3").click(function() {
		$(".block-9-2").removeClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
		
	});

	$("#ko-1").click(function() {
		$(".block-10").removeClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
		
	});

	$("#d-1").click(function() {
		$(".block-11").removeClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
		
	});

	$("#aud-1").click(function() {
		$(".block-12").removeClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	
	});

	$("#aud-2").click(function() {
		$(".block-13").removeClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
		
	});

	$("#aud-3").click(function() {
		$(".block-14").removeClass("hidden");	
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	
	});

	$("#aud-4").click(function() {
		$(".block-15").removeClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
		
	});

	$("#pr-1").click(function() {
		$(".block-16").removeClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	});

	$("#pr-2").click(function() {
		$(".block-16-2").removeClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	});

	$("#pr-3").click(function() {
		$(".block-16-3").removeClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	});

	$("#it-1").click(function() {
		$(".block-17").removeClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-16-3").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	});

	$("#it-2").click(function() {
		$(".block-17-2").removeClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-16-3").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	});

	$("#it-3").click(function() {
		$(".block-17-3").removeClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-16-3").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	});

	$("#vo-1").click(function() {
		$(".block-18").removeClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-16-3").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	});

	$("#vo-2").click(function() {
		$(".block-18-2").removeClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-3").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-16-3").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	});

	$("#vo-3").click(function() {
		$(".block-18-3").removeClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-16-3").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
	});

	$("#pk-1").click(function() {
		$(".block-19").removeClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19-3").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-16-3").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
	});

	$("#pk-2").click(function() {
		$(".block-19-2").removeClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-19-3").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$(".block-16-2").addClass("hidden");
		$(".block-16-3").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
	});

	$("#pk-3").click(function() {
		$(".block-19-3").removeClass("hidden");
		$(".block-19-2").addClass("hidden");
		$(".block-19").addClass("hidden");
		$(".block-12").addClass("hidden");
		$(".block-13").addClass("hidden");
		$(".block-9").addClass("hidden");
		$(".block-9-2").addClass("hidden");
		$(".block-8").addClass("hidden");
		$(".block-10").addClass("hidden");
		$(".block-11").addClass("hidden");
		$(".block-14").addClass("hidden");
		$(".block-15").addClass("hidden");
		$(".block-16").addClass("hidden");
		$("block-16-2").addClass("hidden");
		$(".block-16-3").addClass("hidden");
		$(".block-17").addClass("hidden");
		$(".block-17-2").addClass("hidden");
		$(".block-17-3").addClass("hidden");
		$(".block-18").addClass("hidden");
		$(".block-18-2").addClass("hidden");
		$(".block-18-3").addClass("hidden");
	});

	$("#openzakon").click(function() {
		$("#zakon1").removeClass("hidden");
	});

	$("#fz-1").click(function() {
		$(".fedzak").removeClass("hidden");
		$(".zakon1").addClass("hidden");
		$(".grazdkod").addClass("hidden");
		$(".prikazy").addClass("hidden");
		$(".zakipost").addClass("hidden");
		$(".gradkod").addClass("hidden");
	});

	$("#prik-1").click(function() {
		$(".prikazy").removeClass("hidden");
		$(".zakon1").addClass("hidden");
		$(".grazdkod").addClass("hidden");
		$(".fedzak").addClass("hidden");
		$(".zakipost").addClass("hidden");
		$(".gradkod").addClass("hidden");
	});

	$("#zip-1").click(function() {
		$(".zakipost").removeClass("hidden");
		$(".zakon1").addClass("hidden");
		$(".grazdkod").addClass("hidden");
		$(".fedzak").addClass("hidden");
		$(".prikazy").addClass("hidden");
		$(".gradkod").addClass("hidden");
	});

	$("#grdk-1").click(function() {
		$(".gradkod").removeClass("hidden");
		$(".zakon1").addClass("hidden");
		$(".grazdkod").addClass("hidden");
		$(".fedzak").addClass("hidden");
		$(".prikazy").addClass("hidden");
		$(".zakipost").addClass("hidden");
	});

	$("#grk-1").click(function() {
		$(".grazdkod").removeClass("hidden");
		$(".zakon1").addClass("hidden");
		$(".fedzak").addClass("hidden");
		$(".prikazy").addClass("hidden");
		$(".zakipost").addClass("hidden");
		$(".gradkod").addClass("hidden");
	});

	$("#bot-nav").click(function() {
		$("#bot-menu").removeClass("hidden");
		$("#delmenu").removeClass("hidden");
	});	

	$("#delmenu").click(function() {
		$("#bot-menu").addClass("hidden");
		$("#delmenu").addClass("hidden");
	});

});