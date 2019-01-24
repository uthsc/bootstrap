$(document).foundation();
Foundation.Keyboard.register('DropdownMenu',{
//  'ENTER': 'open',
    'SPACE': 'open',
    'ARROW_RIGHT': 'next',
    'ARROW_UP': 'up',
    'ARROW_DOWN': 'down',
    'ARROW_LEFT': 'previous',
    'ESCAPE': 'close'
});
// $(document).ready(function(){
// 	$("a[rel^='prettyPhoto']").prettyPhoto();
// });
(function(window) {

    'use strict';

    /**
     * Extend Object helper function.
     */
    function extend(a, b) {
        for(var key in b) {
            if(b.hasOwnProperty(key)) {
                a[key] = b[key];
            }
        }
        return a;
    }

    /**
     * Each helper function.
     */
    function each(collection, callback) {
        for (var i = 0; i < collection.length; i++) {
            var item = collection[i];
            callback(item);
        }
    }

    /**
     * Menu Constructor.
     */
    function Menu(options) {
        this.options = extend({}, this.options);
        extend(this.options, options);
        this._init();
    }

    /**
     * Menu Options.
     */
    Menu.prototype.options = {
        wrapper: '#uthsc-off-canvas-wrapper', // The content wrapper
        type: 'slide-left',                   // The menu type
        menuOpenerClass: '.uthsc-off-canvas-button',         // The menu opener class names (i.e. the buttons)
        maskId: '#uthsc-off-canvas-mask'                     // The ID of the mask
    };

    /**
     * Initialise Menu.
     */
    Menu.prototype._init = function() {
        this.body = document.body;
        this.wrapper = document.querySelector(this.options.wrapper);
        this.mask = document.querySelector(this.options.maskId);
        this.menu = document.querySelector('#uthsc-off-canvas-menu--' + this.options.type);
        this.closeBtn = this.menu.querySelector('.uthsc-off-canvas-menu__close');
        this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
        this._initEvents();
    };

    /**
     * Initialise Menu Events.
     */
    Menu.prototype._initEvents = function() {
        // Event for clicks on the close button inside the menu.
        this.closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            this.close();
        }.bind(this));

        // Event for clicks on the mask.
        this.mask.addEventListener('click', function(e) {
            e.preventDefault();
            this.close();
        }.bind(this));
    };

    /**
     * Open Menu.
     */
    Menu.prototype.open = function() {
        this.body.classList.add('has-active-menu');
        this.wrapper.classList.add('has-' + this.options.type);
        this.menu.classList.add('is-active');
        this.mask.classList.add('is-active');
        this.disableMenuOpeners();
    };

    /**
     * Close Menu.
     */
    Menu.prototype.close = function() {
        this.body.classList.remove('has-active-menu');
        this.wrapper.classList.remove('has-' + this.options.type);
        this.menu.classList.remove('is-active');
        this.mask.classList.remove('is-active');
        this.enableMenuOpeners();
    };

    /**
     * Disable Menu Openers.
     */
    Menu.prototype.disableMenuOpeners = function() {
        each(this.menuOpeners, function(item) {
            item.disabled = true;
        });
    };

    /**
     * Enable Menu Openers.
     */
    Menu.prototype.enableMenuOpeners = function() {
        each(this.menuOpeners, function(item) {
            item.disabled = false;
        });
    };

    /**
     * Add to global namespace.
     */
    window.Menu = Menu;

})(window);

//Template specific js
/**
 * Slide left instantiation and action.
 */
var slideLeft = new Menu({
    wrapper: '#uthsc-off-canvas-wrapper',
    type: 'slide-left',
    menuOpenerClass: '.uthsc-off-canvas-button',
    maskId: '#uthsc-off-canvas-mask'
});

var slideLeftBtn = document.querySelector('#uthsc-off-canvas-button--slide-left');

slideLeftBtn.addEventListener('click', function(e) {
    e.preventDefault;
    slideLeft.open();
});

/**
 * Slide right instantiation and action.
 */
var slideRight = new Menu({
    wrapper: '#uthsc-off-canvas-wrapper',
    type: 'slide-right',
    menuOpenerClass: '.uthsc-off-canvas-button',
    maskId: '#uthsc-off-canvas-mask'
});

var slideRightBtn = document.querySelector('#uthsc-off-canvas-button--slide-right');

slideRightBtn.addEventListener('click', function(e) {
    e.preventDefault;
    slideRight.open();
});
//add active class to safari-bottom-nav-fix div on safari on ipads and ipods
$(document).ready(function () {

    var isIpadOrIpod = function() {
        if( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) ) {
            return true;
        }
    };

    var isSafari = function() {
        if (navigator.userAgent.match('Safari')) {
            if (navigator.userAgent.match('CriOS')) {
                return false;
            } else {
                return true;
            }
        }
    };

    if ( isIpadOrIpod() && isSafari() ) {
        $('.safari-bottom-nav-fix').each(function(i, item){
            $(item).addClass('safari-bottom-nav-fix--active');
        });
    }
});
/**
 * UTHSC section nav module.
 */
!function($) {

    // sticky navigation - makes section navigation 'stick'
    // to the top of the screen on desktop
    // allows foundation's sticky class to be used elsewhere.
    $(document).ready(function() {

			var sectionNav = $('#uthsc-section-navigation');

			if (sectionNav.length) {
				var stickyNavTop = sectionNav.offset().top;

				function stickyNav() {
					var scrollTop = $(window).scrollTop();

					if (scrollTop > stickyNavTop) {
						sectionNav.addClass('uthsc-sticky');
					} else {
						sectionNav.removeClass('uthsc-sticky');
					}
				}

				stickyNav();

				$(window).scroll(function() {
					stickyNav();
				});
			}
    });

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
var loc = window.location.pathname;
if (loc[loc.length - 1] == '/') {
    loc += "index.php";
}
var $anchor = $('a[href="' + loc + '"]');
$anchor.closest('li').addClass('uthsc-nav-on');
$anchor.removeClass('link-heading');

$(document).ready(function(){
	$('a:has(img)').addClass('uthsc-image-link');
});