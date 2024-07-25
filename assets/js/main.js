(function ($) {

    "use strict"
    $(document).ready(function () {

        // mobile menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.98",
            onePage: false
        });

        // gallary
        $('.gallery').slick({
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 0.2,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        dots: false,
                        arrows: false,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        dots: false,
                        arrows: false,
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        dots: false,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        dots: false,
                        autoplaySpeed: 0.5,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        // faq
        $(document).ready(function () {
            $('.accordion-list > li > .answer').hide();

            $('.accordion-list > li').click(function () {
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active").find(".answer").slideUp();
                } else {
                    $(".accordion-list > li.active .answer").slideUp();
                    $(".accordion-list > li.active").removeClass("active");
                    $(this).addClass("active").find(".answer").slideDown();
                }
                return false;
            });
        });

    });

    $(window).on('scroll', function () {

        // back to top scroll
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(1000);
        } else {
            ScrollTop.fadeOut(1000);
        }

    });

    $(window).on('load', function () {

        // wow js
        new WOW().init();

        // preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

        // back to top animate
        $(".back-to-top").on('click', function () {
            $("html").animate({
                "scrollTop": "0"
            }, 1000);
        });

    });

})(jQuery);
