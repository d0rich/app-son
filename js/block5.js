$(document).ready(function () {
    $("#setMonthlyPrice").click(function () {
        $(this).addClass('active')
        $('#setYearlyPrice').removeClass('active')
        $('#standardPrice').html('<font style="font-size: medium">$</font>19.00')
        $('#premiumPrice').html('<font style="font-size: medium">$</font>49.00')
        return false;
    });
    $("#setYearlyPrice").click(function () {
        $(this).addClass('active')
        $('#setMonthlyPrice').removeClass('active')
        $('#standardPrice').html('<font style="font-size: medium">$</font>190.00')
        $('#premiumPrice').html('<font style="font-size: medium">$</font>490.00')
        return false;
    });
});
