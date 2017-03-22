$("#promo a[href^='#offre_promo']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 500, function() {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});

$("#decouvrir a[href^='#je_decouvre']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 500, function() {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
};

$(document).ready(function() {
    $(".bouton-etapes").click(function() {
        $('#number1').fadeIn(1000);
        $('#number2').fadeIn(1500);
        $('#number3').fadeIn(2000);
        $('#number4').fadeIn(2500);
    });
});


$(document).ready(function() {
    $(".testimonial-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [550, 1],
        pagination: true,
        autoPlay: true
    });

    $(".partenaires-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [550, 1],
        pagination: true,
        autoPlay: true
    });

});

$(function() {
  $('#slides').slidesjs({
    width: 700,
    height: 400,
    navigation: false
  });
});
