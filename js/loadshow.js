jQuery(document).ready(function () {
    const $statsMain = jQuery('.stats-main');
    const statsShow = function (main) {
      const $link = main.find('.stats-btn-link');
      const $list = main.find('.stats-list');
      const totalList = $list.length;
      
      if (!$link.length) return;
      let currentIndex = 12;
      $link.on('click', function (e) {
        e.preventDefault();
        jQuery(this).toggleClass('open');
        let nextIndex = Math.min(currentIndex + 12, totalList);
        for (let i = currentIndex; i < nextIndex; i++) {
          $list.eq(i).css('display', 'block');
        }
        currentIndex = nextIndex;
        if (currentIndex >= totalList) {
          $link.css('display', 'none');
          return false;
        }
        
      });
    };
    if ($statsMain.length) {
      
      statsShow($statsMain);
    }
  });