
jQuery(document).ready(function () {
jQuery("button.res-srch-icon").on("click", function(e) { e.preventDefault(); jQuery(".res-srch-form").toggleClass("open"); });
 
    const $ele = jQuery('.tab-links-d');
    const $tabs = jQuery('.tab-links-main');
    const tabFun = function (e) {
      e.preventDefault();
      let $target = jQuery(e.target);
      $ele.not($target).removeClass('open');
      if ($target.is('span')) {
        $target = $target.parent();
      } else if ($target.is('svg')) {
        $target = $target.parent().parent();
      }
      const tabName = $target.data('name');
      console.log('tabname'+tabName);
      const $tabele = jQuery(`.tab-links-main[data-value="${tabName}"]`);
      if (!$tabele.length) return;
      $tabs.not($tabele).each(function () {
        console.log("edit");
        setTimeout(()=>{
            const $tab = jQuery(this);
            $tab.slideUp(100);
            $tab.data('id', 'false');
        },1000)
       
      });
      if ($tabele.data('id') !== 'true') {
        console.log("toggle");
        setTimeout(()=>{
            $target.addClass('open');
            $tabele.slideDown(800);
            $tabele.data('id', 'true');
         },1000)
      } else {
        console.log("untoggle");
        $target.removeClass('open');
        $tabele.slideUp();
        $tabele.data('id', 'false');
      }
    };
    if ($ele.length) {
      $ele.on('click', tabFun);
    }
});