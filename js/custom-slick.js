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
    touchThreshold: 50,
    draggable: true,
    swipeToSlide: true,
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: true
      }
    }, ]
  });

  if (jQuery(window).width() <= 767) {
    jQuery(".our-expertise-main").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: '<div class="slick-arrow slick-prev flex flex-center radius-50" aria-label="Previous Arrow" role="button"><span><i class="fa-regular fa-chevron-left"></i></span></div>',
      nextArrow: '<div class="slick-arrow slick-next flex flex-center radius-50" aria-label="Next Arrow" role="button"><span><i class="fa-regular fa-chevron-right"></i></span></div>',
      dots: true,
      speed: 1000,
      infinite: false,
      autoplay: false,
      draggable: true,
      swipeToSlide: true,
      touchThreshold: 50,
      variableWidth: true,
      centerMode: true,
      centerPadding: '22px'
    });
  }

//  jQuery(".services-slider").slick({
//    slidesToShow: 1,
//    slidesToScroll: 4,
//    arrows: true,
//    prevArrow: '<div class="slick-arrow slick-prev flex flex-center radius-50" aria-label="Previous Arrow" role="button"><span><i class="fa-regular fa-chevron-left"></i></span></div>',
//    nextArrow: '<div class="slick-arrow slick-next flex flex-center radius-50" aria-label="Next Arrow" role="button"><span><i class="fa-regular fa-chevron-right"></i></span></div>',
//    dots: false,
//    speed: 1000,
//    infinite: false,
//    autoplay: false,
//    draggable: true,
//    swipeToSlide: false,
//    touchThreshold: 50,
//    variableWidth: true,
//  });


  var eventslider = jQuery('.services-slider');
  eventslider.slick({
    touchMove: true,
    slidesToShow: 1,
    slidesToScroll: 4,
    arrows: true,
    dots: false,
    speed: 1000,
    infinite: false,
    autoplay: false,
    draggable: true,
    swipeToSlide: false,
    touchThreshold: 50,
    variableWidth: true,
    appendArrows: jQuery('.custom_arrows_wc'),
    prevArrow: '<div class="custom_arrow slick-prev flex flex-center radius-50" aria-label="Previous Arrow" role="button"><span><i class="fa-regular fa-chevron-left"></i></span></div>',
    nextArrow: '<div class="custom_arrow slick-next flex flex-center radius-50" aria-label="Next Arrow" role="button"><span><i class="fa-regular fa-chevron-right"></i></span></div>',
  });


  function slideGo(dir) {
    var eventslider = jQuery('.services-slider');
    if (dir === "+") {
      eventslider.slick('slickNext');
    } else if (dir === "-") {
      eventslider.slick('slickPrev');
    }
  }

});
