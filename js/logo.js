document.addEventListener('DOMContentLoaded', function() {
    var logoLinks = document.querySelectorAll('.logo_links');

    logoLinks.forEach(function(logo) {
        logo.addEventListener('click', function() {
            window.open(logo.parentElement.href, '_blank');
        });
    });
});