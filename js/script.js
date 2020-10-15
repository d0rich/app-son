$(document).ready(function () {
    //Header
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
    $("#to2ndBlock").click(function () {
        $('html').animate({ scrollTop: $('#block2').offset().top }, 500);
        return false;
    });
    //Block5
    $("#setMonthlyPrice").click(function () {
        $(this).addClass('active')
        $('#setYearlyPrice').removeClass('active')
        $('#standardPrice').html('<span style="font-size: medium">$</span>19.00')
        $('#premiumPrice').html('<span style="font-size: medium">$</span>49.00')
        return false;
    });
    $("#setYearlyPrice").click(function () {
        $(this).addClass('active')
        $('#setMonthlyPrice').removeClass('active')
        $('#standardPrice').html('<span style="font-size: medium">$</span>190.00')
        $('#premiumPrice').html('<span style="font-size: medium">$</span>490.00')
        return false;
    });
    //Block6
    let dashes = $(".dash");
    let tweets = $('.tweet')
    $(dashes[0]).click(function () {
        $('#b6textblock').removeClass('active2').removeClass('active3').addClass('active1')
        return false;
    });
    $(dashes[1]).click(function () {
        $('#b6textblock').removeClass('active1').removeClass('active3').addClass('active2')
        return false;
    });
    $(dashes[2]).click(function () {
        $('#b6textblock').removeClass('active2').removeClass('active1').addClass('active3')
        return false;
    });
    $(tweets[0]).click(function () {
        $('#b6textblock').removeClass('active2').removeClass('active3').addClass('active1')
        return false;
    });
    $(tweets[1]).click(function () {
        $('#b6textblock').removeClass('active1').removeClass('active3').addClass('active2')
        return false;
    });
    $(tweets[2]).click(function () {
        $('#b6textblock').removeClass('active2').removeClass('active1').addClass('active3')
        return false;
    });
    //Footer
    $("#scrollToTopBtn").click(function () {
        $('html').animate({ scrollTop: $('body').offset().top }, 1100);
        return false;
    });
});
