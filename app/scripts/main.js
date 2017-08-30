$(document).ready(function () {
    
    $(window).on('load', function () {
        if (window.location.hash == '#app') {
            $('.navbar-fixed, .page-footer').hide();
        }
    });

    $('.pushpin-nav').pushpin({
        top: 48
    });

    $('.button-collapse').sideNav({ 
        menuWidth: 240 
    });

    // Go to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scrollup').fadeIn(100);
        } else {
            $('#scrollup').fadeOut(300);
        }
    });
    
    $('#scrollup').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    // $(window).resize(function () {
    //     $('.card-empty').each(function () {
    //         var parent = $(this).parent('.col');
    //         var prev = parent.prev('.col');
    //         var height = false;

    //         if (prev.length < 1) {
    //             prev = parent.next('.col');

    //             if (prev.length < 1) {
    //                 height = $(parent).width();
    //             }
    //         }

    //         if (!height) {
    //             height = prev.height();
    //         }

    //         $(this).height (height);
    //     });
    // });
});