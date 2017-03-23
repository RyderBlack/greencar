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

$('.carousel').carousel();

$(document).ready(function() {
    /*  $(".testimonial-slider").owlCarousel({
          items: 3,
          itemsDesktop: [1000, 2],
          itemsDesktopSmall: [979, 2],
          itemsTablet: [550, 1],
          pagination: true,
          autoPlay: true
      }); */

    $(".entreprises-annonceurs-slider").owlCarousel({
        items: 5,
        itemsDesktop: [1000, 4],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [550, 2],
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

/*
$('a.thumbnails').each(function(){
    $(this).click(function(){
        var src = $(this).attr('href');
        if (src != $('img#largeImg').attr('src').replace(/\?(.*)/,'')) {
            $('img#largeImg').stop().animate({opacity:'0'},function(){
                    $(this).attr('src',src+'?'+Math.floor(Math.random()*(10*100)));
            }).load(function(){
                    $(this).stop().animate({opacity:'1'});
            });
        }
        return false;
    });
});
*/

function cycleImages() {
    var $active = $('.bg-intro .active0');
    var $next = ($active.next().length > 0) ? $active.next() : $('.bg-intro .bg-images:first');
    $next.css('z-index', 2); //move the next image up the pile
    $active.fadeOut(2500, function() { //fade out the top image
        $active.css('z-index', 1).show().removeClass('active0'); //reset the z-index and unhide the image
        $next.css('z-index', 3).addClass('active0'); //make the next image the top one
    });
};

$(document).ready(function() {
    // run every 7s
    setInterval('cycleImages()', 7000);
});


jQuery(document).ready(function($) {

      $('#myCarousel').carousel({
              interval: 5000
      });

      //Handles the carousel thumbnails
      $('[id^=carousel-selector-]').click(function () {
      var id_selector = $(this).attr("id");
      try {
          var id = /-(\d+)$/.exec(id_selector)[1];
          console.log(id_selector, id);
          jQuery('#myCarousel').carousel(parseInt(id));
      } catch (e) {
          console.log('Regex failed!', e);
      }
  });
      // When the carousel slides, auto update the text
      $('#myCarousel').on('slid.bs.carousel', function (e) {
               var id = $('.item.active').data('slide-number');
              $('#carousel-text').html($('#slide-content-'+id).html());
      });
});
