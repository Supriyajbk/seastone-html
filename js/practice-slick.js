jQuery(document).ready(function () {

   
    var windowWidth = jQuery(window).width();
    //Show Slider //
    function featureIntroSlider() {
      var $featuredSlider = jQuery('.features-main');
      var featureSlideCount = $featuredSlider.children().length;
      if (windowWidth >= 1024) {
        if (featureSlideCount > 4) {
          $featuredSlider.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            speed: 1000,
            dots: false,
            arrows: true,
            // variableWidth: true,
            draggable: true,
            swipeToSlide: true,
            touchThreshold: 100,
            autoplay: false,
            autoplaySpeed: 2000,
            prevArrow: '<span class="slick-arrow prev-arrow fa-regular fa-angle-left flex flex-center" aria-label="Previous Arrow" role="button"></span>',
          nextArrow: '<span class="slick-arrow next-arrow fa-regular fa-angle-right flex flex-center" aria-label="Next Arrow" role="button"></span>',
          });
        }
      } else {
        $featuredSlider.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          speed: 1000,
          dots: true,
          arrows: false,
          variableWidth: true,
          draggable: true,
          swipeToSlide: true,
          touchThreshold: 100,
          autoplay: false,
          autoplaySpeed: 2000,
          // centerMode: false,
          prevArrow: '<span class="slick-arrow prev-arrow fa-regular fa-angle-left flex flex-center" aria-label="Previous Arrow" role="button"></span>',
          nextArrow: '<span class="slick-arrow next-arrow fa-regular fa-angle-right flex flex-center" aria-label="Next Arrow" role="button"></span>',
         
        });
      }
    }
    featureIntroSlider();
  
    jQuery(window).on('resize load', function () {
      var newScreenWidth = jQuery(window).width();
      if (newScreenWidth !== windowWidth) {
        windowWidth = newScreenWidth;
        featureIntroSlider();
  
      }
    });


const $blockSlider = jQuery('.client-block-slider');
    $blockSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 1000,
      dots: true,
      arrows: false,
      // variableWidth: true,
      draggable: true,
      swipeToSlide: true,
      touchThreshold: 100,
      autoplay: false,
      autoplaySpeed: 1000,
    });


});