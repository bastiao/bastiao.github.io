(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 56)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 56
    });

    var typed = new Typed('.typehashtags', {
        strings: ['archicture', 'software', 'cloud native', 'DICOM',
            'PACS', 'docker', 'innovation', 'kubernetes', 'scalability', 'think different',
            'resiliency',
            'management', 'programming'
        ],
        smartBackspace: true, // Default value,
        loop: true,
        backSpeed: 70,
        typeSpeed: 70,
        backDelay: 400,
        startDelay: 0
    });



})(jQuery); // End of use strict


// Arrow on home page
$(window).scroll(function() {
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //250 is fade pixels
});