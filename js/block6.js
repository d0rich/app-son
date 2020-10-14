$(document).ready(function () {
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
});
