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
      jQuery("html").toggleClass("no-scroll");
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


  /* Form */
  jQuery('.frm_form_field input, .frm_form_field textarea').on('input', function () {
    var inputLength = jQuery(this).val().length;
    if (inputLength > 0) {
      jQuery(this).addClass('input-has-value');
    } else {
      jQuery(this).removeClass('input-has-value');
    }
  });

  jQuery('.frm_form_field input, .frm_form_field textarea').on('blur', function () {
    var inputValue = jQuery(this).val();
    if (parseFloat(inputValue) > 0 && inputValue.trim() !== '') {
      jQuery(this).addClass('highlight');
    } else {
      jQuery(this).removeClass('highlight');
    }
  });

  jQuery(".frm_forms .frm_form_fields input, .frm_forms .frm_form_fields textarea").on('focus', function () {
    jQuery(this).siblings(".frm_form_field").addClass("input-has-value");
    jQuery(this).parent(".frm_form_field ").removeClass("frm_blank_field");
    jQuery(this).siblings("label.frm_primary_label").addClass("label-top");

    jQuery(this).siblings(".frm_error").hide();
  }).on('blur', function () {
    if (!jQuery(this).val()) {
      jQuery(this).siblings(".frm_form_field").removeClass("input-has-value");
      jQuery(this).siblings(".frm_error").show();
      jQuery(this).parent(".frm_form_field ").addClass("frm_blank_field");
      jQuery(this).siblings("label.frm_primary_label").removeClass("label-top");

    } else {
      jQuery(this).siblings(".frm_form_field").addClass("input-has-value");
      jQuery(this).parent(".frm_form_field ").removeClass("frm_blank_field");
      jQuery(this).siblings("label.frm_primary_label").addClass("label-top");

      jQuery(this).siblings(".frm_error").hide();
    }
  });

  jQuery(document).on('change', '.frm_forms .frm_form_fields select', function () {
    jQuery(this).siblings("label.frm_primary_label").addClass("input-has-value");
  });
  jQuery(document).on('change', '.frm_forms .frm_form_fields select', function () {
    var selval = jQuery(this).val();
    if (selval == '') {
      jQuery(this).siblings("label.frm_primary_label").removeClass("input-has-value");
    } else {
      jQuery(this).siblings("label.frm_primary_label").addClass("input-has-value");
    }
  });

  function checkForInput(element) {
    const $label = jQuery(element).siblings('div.frm_error');
    if (jQuery(element).val().length > 0) {
      $label.addClass('input-has-value');
    } else {
      $label.removeClass('input-has-value');
    }
  }


  if (jQuery(window).width() >= 1024) {
    jQuery('.more-inights-cnt .more-link, .more-inights-cnt .h5').hover(function () {
      jQuery(this).closest('.more-insights-grid').toggleClass('toggled');
    });
  }

  if (jQuery(window).width() >= 1024) {
    jQuery('.heading-rt .readmore').hover(function () {
      jQuery(this).closest('.heading-rt').siblings().toggleClass('minusleft');
    });
  } 
});

jQuery(function() {
  function setupSticky() {
    let isDesktop = jQuery(window).width() >= 1024;
    let $aside = jQuery('.bio-aside-wrap');
    let $footer = jQuery('#main_footer');
    let $header = jQuery('.main_header');

    // Calculate positions and heights for sticky limits
    let top = $aside.offset().top - parseFloat($aside.css('marginTop').replace(/auto/, 0));
    let footTop = $footer.offset().top - parseFloat($footer.css('marginTop').replace(/auto/, 0));
    let headerHeight = $header.outerHeight();
    let maxY = footTop - $aside.outerHeight() + headerHeight;

    // Set margin and top offset for mobile layout
    if (!isDesktop) {
      $aside.css({
        marginTop: `-${headerHeight}px`,
        top: `${headerHeight}px`
      });
    } else {
      $aside.removeAttr('style'); // Reset styles for desktop
    }

    jQuery(window).scroll(function() {
      var y = parseInt(jQuery(this).scrollTop() + (isDesktop ? headerHeight : 0));

      if (y > top) {
        if (y < maxY) {
          $aside.addClass('sticky').removeAttr('style');
        } else {
          $aside.removeClass('sticky').css({
            position: isDesktop ? 'absolute' : 'relative',
            top: (maxY - top) + 'px'
          });
        }
      } else {
        $aside.removeClass('sticky');
        if (!isDesktop) {
          $aside.css({
            marginTop: `-${headerHeight}px`,
            top: `${headerHeight}px`
          });
        }
      }
    });
  }

  // Initial setup
  setupSticky();

  // Re-setup on resize
  jQuery(window).resize(function() {
    setupSticky();
  });
});
