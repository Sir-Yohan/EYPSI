(function ($) {
    "use strict";

    // Custom donation amount
    function customDonationAmount() {
        if ($('#btnradio4').is(':checked')) {
            $('#custom-amount-container').show();
        } else {
            $('#custom-amount-container').hide();
        }
    }

    window.customDonationAmount = customDonationAmount;

})(jQuery);