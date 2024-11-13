(function(jQuery) {
    let $header = $("#main_header");
    let $footer = $("#main_footer");
    let $bioSection = $(".bio-section");
    let $bioaside = $(".bio-aside-wrap");
    let $article = $(".bio-article-inner");

    let $headerHeight = $header.outerHeight(true);
    let $bioasideTop = $bioaside.offset().top;
    let $bioasideHeight = $bioaside.outerHeight(true);
    let $footerTop = $footer.offset().top;
    let $maxY = $footerTop - $bioasideHeight;

    function isDesktop() {
        return $(window).width() >= 768;
    }

    function scrollfun() {
        let $scrolly = $(window).scrollTop();
        
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

    $(window).on('scroll resize', scrollfun);
    $(window).on('load', scrollfun);

})(jQuery);
