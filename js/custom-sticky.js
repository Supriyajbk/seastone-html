(function() {
    let $header = jQuery("#main_header");
    let $footer = jQuery("#main_footer");
    let $bioSection = jQuery(".bio-section");
    let $bioaside = jQuery(".bio-aside-wrap");
    let $article = jQuery(".bio-article-inner");

    let $headerHeight = $header.outerHeight(true);
    let $bioasideTop = $bioaside.offset().top;
    let $bioasideHeight = $bioaside.outerHeight(true);
    let $footerTop = $footer.offset().top;
    let $maxY = $footerTop - $bioasideHeight;

    function isDesktop() {
        return jQuery(window).width() >= 768;
    }

    function scrollfun() {
        let $scrolly = jQuery(window).scrollTop();
        
        if (isDesktop()) {
            if ($scrolly >= $bioasideTop - $headerHeight) {
                if ($scrolly + $headerHeight + $bioasideHeight < $footerTop) {
                    $bioaside.css({
                        position: 'fixed',
                        top: `${$headerHeight}px`
                    });
                } else {
                    $bioaside.css({
                        position: 'absolute',
                        top: `${$maxY - $bioSection.offset().top}px`
                    });
                }
            } else {
                $bioaside.css({
                    position: 'relative',
                    top: '0'
                });
            }
        } else {
            if ($scrolly >= $headerHeight) {
                if ($scrolly + $headerHeight + $bioasideHeight < $footerTop) {
                    $bioaside.css({
                        position: 'fixed',
                        top: `0`
                    });
                    $article.css({
                        marginTop: `${$bioasideHeight}px`
                    });
                } else {
                    $bioaside.css({
                        position: 'absolute',
                        top: `${($maxY -  $bioSection.offset().top)}px`
                    });
                    $article.css({
                        marginTop: `${$bioasideHeight}px`
                    });
                }
            } else {
                $bioaside.css({
                    position: 'relative',
                    top: '0'
                });
                $article.css({
                    marginTop: `0`
                });
            }
        }
    }

    jQuery(window).on('scroll resize', scrollfun);
    jQuery(window).on('load', scrollfun);

})(jQuery);
