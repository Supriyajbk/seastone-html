jQuery(document).ready(function () {

  /* Fixed Header */
  jQuery(window).on("scroll", function () {
    var scroll = jQuery(this).scrollTop();
    if (scroll >= 2) {
      jQuery(".main_header").addClass("fixed-header");
    } else {
      jQuery(".main_header").removeClass("fixed-header");
    }
  });


  /* Menu */
  if (jQuery(window).width() <= 1023) {
    jQuery(".toggle_button").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass("active");
      jQuery(".mobile_menu").toggleClass("navOpen");
      jQuery(".main_header").toggleClass("menu-open");
      jQuery("html").toggleClass("no-scroll")
    });


    jQuery("ul.main_menu > li").has("ul").addClass("menu-icon");
    jQuery("ul.main_menu > li").has("ul ul").addClass("menu-icon3");


    jQuery("ul.main_menu > li.menu-icon > a").on("click", function (event) {
      event.preventDefault();
      jQuery(this).toggleClass('toggle_icon');
      jQuery(this).siblings("ul.sub-menu").toggleClass("sub-menu-open");
      jQuery(this).parent().siblings("li").toggleClass('sib');
    });

    /*-- 3rd level --*/
    jQuery("ul.main_menu> li > ul > li.menu-item-has-children > a").on("click", function (event) {
      event.preventDefault();
      jQuery(this).parent().siblings("li").parent("ul.sub-menu").toggleClass("remove-margin");
      jQuery(this).parent().siblings("li").parent("ul.sub-menu").siblings("a.toggle_icon").toggleClass("hide-level-two");
      jQuery(this).toggleClass('toggle_icon3');
      jQuery(this).siblings("ul.sub-menu").toggleClass("sub-menu-open-two");
      jQuery(this).parent().siblings("li").toggleClass('sib2');
    });

    /*-- 4th level --*/
    jQuery("ul.main_menu> li > ul > li > ul > li.menu-item-has-children > a").on("click", function (event) {
      event.preventDefault();
      jQuery(this).parent().siblings("li").parent("ul.sub-menu").toggleClass("remove-margin");
      jQuery(this).parent().siblings("li").parent("ul.sub-menu").siblings("a.toggle_icon3").toggleClass("hide-level-three");
      jQuery(this).toggleClass('toggle_icon4');
      jQuery(this).siblings("ul.sub-menu").toggleClass("sub-menu-open-three");
      jQuery(this).parent().siblings("li").toggleClass('sib3');
    });

  }


  /* Accorrdion */
  jQuery(".accordion-item .accordion-heading").on("click", function (e) {
    e.preventDefault();
    if (jQuery(this).closest(".accordion-item").hasClass("active")) {
      jQuery(".accordion-item").removeClass("active");
    } else {
      jQuery(".accordion-item").removeClass("active");
      jQuery(this).closest(".accordion-item").addClass("active");
    }
    var jQuerycontent = jQuery(this).next();
    jQuerycontent.slideToggle(300);
    jQuery(".accordion-item .content").not(jQuerycontent).slideUp("slow");
  });

    
//jQuery(".dynamic-selector").each(function () {
//    const $prodSlide = jQuery(this);
//
//    jQuery(".ds-thumb:first-child").addClass("active");
//    jQuery(".ds-rt-inner:first-child").addClass("active").show(); 
//
//    $prodSlide.find(".ds-thumb").on("click", function (e) {
//        e.preventDefault();
//        
//        jQuery(this).addClass("active").siblings().removeClass("active");
//        let data = jQuery(this).data("name");
//        $prodSlide.find(".ds-rt-inner").hide();
//        const $targetContent = $prodSlide.find('.ds-rt-inner[data-image="' + data + '"]');
//        $targetContent.fadeIn(800);
//
//        if (jQuery(window).width() <= 1023) { 
//            jQuery('html, body').animate({
//                scrollTop: $targetContent.offset().top - 80
//            }, 800);
//        }
//    });
//});
    

jQuery(".dynamic-selector").each(function () {
    const $prodSlide = jQuery(this);

    jQuery(".ds-thumb:first-child").addClass("active");
    jQuery(".ds-rt-inner:first-child").addClass("active").show();

    $prodSlide.find(".ds-thumb").on("click", function (e) {
        e.preventDefault();

        const $this = jQuery(this);
        const data = $this.data("name");
        const $currentContent = $prodSlide.find(".ds-rt-inner:visible");
        const $targetContent = $prodSlide.find('.ds-rt-inner[data-image="' + data + '"]');
        const isWideScreen = window.innerWidth > 1023;

        if ($currentContent[0] !== $targetContent[0]) {
            $this.addClass("active").siblings().removeClass("active");

            const animateHeightAndFade = function () {
                jQuery(this).hide();
                
                $targetContent.css({ display: 'block', height: 'auto', opacity: 0 });
                const targetHeight = $targetContent.outerHeight();

                $targetContent.css({ height: 0 }).animate({ height: targetHeight }, 400, function () {
                    $targetContent.fadeTo(400, 1);
                });
            };

            if (isWideScreen) {
                $currentContent.fadeTo(400, 0, animateHeightAndFade);
            } else {
                $currentContent.fadeOut(400, animateHeightAndFade).promise().done(function () {
                    jQuery('html, body').animate({ scrollTop: $targetContent.offset().top - 80 }, 400);
                });
            }
        } else if (!isWideScreen) {
            jQuery('html, body').animate({ scrollTop: $targetContent.offset().top - 80 }, 400);
        }
    });
});


    
});
