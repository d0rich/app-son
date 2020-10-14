$(document).ready(function () {
    $("#scrollToTopBtn").click(function () {
        $('html').animate({ scrollTop: $('body').offset().top }, 1100);
        return false;
    });
});
