

$(document).ready(function () {
	
// ===== HEADER =====
	// handling Hold header on top
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 150) {
			$('#header #top-header').removeClass('d-md-block').addClass('d-md-none');
			$("#header").addClass('sticky-top').css({ 'opacity': '0.8' });
		} else $("#header").removeClass('sticky-top').css('opacity', '1')
			&& $('#header #top-header').addClass('d-md-block').removeClass('d-md-none');
	});

	// handling add border navbar menu
	$(window).resize(function () {
		if ($(window).width() <= 1000) {
			$("li.nav-item").removeClass('position-static');
			$("#dropdown").addClass('respon');
			$("#main-nav ul.navbar-nav").addClass('border-top').css('margin-top', '15px');
		} else {
			$("li.nav-item").addClass('position-static');
			$("#dropdown").removeClass('respon');
			$("#main-nav ul.navbar-nav").removeClass('border-top')
		};
	})

	$('button.navbar-toggler').click(function () {
		if (($('#header').height() >= 200)) {
			// $('.icons').removeClass('d-none');
			$('.icons a.icon-btn i.fa-cart-plus').removeClass('d-none').css('margin-left', '0px');
			$('.icons a.icon-btn i.fa-search').removeClass('d-none')
			$('form.form-inline').addClass('d-none');
		} else {
			$('.icons a.icon-btn i.fa-cart-plus').addClass('d-inline-block').css('margin-left', '65px');
			$('.icons a.icon-btn i.fa-search').addClass('d-none');
			$('form.form-inline').removeClass('d-none');
		}
	});

	// handling show sub menu
	$("#main-nav ul.navbar-nav li").hover(function () {
		$(this).children('ul.sub-menu').addClass('show');
	}, function () {
		$(this).children('ul.sub-menu').removeClass('show');
	});

	// handling dropdown menu
	$("#main-nav ul.navbar-nav li").hover(function () {
		$(this).children('#dropdown').addClass('show');
	}, function () {
		$(this).children('#dropdown').removeClass('show');
	});
	// =====
	// =====
	$("#main-nav ul.navbar-nav li.nav-item").click(function () {
		$(this).children('ul.sub-menu').toggleClass('show-1');
		$(this).children('#dropdown').toggleClass('show-1');
		// if($("#main-nav ul.navbar-nav li.nav-item"). )
	});

	// ===product hot===
	$('#product-hot .owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			768: {
				items: 3
			},
			1000: {
				items: 4
			}
		}
	});
});

// ===== BANNER =====
$(document).ready(function () {
	$("#home-slide").carousel({
		interval: 2000,
		ride: 'carousel'
	});
});

// ===== BACKTOP =====
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 200) {
			$("#backtop").addClass('show');
		} else $("#backtop").removeClass('show');
	});
	$("#backtop").click(function () {
		$("html, body").animate({
			scrollTop: '0'
		}, 600)
	});
});

// // ===== GENEREAL =====
// tooltip
$(document).ready(function () {
	$("[data-toggle='tooltip']").tooltip({
		placement: 'bottom',
		trigger: 'hover focus',
		html: true
	})
});
