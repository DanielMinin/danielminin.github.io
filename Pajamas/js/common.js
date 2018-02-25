$(function() {

	// Magnific Popup Script
	$('.popup-with-move-anim').magnificPopup({
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

	$(".top-line .sf-menu").superfish({
		cssArrows: false,
		hoverClass: 'no-class',
		delay: '100'
	});

	//EqualHeights
	$(".products-item h4").equalHeights();

	// Owl Carousel script
	var owl = $('.slider');
  owl.owlCarousel({
   loop: true,
   items: 1,
   itemClass: 'slide-wrap',
   nav: true, 
   navText: "", 
  });
  
  $('.next').on('click', function () {
      owl.trigger('next.owl.carousel', [500]);
  });
  $('.prev').on('click', function () {
      owl.trigger('prev.owl.carousel', [500]);
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
	extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
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

});
