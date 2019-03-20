$(document).ready(function() {
    const stickyNavTop = $('.uthsc-nav-stuck').offset().top;

    const stickyNav = () => {
        const scrollTop = $(window).scrollTop();

        (scrollTop > stickyNavTop) ? $('.uthsc-nav-stuck').addClass('sticky') : $('.uthsc-nav-stuck').removeClass('sticky');
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });
});
/**
 * UTHSC section nav module.
 */
!function($) {
    //expanding menu
    var openTimer;
    var closeTimer;
    var endTimer;

    jQuery(".uthsc-navigation-column").bind('mouseover', openSubMenu);
    jQuery("#uthsc-section-navigation").bind('mouseleave', closeSubMenu);

    function expandMenu() {
        //$('#uthsc-section-navigation ul li ul').stop(true, true).slideDown(400);
        $('#uthsc-section-navigation').addClass('show-menu');
        $('#uthsc-section-navigation ul > li > ul').slideDown( "fast", function() {
            // Animation complete.
        });
    }

    function collapseMenu() {
        //$('#uthsc-section-navigation ul li ul').stop(true, true).slideUp(400);
        $('#uthsc-section-navigation ul > li > ul').slideUp( "fast", function() {
            $('#uthsc-section-navigation').removeClass('show-menu');
            $('#uthsc-section-navigation > ul > li > ul').css("display", "");
        });

    }

    function clearTimer() {
        clearTimeout(closeTimer);
        clearTimeout(openTimer);
    }

    function openSubMenu() {
        //$('#uthsc-section-navigation').addClass('uthsc-navigation-active');
        clearTimer();
        openTimer = setTimeout(expandMenu, 400);
    }

    function closeSubMenu() {
        //$('#uthsc-section-navigation').removeClass('uthsc-navigation-active');

        clearTimer();
        closeTimer = setTimeout(collapseMenu, 500);
    }

    $("#uthsc-section-navigation").on( 'keyup', function( e ) {
        openSubMenu();
    } );

}(jQuery);