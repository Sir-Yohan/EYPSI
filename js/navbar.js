(function ($) {
    "use strict";

    // Fixed Navbar
    function fixedNavbar() {
        if ($(window).width() < 992) {
            if ($(window).scrollTop() > 45) {
                $('.navbar').addClass('bg-dark shadow');
            } else {
                $('.navbar').removeClass('bg-dark shadow');
            }
        } else {
            if ($(window).scrollTop() > 45) {
                $('.navbar').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.navbar').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    }

    window.fixedNavbar = fixedNavbar;

})(jQuery);