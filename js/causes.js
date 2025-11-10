(function ($) {
    "use strict";

    // Causes progress
    function causesProgress() {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }

    // Causes modal
    function causesModal(e) {
        e.preventDefault();
        var title = '';
        var text = '';

        if ($(this).hasClass('about-read-more')) {
            // If the "About" button is clicked
            title = $('#about h1.mb-4').text();
            text = $('#about p.mb-4').text();
        } else {
            // If a "Causes" button is clicked
            var cause = $(this).closest('.causes-item');
            title = cause.find('h5').text();
            text = cause.find('p').text();
        }
        
        $('#causesModalLabel').text(title);
        $('#causesModalText').text(text);
        
        var causesModal = new bootstrap.Modal(document.getElementById('causesModal'));
        causesModal.show();
    }

    // Listen for modal hidden event to ensure body scroll is restored
    $('#causesModal').on('hidden.bs.modal', function () {
        $('body').removeClass('modal-open');
        $('body').css('overflow', ''); // Reset overflow to default
        $('body').css('padding-right', ''); // Also reset padding-right
    });

    window.causesProgress = causesProgress;
    window.causesModal = causesModal;

})(jQuery);