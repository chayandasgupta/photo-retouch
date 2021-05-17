(function($) {
    'use strict';
    var browserWindow = $(window);
    browserWindow.on('load', function() {
        $('.preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });
    if ($.fn.classyNav) {
        $('#magNav').classyNav();
    }
    if ($.fn.sticky) {
        $("#sticker").sticky({
            topSpacing: 0
        });
    }
    if ($.fn.owlCarousel) {
        var welcomeSlides = $('.hero-area');
        welcomeSlides.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000
        });
        welcomeSlides.on('translate.owl.carousel', function() {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function() {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });
        welcomeSlides.on('translated.owl.carousel', function() {
            var slideLayer = welcomeSlides.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function() {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
        $("[data-delay]").each(function() {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });
        $("[data-duration]").each(function() {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });
    }
    if ($.fn.scrollUp) {
        browserWindow.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="ti-angle-up"></i>'
        });
    }
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();
    });
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    $('.testimonial-slider-inner').owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        nav: false,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 1
            },
            1500: {
                items: 2
            }
        }
    });

     $('.pricing-service-sliders').owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 1
            },
            1500: {
                items: 2
            }
        }
    });
     
    $(function(){
	  $("#container1").twentytwenty();
      $("#container2").twentytwenty();
      $("#container3").twentytwenty();
      $("#container4").twentytwenty();
      $("#container5").twentytwenty();
      $("#container6").twentytwenty();
      $("#container7").twentytwenty();
      $("#container8").twentytwenty();
      $("#container9").twentytwenty();
	  $("#container10").twentytwenty();

	});
})(jQuery);