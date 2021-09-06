/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

(function ($) {
	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
			parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 20

		};

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1800px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px'],
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Touch?
	if (browser.mobile) {

		// Turn on touch mode.
		$body.addClass('is-touch');

		// Height fix (mostly for iOS).
		window.setTimeout(function () {
			$window.scrollTop($window.scrollTop() + 1);
		}, 0);

	}

	// Footer.
	breakpoints.on('<=medium', function () {
		$footer.insertAfter($main);
	});

	breakpoints.on('>medium', function () {
		$footer.appendTo($header);
	});

	// Header.

	// Parallax background.

	// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
	if (browser.name == 'ie'
		|| browser.mobile)
		settings.parallax = false;

	if (settings.parallax) {

		breakpoints.on('<=medium', function () {

			$window.off('scroll.strata_parallax');
			$header.css('background-position', '');

		});

		breakpoints.on('>medium', function () {

			$header.css('background-position', 'left 0px');

			$window.on('scroll.strata_parallax', function () {
				$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
			});

		});

		$window.on('load', function () {
			$window.triggerHandler('scroll');
		});

	}

	// Main Sections: Two.

	// Lightbox gallery.
	$window.on('load', function () {
		if (document.getElementById("poptrox")) {
			$('#gallery').poptrox({
				caption: function ($a) {
					return $a.siblings('.listing-box').find('h3').text();
				},
				overlayColor: '#2c2c2c',
				overlayOpacity: 0.85,
				popupCloserText: '',
				popupLoaderText: '',
				selector: '.work-item a.image',
				usePopupCaption: true,
				usePopupDefaultStyling: false,
				usePopupEasyClose: false,
				usePopupNav: true,
				windowMargin: (breakpoints.active('<=small') ? 0 : 50)
			});
		}
	});

	/*$("#tag-box ul")
		.css("display", "flex")
		.hide()
		.fadeIn(5500)*/

	let typeText = function (target, message, index, interval) {
		if (index < message.length) {
			$(target).append(message[index++]);
			setTimeout(function () { typeText(target, message, index, interval); }, interval);
		}
	}

	//typeText("#name", "Samantha Baran", 0, 250);

	function scrollTo(id) {
		$("html, body").animate({
			scrollTop: $(id).offset().top - 90
		}, 1000);
	}

	$("#nav-home").click(function () {
		scrollTo("head");
	});

	$("#nav-services").click(function () {
		scrollTo("#services");
	});

	$("#nav-edu").click(function () {
		scrollTo("#education");
	});

	$("#nav-exp").click(function () {
		scrollTo("#experience");
	});

	$("#nav-pub").click(function () {
		scrollTo("#publications");
	});

	$("#nav-contact").click(function () {
		scrollTo("#contact");
	});

	$("#nav-bars").click(function () {
		myFunction();
	});

	// Toggle fade for #top-button when scrolling down
	$(window).scroll(function () {
		if ($("html, body").scrollTop() > 250) {
			$("#top-button").fadeIn(2000);
		} else {
			$("#top-button").fadeOut(1000);
		}
	});

	$(function () {
		$("#footer").load("footer.html");
	});

	$(window).scroll(function () {

		/* Check the location of each desired element */
		$('section').each(function (i) {

			let threshold = vh(15)
			let bottom_of_object = $(this).offset().top + threshold;
			let bottom_of_window = $(window).scrollTop() + $(window).height();

			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object) {
				$(this).addClass("slide-in");

				/*$(this).animate({
					'opacity': '1'
				}, 500);*/

			}
		});
	});

	$("#demo-ma").click(function () {
		$('[data-group*="1"]').addClass('highlighted');
		$('[data-group*="2"]').removeClass('highlighted');
	});

	$("#demo-ba").click(function () {
		$('[data-group*="2"]').addClass('highlighted');
		$('[data-group*="1"]').removeClass('highlighted');
	});



	// Scroll to top if #top-button clicked
	/*$("#top-button").click(function () {
		scrollTo("head");
	});*/

	/*colours = ["FF9AA2", "FFB7B2", "FFDAC1", "E2F0CB", "B5EAD7", "C7CEEA"]
	$(".courses li").each(function() {
		let randomNum = (Math.random() * (colours.length)) << 0
		$(this).css("backgroundColor","#" + colours[randomNum]);
	});*/
})(jQuery);

function vh(v) {
	let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	return (v * h) / 100;
}