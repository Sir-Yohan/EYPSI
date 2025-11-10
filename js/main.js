(function ($) {
    "use strict";

    // Document ready
    $(document).ready(function() {
        spinner();
        initWow();
        testimonialsCarousel();
        fixedNavbar(); // Call fixedNavbar on document ready
        backToTop(); // Call backToTop on document ready
    });

    // Window scroll
    $(window).scroll(function () {
        fixedNavbar();
        backToTop();
    });

    // Causes progress
    $('.causes-progress').waypoint(function () {
        causesProgress();
    }, {offset: '80%'});

    // Custom donation amount
    $('input[name="btnradio"]').change(function(){
        customDonationAmount();
    });

    // Causes modal
    $('.causes-item .btn-outline-primary').click(causesModal);

    // About modal
    $('.about-read-more').click(causesModal);
 
})(jQuery);