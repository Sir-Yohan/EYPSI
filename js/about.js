(function ($) {
    "use strict";

    // about modal
    function aboutModal(e) {
        e.preventDefault();
        var title = '';
        var text = '';

        $('#aboutModalLabel').text(title);
        $('#aboutModalText').text(text);
        
        var aboutModal = new bootstrap.Modal(document.getElementById('aboutModal'));
        aboutModal.show();
    }

    // Listen for modal hidden event to ensure body scroll is restored
    $('#aboutModal').on('hidden.bs.modal', function () {
        $('body').removeClass('modal-open');
        $('body').css('overflow', ''); // Reset overflow to default
        $('body').css('padding-right', ''); // Also reset padding-right
    });

    window.aboutProgress = aboutProgress;
    window.aboutModal = aboutModal;

})(jQuery);