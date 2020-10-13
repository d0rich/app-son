$(document).ready(function () {
    $(".header-button").click(function () {
        let elementClick = $(this).attr("scrollto");
        let destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination }, 1100);
        return false;
    });
});
