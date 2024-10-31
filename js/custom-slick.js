<<<<<<< HEAD
jQuery(document).ready(function () {


  var windowWidth = jQuery(window).width();
  //Show Slider //
  function introSlider() {
    var $tvslider = jQuery('.logo-slider-row');
    var tvslideCount = $tvslider.children().length;
    if (windowWidth >= 1024) {
      if (tvslideCount > 5) {
        $tvslider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
          dots: false,
          arrows: true,
          variableWidth: true,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 100,
          autoplay: true,
          autoplaySpeed: 1000,
          prevArrow: '<span class="slick-arrow prev-arrow fa-regular fa-angle-left flex flex-center" aria-label="Previous Arrow" role="button"></span>',
          nextArrow: '<span class="slick-arrow next-arrow fa-regular fa-angle-right flex flex-center" aria-label="Next Arrow" role="button"></span>',
        });
      }
    } else {
      $tvslider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        dots: false,
        arrows: true,
        variableWidth: true,
        draggable: true,
        swipeToSlide: true,
        touchThreshold: 100,
        autoplay: true,
        autoplaySpeed: 1000,
        prevArrow: '<span class="slick-arrow prev-arrow fa-regular fa-angle-left flex flex-center" aria-label="Previous Arrow" role="button"></span>',
        nextArrow: '<span class="slick-arrow next-arrow fa-regular fa-angle-right flex flex-center" aria-label="Next Arrow" role="button"></span>',
        responsive: [{
          breakpoint: 480,
          settings: {
            variableWidth: false
          }
        }]
      });
    }
  }
  introSlider();

  jQuery(window).on('resize load', function () {
    var newScreenWidth = jQuery(window).width();
    if (newScreenWidth !== windowWidth) {
      windowWidth = newScreenWidth;
      introSlider();

    }
  });

  /* Insights Slider */
  if (jQuery(window).width() <= 767) {
    jQuery(".recent-insights-main").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      swipeToSlide: true,
      infinite: false,
      speed: 1000,
      dots: true,
      arrows: false,
      variableWidth: true,
      touchThreshold: 50,
    });
  }

  /* hamiltion-stats-module Slider */
  if (jQuery(window).width() <= 767) {
    jQuery(".hamiltion-stats-bottom .stats-row").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      swipeToSlide: true,
      infinite: false,
      speed: 1000,
      dots: true,
      arrows: false,
    });
  }

  jQuery('.slider-for').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: false, // Ensure fade is enabled
    dots: false,
    asNavFor: '.slider-nav',
    infinite: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 100,
    speed: 1500,
  });

  var wcslider = jQuery('.slider-nav');
  wcslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    arrows: true,
    infinite: true,
    focusOnSelect: true,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 100,
    appendArrows: jQuery('.custom_arrows_wc'),
    prevArrow: '<div class="custom_arrow custom_arrow_dir_left" aria-label="Previous Arrow" role="button"></div>',
    nextArrow: '<div class="custom_arrow custom_arrow_dir_right" aria-label="Next Arrow" role="button"></div>',
    appendDots: jQuery('.custom_dots_wc'),
    customPaging: function (wcslider, i) {
      var thumb = jQuery(wcslider.$slides[i]).data();
      return '0' + (i + 1); // Add numbering for dots
    },
    dotsClass: 'custom_dots_list',
  });


});
=======
jQuery(document).ready(function($){
    // here $ is shorthand propery use inside block code
    
});
>>>>>>> 9f4988a64d4049c4106a263cdf4e28e08466c07c
