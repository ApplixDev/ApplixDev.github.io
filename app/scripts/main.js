$(document).ready(function () {

    $('.pushpin-nav').pushpin({
        top: 58,
        bottom: 0
    });

    // Make announcement animate down and display none
    $('#close').click(function () {
        $('#announcement').fadeOut(100);
    });
    
    $('.button-collapse').sideNav({
        menuWidth: 240
    });

    // Go to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scrollup').fadeIn(100);
        } else {
            $('#scrollup').fadeOut(300);
        }
    });

    $('#scrollup').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

});