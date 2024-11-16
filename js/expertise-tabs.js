(function(){
    let $jq = jQuery.noConflict();

    let $links = $jq("ul.expertise-links > li > a");
    $jq("ul.expertise-links > li:first > a").addClass("active");
    
    let $slidernav = $jq("ul.expertise-links");
    let $sliderfor = $jq(".expertise-rows");

    let $desktop = function() {
        return $jq(window).width() >= 768; // if you want desktop design for ipad change 1024 to 768
    }

    function initializeSlick() {
        if (!$desktop()) {
            $slidernav.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                dots: false,
                asNavFor: $sliderfor,
            });
            $sliderfor.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: $slidernav,
                fade: true,
                dots: false,
                arrows: false,
                focusOnSelect: true
            });

            $links.click(function(e) {
                e.preventDefault();
                let slideno = $jq(this).data('name');
                $sliderfor.slick('slickGoTo', slideno - 1);
            });
        }
    }

    function destroySlick() {
        if ($desktop()) {
            if ($slidernav.hasClass('slick-initialized')) {
                $slidernav.slick('unslick');
            }
            if ($sliderfor.hasClass('slick-initialized')) {
                $sliderfor.slick('unslick');
            }
        }
    }

    function handleResize() {
        if ($desktop()) {
            $links.on("click", function(e) {
                e.preventDefault();
                $jq(this).parent().siblings('li').find("a").removeClass("active");
                $jq(this).addClass("active");
                let attr = $jq(this).attr("data-name");
                $jq(".expertise-row").fadeOut(100);
                $jq(".expertise-row[data-value=" + attr + "]").fadeIn(800);
            });
            destroySlick();
        } else {
            initializeSlick();
        }
    }

    handleResize();

    $jq(window).load(handleResize);
    $jq(window).resize(handleResize);
})();
