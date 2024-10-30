var jqr5 = jQuery.noConflict();
jqr5(function() {
    if (jqr5("#ajax-load-more-testimonial").length) { 
	 //e = 1,
           var t = true,
            n = false,
            r = jqr5(window),
            i = jqr5("#ajax-load-more-testimonial"),
            s = jqr5("#ajax-load-more-testimonial ul"),
            o = s.attr("data-path"),
            p = s.attr("data-pageNumber"),
            button = s.attr("data-button-text")
	    if(p!=''){
		e = p;
	    } else {
		e = 1;
	    }
       console.log(button);
        if (o === undefined) {
            o = "<?php bloginfo('stylesheet_directory'); ?>/ajax-load-more-testimonial.php"
            
        }
        if ( button === undefined) {
            jqr5button = "Older Posts"
        } else {
            jqr5button = s.attr("data-button-text")
        }


        i.append('<div id="load-more" class="stats-more learn-more-btn"><span class="loader"></span><span class="readmore white">' + jqr5button + "</span></div>");
        var u = function() {
            jqr5("#load-more").addClass("loading");
            jqr5("#load-more span.text").text("Loading...");
            jqr5.ajax({
                type: "GET",
                data: {
                    postType: s.attr("data-post-type"),
                    searchcatid: s.attr("data-search-catid"), 
                    category: s.attr("data-category"),
                    topic : s.attr("data-topic"),
                    author: s.attr("data-author"),
                    taxonomy: s.attr("data-taxonomy"),
                    tag: s.attr("data-tag"),
                    postNotIn: s.attr("data-post-not-in"),
                    postIn: s.attr("data-post-in"),
                    numPosts: s.attr("data-display-posts"),
                    year: s.attr("data-year"),
                    month: s.attr("data-month"),
                    searchblog: s.attr("data-searchblog"),
                    offset: s.attr("data-offset"),
                    order: s.attr("data-order"),
                    option: s.attr("data-option"),
                    postsCount: s.attr("data-postsCount"),
                    pageNumber: e,
                    pageOffset: e,
                },
                url: o + "/ajax-load-more-testimonial.php",
                beforeSend: function() {
                    
                    if (e != 1) {
                        jqr5("#load-more").addClass("loading");
                        jqr5("#load-more .loader").show();
                    }
                },
                success: function(e) {
                    jqr5data = jqr5(e);
                    if (jqr5data.length == 0) {
                        jqr5("#load-more").removeClass("loading");
                        jqr5("#load-more .loader").hide();

                        if (jqr5(window).width() >= 600) {
                            jqr5("#load-more span.text").text("That's all!")
                        } else {
                            jqr5("#load-more span.text").text("That's all!")
                        }
                        t = false;
                        n = true
                    } else if (jqr5data.length > 0) {
                        jqr5data = jqr5( e );
                        jqr5data.hide();
                        s.append(jqr5data);
                        jqr5data.fadeIn(500, function() {
                            jqr5("#load-more").removeClass("loading");
                            jqr5("#load-more .loader").show();
                            jqr5("#load-more span.text").text(jqr5button);
                            t = false
                        })
                    }
                },
                error: function(e, t, n) {
                    jqr5("#load-more").removeClass("loading");
                    jqr5("#load-more span.text").text(jqr5button)
                }
            })
        };
        var remain = 0;
        var count = 0;
        var postsCount= s.attr("data-postsCount");
        if(postsCount <=12){
        jQuery('.load_more_hosts').addClass('no-loadmore');
        jQuery("#load-more").hide(); 
           if(postsCount == 0){ 
              jQuery(".resource-blog-main").append("<h3 class='no_result_found'>Sorry, No posts found.</h3>")
           }
        }
        jqr5("#load-more").click(function() {
            if (!t && !n && !jqr5(this).hasClass("done")) {
                t = true;
                e++;
                u()
            }
        count +=1; 
           
          var postsCount= s.attr("data-postsCount");
          
            remain = postsCount - 12 * count;
          console.log(remain);
            if(remain <= 12){
               jQuery("#load-more").hide();
               jQuery('.load_more_hosts').addClass('no-loadmore');
            }
        });
        u()
    }
})