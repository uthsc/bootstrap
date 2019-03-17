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