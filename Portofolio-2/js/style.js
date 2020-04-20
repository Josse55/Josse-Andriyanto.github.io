$(document).ready(function() {
    // scrolling navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('header').css({ "background-color": "unset", "box-shadow": "unset", "border-bottom": "none" });
        }
        if ($(this).scrollTop() > 100) {
            $('header').css({ "height": "60px", "background-color": "#12222d", "border-bottom": "1px solid #000000dc" });
        }
    });

    // button open and close
    $('.nav-link-button').on('click', function() {
        $(this).css({ "display": "none" });
        $('.nav-link-close').css({ "display": "block" });
        $('.nav-link').slideDown(300);
    });
    $('.nav-link-close').on('click', function() {
        $(this).css({ "display": "none" });
        $('.nav-link-button').css({ "display": "block" });
        $('.nav-link').slideUp(300);
    });

    // typed
    var typed = new Typed('#type', {
        strings: ["Comfort", "Happiness", "Pleasure"],
        backSpeed: 100,
        typeSpeed: 80,
        loop: true,
        showCursor: false
    });

    // scroll animation
    AOS.init({
        duration: 1500
    });
});