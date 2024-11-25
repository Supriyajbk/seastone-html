<!DOCTYPE html>
<html lang="en-CA" prefix="og: https://ogp.me/ns#">
<head>

<!-- Meta -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=2">
<meta name="keywords" content="HTML, CSS, XML, PHP, JavaScript, jQuery">

<!-- Favicons -->
<link rel="shortcut icon" type="image/x-icon" href="<?php echo get_stylesheet_directory_uri(); ?>/images/favicon.ico" />
<link rel="icon" type="image/vnd.microsoft.icon" sizes="512x512" href="<?php echo get_stylesheet_directory_uri(); ?>/images/favicon.svg">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo get_stylesheet_directory_uri(); ?>/images/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="44" href="<?php echo get_stylesheet_directory_uri(); ?>/images/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="192x192" href="<?php echo get_stylesheet_directory_uri(); ?>/images/web-app-manifest-192x192.png">
<link rel="icon" type="image/vnd.microsoft.icon" sizes="512x512" href="<?php echo get_stylesheet_directory_uri(); ?>/images/web-app-manifest-512x512.png">
<link rel="stylesheet" href="https://use.typekit.net/gvt6vwo.css">
<script src="https://kit.fontawesome.com/4a8777acf0.js" crossorigin="anonymous"></script>
<?php wp_head(); ?>
</head>
<body <?php body_class();  ?> >
<div id="main">
<header id="main_header" class="main_header">
  <div class="container">
    <div class="header flex flex-vcenter">
        <div class="toggle_button flex flex-center"><span class="bars"><i class="fa-regular fa-bars"></i></span><span class="xmark"><i class="fa-regular fa-xmark"></i></span></div>
      <?php
      $header_logo = get_field( 'header_logo', 'option' );
      $header_logo_sticky = get_field( 'header_logo_sticky', 'option' );

      $header_menu = get_field( 'main_menu', 'option' );
      $header_button_text = get_field( 'header_button_text', 'option' );
      $header_button_link = get_field( 'header_button_link', 'option' );
      if ( !empty( $header_logo || $header_logo_sticky ) ) {
        ?>
      <div class="logo">
        <?php if(!empty($header_logo)){ ?>
        <span class="logo-pos normal-logo"> 
            <a href="<?php echo site_url(); ?>">
                <img src="<?php echo $header_logo['url']; ?>" alt="<?php echo $header_logo['alt']; ?>" title="<?php echo $header_logo['title']; ?>" class="hide-in-mobile">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo-mobile.svg" alt="Seastone IP Logo" title="Seastone IP Logo" class="hide-in-tablet hide-in-desktop">
            </a> 
        </span>
        <?php } if(!empty($header_logo_sticky)){ ?>
        <span class="logo-pos fixed-logo"> 
            <a href="<?php echo site_url(); ?>">
                <img src="<?php echo $header_logo_sticky['url']; ?>" alt="<?php echo $header_logo_sticky['alt']; ?>" title="<?php echo $header_logo_sticky['title']; ?>" class="hide-in-mobile">
                <img src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo-sticky-mobile.svg" alt="Seastone IP Logo" title="Seastone IP" class="hide-in-tablet hide-in-desktop">
            </a> 
          </span>
        <?php } ?>
      </div>
      <?php } ?>
      <div class="touch_button flex flex-center">
              <a href="#" role="button" aria-label="get in touch">
                  <span class="getintouch"><i class="fa-regular fa-message"></i></span></a></div>
      <div class="header_right mobile_menu flex">
        <div class="header-btm">
          <nav class="navigation mobile_main_menu" role="navigation">
            <?php
            if ( !empty( $header_menu ) ) {
              wp_nav_menu( array(
                'menu' => $header_menu,
                'container' => false,
                'items_wrap' => '<ul class="main_menu">%3$s</ul>',

              ) );
            }
            ?>
          </nav>
          <?php if (!empty($header_button_text &&  $header_button_link)) { ?>
          <div class="header-btns"> <a href="<?php echo $header_button_link; ?>" class="button reverse"><?php echo $header_button_text; ?></a> </div>
          <?php } ?>
          <!-- end of header btns --> 
          
        </div>
      </div>
      <!-- end of header right --> 
    </div>
    <!-- end of header --> 
  </div>
</header>
<main id="mainContent">
