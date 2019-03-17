$(document).ready(function() {
    const stickyNavTop = $('.uthsc-nav-stuck').offset().top;

    const stickyNav = () => {
        const scrollTop = $(window).scrollTop();

        const makeItSticky = $('.uthsc-nav-stuck').addClass('sticky')
        const removeSticky = $('.uthsc-nav-stuck').removeClass('sticky')

        (scrollTop > stickyNavTop) ? makeItSticky : removeSticky;
    };

    stickyNav();
    
    $(window).scroll(function() {
        stickyNav();
    });
});
