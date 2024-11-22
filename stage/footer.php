</main>
</div>
<?php
$footer_desktop_image = get_field( 'footer_desktop_image', 'option' );
$footer_t_image = get_field( 'footer_tablet_image', 'option' );
$footer_tablet_image = $footer_t_image ? $footer_t_image : $footer_desktop_image;
$footer_m_image = get_field( 'footer_mobile_image', 'option' );
$footer_mobile_image = $footer_m_image ? $footer_m_image : $footer_desktop_image;
$footer_logo = get_field( 'footer_logo', 'option' );
$footer_contact_link_text = get_field( 'footer_contact_link_text', 'option' );
$footer_contact_link = get_field( 'footer_contact_link', 'option' );
$footer_contact_phone_number_text = get_field( 'footer_contact_phone_number_text', 'option' );
$footer_contact_phone_number = get_field( 'footer_contact_phone_number', 'option' );
$footer_contact_linkldn_text = get_field( 'footer_contact_linkldn_text', 'option' );
$footer_contact_linkldn_link = get_field( 'footer_contact_linkldn_link', 'option' );

$footer_copyrights = get_field( 'footer_bottom_copyright', 'option' );
$footer_bottom_reserved_text = get_field( 'footer_bottom_reserved_text', 'option' );

?>
<footer id="main_footer" class="pos-relative">
  <?php if(!empty($footer_desktop_image)){ ?>
  <div class="background-bg">
    <picture class="object-fit">
      <source srcset="<?php echo $footer_desktop_image['url']; ?>" media="(min-width: 1440px)">
      <source srcset="<?php echo $footer_tablet_image['url']; ?>" media="(min-width: 768px)">
      <img src="<?php echo $footer_mobile_image['url']; ?>" alt="<?php echo $footer_mobile_image['alt']; ?>" title="<?php echo $footer_mobile_image['title']; ?>"> </picture>
  </div>
  <?php } ?>
  <!-- end of pos relative -->
  <div class="container">
    <div class="footer">
      <?php if (!is_page_template( 'templates/contact.php')): ?>
      <div class="footer_top flex">
        <div class="footer_lt flex">
          <div class="footer-lt-cnt">
            <?php if(!empty($footer_logo)){ ?>
            <div class="footer-logo">
              <figure role="none"> <a href="<?php echo site_url(); ?>"> <img src="<?php echo $footer_logo['url']; ?>" alt="<?php echo $footer_logo['alt']; ?>" title="<?php echo $footer_logo['title']; ?>"></a> </figure>
            </div>
            <?php } ?>
            <?php if(!empty($footer_contact_link_text || $footer_contact_phone_number || $footer_contact_linkldn_text)){ ?>
            <ul class="mail-links" role="navigation">
              <?php if(!empty($footer_contact_link_text && $footer_contact_link)){ ?>
              <li><a href="<?php echo $footer_contact_link; ?>">
                <figure role="none" class="object-fit"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/inbox-icon-dark.svg" alt="inbox-icon" title="inbox-icon"> </figure>
                <?php echo $footer_contact_link_text; ?> </a></li>
              <?php } if(!empty($footer_contact_phone_number)){ ?>
              <li><a href="tel:<?php echo $footer_contact_phone_number; ?>">
                <figure role="none" class="object-fit"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/phone-icon-dark.svg" alt="phone-icon" title="phone-icon"></figure>
                <?php echo $footer_contact_phone_number; ?></a></li>
              <?php } ?>
              <?php if(!empty($footer_contact_linkldn_text && $footer_contact_linkldn_link)){ ?>
              <li><a href="<?php echo $footer_contact_linkldn_link; ?>" aria-label="opens in new tab" target="_blank">
                <figure role="none" class="object-fit"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/linkedin-icon-dark.svg" alt="linkedin-icon" title="linkedin-icon"></figure>
                <?php echo $footer_contact_linkldn_text; ?></a></li>
              <?php } ?>
            </ul>
            <?php } ?>
            <?php if(!empty($footer_contact_link_text || $footer_contact_phone_number_text)){ ?>
            <div class="btn-wrap hide-in-tablet hide-in-desktop">
              <?php if(!empty($footer_contact_link_text && $footer_contact_link)){ ?>
              <a href="<?php echo $footer_contact_link; ?>" class="button"><?php echo $footer_contact_link_text; ?></a>
              <?php } if(!empty($footer_contact_phone_number_text && $footer_contact_phone_number)){ ?>
              <a href="tel:<?php echo $footer_contact_phone_number; ?>" class="button hollow"><?php echo $footer_contact_phone_number_text; ?></a>
              <?php } ?>
            </div>
            <?php } ?>
            <!-- end of btn wrap --> 
          </div>
          <!-- end of footer lt cnt --> 
        </div>
        <!-- end of footer_lt -->
        
        <div class="footer_rt flex">
          <?php if( have_rows('footer_address', 'option') ): ?>
          <div class="ftr-address-wrap flex">
            <?php
            while ( have_rows( 'footer_address', 'option' ) ): the_row();
            $footer_address_location = get_sub_field( 'footer_address_location' );
            $footer_address_select_provience = get_sub_field( 'footer_address_select_provience' );
            $footer_address_phone_number = get_sub_field( 'footer_address_phone_number' );
            $footer_address_email = get_sub_field( 'footer_address_email' );
            if ( !empty( $footer_address_location ) ) {
              ?>
            <div class="footer-address footer1-of-3 <?php echo $footer_address_select_provience; ?>">
              <?php if(!empty($footer_address_select_provience)){ ?>
              <div class="locator"><i class="fa-sharp fa-solid fa-location-pin"></i><?php echo $footer_address_select_provience; ?> </div>
              <?php } ?>
              <div class="address-cnt">
                <h6><?php echo $footer_address_location; ?></h6>
                <?php if(!empty($footer_address_phone_number)){ ?>
                <a href="tel:<?php echo $footer_address_phone_number; ?>"><?php echo $footer_address_phone_number; ?></a>
                <?php } if(!empty($footer_address_email)){  ?>
                <a href="mailto:<?php echo $footer_address_email; ?>"><?php echo $footer_address_email; ?></a>
                <?php } ?>
              </div>
            </div>
            <?php } endwhile; wp_reset_postdata(); ?>
            <!-- end of footer address --> 
            
          </div>
          <?php endif; ?>
          <?php if(!empty($footer_contact_linkldn_text && $footer_contact_linkldn_link)){ ?>
          <div class="btn-full hide-in-tablet hide-in-desktop"> <a href="<?php echo $footer_contact_linkldn_link; ?>" aria-label="opens in new tab" target="_blank" class="button reverse">
            <figure role="none" class="object-fit"> <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/linkedin-icon-dark.svg" alt="linkedin-icon" title="linkedin-icon"></figure>
            <?php echo $footer_contact_linkldn_text; ?></a> </div>
          <?php } ?>
        </div>
        <!-- end of footer rt --> 
        
      </div>
      <?php endif; ?>
      
      <!-- end of footer_top -->
      
      <div class="copyrights-main flex">
        <?php if(!empty($footer_copyrights)){ ?>
        <div class="copyrights-text">
          <p>&copy; <?php echo date('Y').'&nbsp;'.$footer_copyrights; ?></p>
        </div>
        <?php } ?>
        <?php if( have_rows('footer_privacy_policy', 'option') ): ?>
        <ul class="copyright-links flex" role="navigation">
          <?php
          while ( have_rows( 'footer_privacy_policy', 'option' ) ): the_row();
          $footer_privacy_policy_link_text = get_sub_field( 'footer_privacy_policy_link_text' );
          $footer_privacy_policy_link = get_sub_field( 'footer_privacy_policy_link' );

          if ( !empty( $footer_privacy_policy_link_text && $footer_privacy_policy_link ) ) {
            ?>
          <li><a href="<?php echo $footer_privacy_policy_link; ?>"><?php echo $footer_privacy_policy_link_text; ?></a></li>
          <?php } endwhile; wp_reset_postdata(); ?>
        </ul>
        <?php endif; ?>
      </div>
      <!-- end of copyrights-main --> 
      
    </div>
    <!-- end of footer --> 
    
  </div>
</footer>
<?php
$ourexpertise_menu_modal_heading = get_field( 'ourexpertise_menu_modal_heading' );
$ourexpertise_menu_sub_heading = get_field( 'ourexpertise_menu_sub_heading' );
$ourexpertise_menu_button_text = get_field( 'ourexpertise_menu_button_text' );
$ourexpertise_menu_button_link = get_field( 'ourexpertise_menu_button_link' );
?>
<div class="modal" style="display:none;"> <span class="close"><i class="fa-light fa-xmark"></i></span>
  <div class="modal-content dark-bg">
    <div class="h1">our expertise</div>
    <div class="menu-wrapper">
      <?php
      wp_nav_menu( array(
        'menu' => 47,
        'container' => false,
        'items_wrap' => '<ul class="expertise_menu">%3$s</ul>',

      ) );
      ?>
    </div>
    <div class="h3">A short subhead about IP expertise for startups here. <a href="#" class="fancy-link">IP law for startups.</a></div>
  </div>
</div>
<script>
jQuery(function ($) {
    if ($(window).width() >= 768) {
        // Show the modal with fadeIn and speed control
        $(".expertise-menu").on("click", function () {
            $(".modal").fadeIn(400); // 400ms fade-in effect
        });

        // Hide the modal with fadeOut and speed control
        $(".close").on("click", function () {
            $(".modal").fadeOut(400); // 400ms fade-out effect
        });
    }
});


  </script>
<?php wp_footer(); ?>
</body></html>