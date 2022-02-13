$(document).ready(function () {
    // your code
    var window = $(window);

    var isMobile = window.innerWidth < 768;
    var $header = $('.container-fluid');
    var lastScrollTop = 0;
    console.log($header, isMobile);

    document.addEventListener('scroll', function (event) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop < 100) {
            $header.removeClass('fixed')
        } else {
            $header.addClass('fixed')
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }, true)


})