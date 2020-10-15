
$(document).ready(function () {
    let block1 =$('#block1').offset().top;
    let block2 =$('#block2').offset().top;
    let block3 =$('#block3').offset().top;
    let block7 =$('#block7').offset().top;

    let b1enabled = false
    let b2cards = $('.b2card')
    let b2enabled = false
    let b3enabled = false
    let b7enabled = false
    let b7secNews = $('.sec-news')
    let scroll = function() {
        // проверка на докрутку до определенного элемента
        //если мы докрутили до нужного элемента
        if ($(this).scrollTop() + window.innerHeight/2 > block1 && !b1enabled) {
            // создаем эффекты и анимацию
            $('#phone1').removeClass('disabled')
            setTimeout(() => $('#phone2').removeClass('disabled'), 300)
            setTimeout(() => $('#phone3').removeClass('disabled'), 600)
            b1enabled = true
        }
        if ($(this).scrollTop() + window.innerHeight/2 > block2 && !b2enabled) {
            // создаем эффекты и анимацию
            $(b2cards[0]).removeClass('disabled')
            setTimeout(() => $(b2cards[1]).removeClass('disabled'), 300)
            setTimeout(() => $(b2cards[2]).removeClass('disabled'), 600)
            b2enabled = true
        }
        if ($(this).scrollTop() + window.innerHeight/2 > block3 && !b3enabled) {
            // создаем эффекты и анимацию
            $('#rec1').removeClass('disabled')
            setTimeout(() => $('#pic1-1').removeClass('disabled'), 300)
            setTimeout(() => $('#pic1-2').removeClass('disabled'), 600)
            setTimeout(() => $('#rec2').removeClass('disabled'), 900)
            setTimeout(() => $('#pic2-2').removeClass('disabled'), 1200)
            setTimeout(() => $('#pic2-1').removeClass('disabled'), 1500)
            b3enabled = true
        }
        if ($(this).scrollTop() + window.innerHeight/2 > block7 && !b7enabled) {
            // создаем эффекты и анимацию
            $('#main-news').removeClass('disabled')
            setTimeout(() => $(b7secNews[0]).removeClass('disabled'), 300)
            setTimeout(() => $(b7secNews[1]).removeClass('disabled'), 600)
            setTimeout(() => $(b7secNews[2]).removeClass('disabled'), 900)
            b7enabled = true
        }
    }
    scroll();
    $(window).scroll(scroll);
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
