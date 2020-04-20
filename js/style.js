$(document).ready(function() {
    // scrolling navbar
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('header').css({ "background-color": "unset", "box-shadow": "unset" });
        }
        if ($(this).scrollTop() > 100) {
            $('header').css({ "height": "60px", "background-color": "#7cd9ea" });
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
        strings: ["From Indonesia", "Freelancer", "Front End Web Development", "UI/UX Designer"],
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