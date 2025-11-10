(function ($) {
    "use strict";

    // Testimonials carousel
    function testimonialsCarousel() {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            center: true,
            dots: false,
            loop: true,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                }
            }
        });
    }

    window.testimonialsCarousel = testimonialsCarousel;

})(jQuery);