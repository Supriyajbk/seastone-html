jQuery(document).ready(function () {
  
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


/* our clients slider */

         jQuery(".our-clients-row").slick({
           slidesToShow: 1,
           slidesToScroll: 1,
           arrows: true,
           prevArrow: '<div class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
           nextArrow: '<div class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
           dots: false,
           speed: 1000,
           infinite: false,
           autoplay: false,
    
           responsive: [
            {
              breakpoint: 767,
              settings: {
                dots: true
              }
            },
          ]
         });
   
    


});
