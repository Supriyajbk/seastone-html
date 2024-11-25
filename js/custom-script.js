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

  if (jQuery(window).width() <= 767) {
  // Toggle mobile menu visibility
  jQuery(".toggle_button").on("click", function (event) {
    event.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery(".mobile_menu").toggleClass("navOpen");
    jQuery(".main_header").toggleClass("menu-open");
    jQuery("html").toggleClass("no-scroll");
  });

  // Add menu-icon classes for items with submenus
  jQuery("ul.main_menu > li").has("ul").addClass("menu-icon");
  jQuery("ul.main_menu > li").has("ul ul").addClass("menu-icon3");

  // Handle level 1 menu toggle
  jQuery("ul.main_menu > li.menu-icon > a").on("click", function (event) {
    event.preventDefault();

    const $submenu = jQuery(this).siblings("ul");
    const $submenuHeight = $submenu.get(0).scrollHeight;  // Dynamically calculate submenu height

    // Close all other submenus before opening the current one
    jQuery("ul.main_menu > li > ul.sub-menu-open").each(function () {
      if (this !== $submenu[0]) {
        jQuery(this).removeClass("sub-menu-open").css({
          height: '0',
          opacity: '0',
          paddingTop: '0'
        });
      }
    });

    // Toggle the current submenu
    if ($submenu.hasClass("sub-menu-open")) {
      $submenu.removeClass("sub-menu-open").css({
        height: '0',
        opacity: '0',
        paddingTop: '0'
      });
    } else {
      $submenu.addClass("sub-menu-open").css({
        height: $submenuHeight + 'px',
        opacity: '1',
        paddingTop: '10px'
      });
    }

    // Toggle sibling blur and font size adjustment
    jQuery(this).parent().siblings("li").toggleClass("sib");

    // Toggle active class for font-size
    jQuery(this).parent().siblings("li").find("a").removeClass("active");
    jQuery(this).addClass("active");
  });

  // Handle level 2 submenu toggle
  jQuery("ul.main_menu > li > ul > li.menu-item-has-children > a").on("click", function (event) {
    event.preventDefault();

    const $submenu = jQuery(this).siblings("ul");
    const $submenuHeight = $submenu.get(0).scrollHeight; // Dynamically calculate submenu height

    // Close all other level 2 submenus before opening the current one
    jQuery("ul.main_menu > li > ul > li > ul.sub-menu-open-two").each(function () {
      if (this !== $submenu[0]) {
        jQuery(this).removeClass("sub-menu-open-two").css({
          maxHeight: '0',
          opacity: '0'
        });
      }
    });

    // Toggle the current level 2 submenu
    if ($submenu.hasClass("sub-menu-open-two")) {
      $submenu.removeClass("sub-menu-open-two").css({
        maxHeight: '0',
        opacity: '0'
      });
    } else {
      $submenu.addClass("sub-menu-open-two").css({
        maxHeight: $submenuHeight + 'px',
        opacity: '1'
      });
    }

    // Toggle sibling blur and font size adjustment for level 2
    jQuery(this).parent().siblings("li").toggleClass("sib");

    // Toggle active class for font-size in level 2
    jQuery(this).parent().siblings("li").find("a").removeClass("active");
    jQuery(this).addClass("active");
  });

  // Handle level 3 submenu toggle
  jQuery("ul.main_menu > li > ul > li > ul > li.menu-item-has-children > a").on("click", function (event) {
    event.preventDefault();

    const $submenu = jQuery(this).siblings("ul");
    const $submenuHeight = $submenu.get(0).scrollHeight; // Dynamically calculate submenu height

    // Close all other level 3 submenus before opening the current one
    jQuery("ul.main_menu > li > ul > li > ul > li > ul.sub-menu-open-three").each(function () {
      if (this !== $submenu[0]) {
        jQuery(this).removeClass("sub-menu-open-three").css({
          maxHeight: '0',
          opacity: '0'
        });
      }
    });

    // Toggle the current level 3 submenu
    if ($submenu.hasClass("sub-menu-open-three")) {
      $submenu.removeClass("sub-menu-open-three").css({
        maxHeight: '0',
        opacity: '0'
      });
    } else {
      $submenu.addClass("sub-menu-open-three").css({
        maxHeight: $submenuHeight + 'px',
        opacity: '1'
      });
    }

    // Toggle sibling blur and font size adjustment for level 3
    jQuery(this).parent().siblings("li").toggleClass("sib");

    // Toggle active class for font-size in level 3
    jQuery(this).parent().siblings("li").find("a").removeClass("active");
    jQuery(this).addClass("active");
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
