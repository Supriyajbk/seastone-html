jQuery(document).ready(function () {

  /* Insights Slider */
  if (jQuery(window).width() <= 767) {
    jQuery(".more-insights-main, .insights-bottom-rt, .blog-bottom-rt").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      swipeToSlide: true,
      infinite: false,
      speed: 1000,
      dots: false,
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

//  jQuery('.slider-for').slick({
//    slidesToShow: 3,
//    slidesToScroll: 1,
//    arrows: false,
//    fade: false, // Ensure fade is enabled
//    dots: false,
//    asNavFor: '.slider-nav',
//    infinite: true,
//    draggable: true,
//    swipeToSlide: true,
//    touchThreshold: 100,
//    speed: 1500,
//  });
//
//  var wcslider = jQuery('.slider-nav');
//  wcslider.slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    asNavFor: '.slider-for',
//    dots: true,
//    arrows: true,
//    infinite: true,
//    focusOnSelect: true,
//    draggable: true,
//    swipeToSlide: true,
//    touchThreshold: 100,
//    appendArrows: jQuery('.custom_arrows_wc'),
//    prevArrow: '<span class="custom_arrow custom_arrow_dir_left" aria-label="Previous Arrow" role="button"><i class="fa-regular fa-chevron-left"></i></span>',
//    nextArrow: '<span class="custom_arrow custom_arrow_dir_right" aria-label="Next Arrow" role="button"><i class="fa-regular fa-chevron-right"></i></span>',
//    appendDots: jQuery('.custom_dots_wc'),
//    customPaging: function (wcslider, i) {
//      var thumb = jQuery(wcslider.$slides[i]).data();
//      return '0' + (i + 1); // Add numbering for dots
//    },
//    dotsClass: 'custom_dots_list',
//  });


  /* our clients slider */

  jQuery(".our-clients-row").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-arrow slick-prev flex flex-center radius-50" aria-label="Previous Arrow" role="button"><span><i class="fa-regular fa-chevron-left"></i></span></div>',
    nextArrow: '<div class="slick-arrow slick-next flex flex-center radius-50" aria-label="Next Arrow" role="button"><span><i class="fa-regular fa-chevron-right"></i></span></div>',
    dots: false,
    speed: 1000,
    infinite: false,
    autoplay: false,

    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true
      }
    }, ]
  });


});
