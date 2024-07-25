(function ($) {

    "use strict"
    $(document).ready(function () {

        // mobile menu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.98",
            onePage: false
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
