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
if (jQuery(window).width() <=767) {
	jQuery(".toggle_button").on("click", function (event) {
			event.preventDefault();
			jQuery(this).toggleClass("active");
			jQuery(".mobile_menu").toggleClass("navOpen");
			jQuery(".main_header").toggleClass("menu-open");
			jQuery("html").toggleClass("no-scroll");
		});
	jQuery("ul.main_menu > li").has("ul").addClass("menu-icon");
	jQuery("ul.main_menu > li").has("ul ul").addClass("menu-icon3");

	/* Level 1 Submenu */
	jQuery("ul.main_menu > li.menu-icon > a").on("click", function (event) {
			event.preventDefault();
			jQuery(this).toggleClass("toggle_icon");
			jQuery(this).siblings("ul.sub-menu").toggleClass("sub-menu-open");
			jQuery(this).parent().siblings("li").toggleClass("sib");

			if (jQuery(this).siblings("ul.sub-menu").hasClass("sub-menu-open")) {
				jQuery(".header_right").addClass("level-one-active");
			}
			else {
				jQuery(".header_right").removeClass("level-one-active");
			}
		});

	/* Level 2 Submenu */
	jQuery("ul.main_menu > li > ul > li.menu-item-has-children > a").on("click", function (event) {
			event.preventDefault();
			jQuery(this) .parent() .siblings("li") .parent("ul.sub-menu") .toggleClass("remove-margin");
			jQuery(this) .parent() .siblings("li") .parent("ul.sub-menu") .siblings("a.toggle_icon") .toggleClass("hide-level-two");
			jQuery(this).toggleClass("toggle_icon3");
			jQuery(this).siblings("ul.sub-menu").toggleClass("sub-menu-open-two");
			jQuery(this).parent().siblings("li").toggleClass("sib2");

			if (jQuery(this).siblings("ul.sub-menu").hasClass("sub-menu-open-two")) {
				jQuery(".header_right").addClass("level-two-active");
			}
			else {
				jQuery(".header_right").removeClass("level-two-active");
			}
		});
}




  /* Accorrdion */
  jQuery(".accordion-header").on("click", function (e) {
    e.preventDefault();
    if (jQuery(this).closest(".accordion-list").hasClass("active")) {
      jQuery(".accordion-list").removeClass("active");
    } else {
      jQuery(".accordion-list").removeClass("active");
      jQuery(this).closest(".accordion-list").addClass("active");
    }
    var jQuerycontent = jQuery(this).next();
    jQuerycontent.slideToggle(300);
    jQuery(".accordion-content").not(jQuerycontent).slideUp("slow");
  });

  /* Form */
  jQuery(".frm_form_field input, .frm_form_field textarea").on(
    "input",
    function () {
      var inputLength = jQuery(this).val().length;
      if (inputLength > 0) {
        jQuery(this).addClass("input-has-value");
      } else {
        jQuery(this).removeClass("input-has-value");
      }
    }
  );

  jQuery(".frm_form_field input, .frm_form_field textarea").on(
    "blur",
    function () {
      var inputValue = jQuery(this).val();
      if (parseFloat(inputValue) > 0 && inputValue.trim() !== "") {
        jQuery(this).addClass("highlight");
      } else {
        jQuery(this).removeClass("highlight");
      }
    }
  );

  // jQuery(".frm_forms .frm_form_fields input, .frm_forms .frm_form_fields textarea").on('focus', function () {
  //   jQuery(this).siblings(".frm_form_field").addClass("input-has-value");
  //   jQuery(this).parent(".frm_form_field ").removeClass("frm_blank_field");
  //   jQuery(this).siblings("label.frm_primary_label").addClass("label-top");

  //   jQuery(this).siblings(".frm_error").hide();
  // }).on('blur', function () {
  //   if (!jQuery(this).val()) {
  //     jQuery(this).siblings(".frm_form_field").removeClass("input-has-value");
  //     jQuery(this).siblings(".frm_error").show();
  //     jQuery(this).parent(".frm_form_field ").addClass("frm_blank_field");
  //     jQuery(this).siblings("label.frm_primary_label").removeClass("label-top");

  //   } else {
  //     jQuery(this).siblings(".frm_form_field").addClass("input-has-value");
  //     jQuery(this).parent(".frm_form_field ").removeClass("frm_blank_field");
  //     jQuery(this).siblings("label.frm_primary_label").addClass("label-top");

  //     jQuery(this).siblings(".frm_error").hide();
  //   }
  // });

  jQuery(document).on(
    "change",
    ".frm_forms .frm_form_fields select",
    function () {
      jQuery(this)
        .siblings("label.frm_primary_label")
        .addClass("input-has-value");
    }
  );
  jQuery(document).on(
    "change",
    ".frm_forms .frm_form_fields select",
    function () {
      var selval = jQuery(this).val();
      if (selval == "") {
        jQuery(this)
          .siblings("label.frm_primary_label")
          .removeClass("input-has-value");
      } else {
        jQuery(this)
          .siblings("label.frm_primary_label")
          .addClass("input-has-value");
      }
    }
  );

  function checkForInput(element) {
    const $label = jQuery(element).siblings("div.frm_error");
    if (jQuery(element).val().length > 0) {
      $label.addClass("input-has-value");
    } else {
      $label.removeClass("input-has-value");
    }
  }

  if (jQuery(window).width() >= 1024) {
    jQuery(
      ".more-inights-cnt .more-link, .more-inights-cnt .h5, .more-blog-cnt .more-link, .more-blog-cnt .h5"
    ).hover(function () {
      jQuery(this)
        .closest(".more-insights-grid, .more-blog-grid")
        .toggleClass("toggled");
    });
  }

  if (jQuery(window).width() >= 1024) {
    jQuery(".heading-rt .readmore").hover(function () {
      jQuery(this).closest(".heading-rt").siblings().toggleClass("minusleft");
    });
  }

  jQuery(".anchor-links ul li a").on("click", function (e) {
    e.preventDefault();
    jQuery(this).parent("li").siblings().removeClass("active");
    jQuery(this).parent("li").addClass("active");
  });
});
