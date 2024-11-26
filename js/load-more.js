var jqr5 = jQuery.noConflict();
jqr5(function() {
    if (jqr5("#load-more-insights").length) {
	 //e = 1,
           var t = true,
            n = false,
            r = jqr5(window),
            i = jqr5("#load-more-insights"),
            s = jqr5("#load-more-insights ul"),
            o = s.attr("data-path");
            p = s.attr("data-pagenumber");

	    if(p !=''){
		e = p;
	    } else {
		e = 1;
	    }
       console.log('pagenumber##'+s.attr("data-pagenumber"));
       console.log('e value' + e);
        if (o === undefined) {
            o = "<?php bloginfo('stylesheet_directory'); ?>/ajax-load-more.php"
        }
     
        jqr5button = s.attr("data-button-text")
        
        i.append('<div id="load-more" class="btn-center"><span class="loader"></span><span class="button hollow">' + jqr5button + "</span></div>");
        var u = function() {
            jqr5("#load-more").addClass("loading");
            jqr5("#load-more span.text").text("Loading...");
            jqr5.ajax({
                type: "GET",
                data: {
                    postType: s.attr("data-post-type"),
                    searchcatid: s.attr("data-search-catid"), 
                    service: s.attr("data-service"),
                    industry: s.attr("data-industry"),
                    category: s.attr("data-category"),
                    topic: s.attr("data-topic"),
                    type: s.attr("data-type"),
                    author: s.attr("data-author"),
                    taxonomy: s.attr("data-taxonomy"),
                    tag: s.attr("data-tag"),
                    postNotIn: s.attr("data-post-not-in"),
                    postIn: s.attr("data-post-in"),
                    numPosts: s.attr("data-display-posts"),
                    searchblog: s.attr("data-searchblog"),
                   // offset: s.attr("data-offset"),
                    order: s.attr("data-order"),
                    option: s.attr("data-option"),
                    postsCount: s.attr("data-postscount"),
                    pageNumber: s.attr("data-pagenumber") ,
                    pageOffset: e,

                },
                
                url: o + "/ajax-load-more.php",
                beforeSend: function() {
                   
                    if (e != 1) {
                        jqr5("#load-more").addClass("loading");                        
                        jqr5("#load-more span.loader").addClass("button hollow")
                        jqr5("#load-more span.loader").text("Loading...")
                    }
                },
                success: function(e) {
                   jqr5data = jqr5(e);

                    if (jqr5data.length == 0) {
                        jqr5("#load-more").removeClass("loading");
                        if (jqr5(window).width() >= 600) {
                            jqr5("#load-more span.text").text("That's all!")
                        } else {
                            jqr5("#load-more span.text").text("That's all!")
                        }
                        t = false;
                        n = true
                    } else if (jqr5data.length > 0) {
                        jqr5data = jqr5(e);
                        jqr5data.hide();
                        s.append(jqr5data);
                        jqr5data.fadeIn(500, function() {
                            jqr5("#load-more").removeClass("loading");
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
        var postsCount= s.attr("data-postscount");
        console.log('postcount'+postsCount);
        if(postsCount <=12){
            
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
            
            //var postsCount= s.attr("data-postscount");
            
                remain = postsCount - 12 * count;
                console.log('Remain'+remain);
                if(remain <= 12){
                jQuery("#load-more").hide();
                }
            });
        u()
    }
})