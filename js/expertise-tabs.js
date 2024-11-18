(function () {
  let $jq = jQuery.noConflict();

  let $links = $jq("ul.expertise-links > li > a");
  $jq("ul.expertise-links > li:first > a").addClass("active");

  let $slidernav = $jq("ul.expertise-links");
  let $sliderfor = $jq(".expertise-rows");

  let $desktop = function () {
    return $jq(window).width() >= 768;
  };

  function initializeSlick() {
    if (!$desktop() && !$slidernav.hasClass("slick-initialized")) {
      $slidernav.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        prevArrow:
          '<div class="slick-arrow slick-prev flex flex-center radius-50" aria-label="Previous Arrow" role="button"><span><i class="fa-regular fa-chevron-left"></i></span></div>',
        nextArrow:
          '<div class="slick-arrow slick-next flex flex-center radius-50" aria-label="Next Arrow" role="button"><span><i class="fa-regular fa-chevron-right"></i></span></div>',
        dots: false,
        asNavFor: $sliderfor,
      });

      $sliderfor.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: $slidernav,
        fade: true,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        adaptiveHeight: true,
      });

      $links.off("click").on("click", function (e) {
        e.preventDefault();
        let slideno = parseInt($jq(this).data("name"), 10);
        if (!isNaN(slideno) && $sliderfor.hasClass("slick-initialized")) {
          $sliderfor.slick("slickGoTo", slideno - 1);
        }
      });
    }
  }

  function destroySlick() {
    if ($desktop()) {
      if ($slidernav.hasClass("slick-initialized")) {
        $slidernav.slick("unslick");
      }
      if ($sliderfor.hasClass("slick-initialized")) {
        $sliderfor.slick("unslick");
      }
    }
  }

  function handleResize() {
    if ($desktop()) {
      destroySlick();
      $links.off("click").on("click", function (e) {
        e.preventDefault();
        $jq(this).parent().siblings("li").find("a").removeClass("active");
        $jq(this).addClass("active");
        let attr = $jq(this).attr("data-name");
        $jq(".expertise-row").fadeOut(100);
        $jq(".expertise-row[data-value=" + attr + "]").fadeIn(800);
      });
    } else {
      initializeSlick();
    }
  }

  handleResize();

  $jq(window).on("load resize", handleResize);
})();
