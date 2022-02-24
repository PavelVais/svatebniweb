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


    $("#rsvp-form").submit(function () {
        $.post($(this).attr("action"), $(this).serializeObject(), function (data) {
            $("#rsvp-form").slideUp();
            $("#rsvp-form-message").slideDown();
        }, "json")
            .catch(function () {
                $("#rsvp-form").slideUp();
                $("#rsvp-form-message").slideDown();
            });
        return false;
    })
})

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};