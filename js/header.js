$(document).ready(function () {
    $(".header-button").click(function () {
        let elementClick = $(this).attr("scrollto");
        let destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination }, 1100);
        return false;
    });
    $("#nav-button").click(() => {
        let buttons = $('#header-buttons')
        if (!buttons.hasClass('active'))
            buttons.addClass('active')
        else buttons.removeClass('active')
    })
});
