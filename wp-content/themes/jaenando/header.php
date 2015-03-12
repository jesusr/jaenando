<?php 
/**
 * Template: header.php part
 *
 * @package Jaenando
 * @since Jaenando 0.1
 */
?>
<!doctype html>  
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><?php wp_title('', true, 'right'); ?></title>
		<!--[if lt IE 9]><script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
<?php wp_head(); ?>
		<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('stylesheet_url');?>" />
		<!--[if lte IE 9]><link rel="stylesheet" href="css/ie.css" type="text/css" media="screen" /><![endif]-->
		<link rel="stylesheet" href="<?php bloginfo('template_url');?>/stylesheets/screen.css" type="text/css" media="screen" />
		<link href='http://fonts.googleapis.com/css?family=Maven+Pro:700' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Oleo+Script:700' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Cookie' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="<?php bloginfo('template_url');?>/js/css3-mediaqueries.js"></script>
    	<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>
		<script type="text/javascript" src="<?php bloginfo('template_url');?>/js/tooltipster/js/jquery.tooltipster.min.js"></script>
		<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url');?>/js/tooltipster/css/tooltipster.css">
		<style type="text/css">
			@-moz-document url-prefix() {
			    #logo{
			        line-height:.18em;
			    }
			}
		</style>
	</head>
	<body>
		<div class="wrapper">
			<header>	
				<nav class="meta">
					<ul>
						<?php 
							if(is_user_logged_in()) {	echo '<li><a href="'. admin_url() .'">' . 'Administrar' . '</a></li>';
														echo '<li><a href="'. wp_logout_url('index.php') .'">' . 'Logout' . '</a></li>';
							} else { echo '<li><a href="'. wp_login_url('wp-admin/') .'">' . 'Login' . '</a></li>';}
						?>
					</ul>
				</nav>
				<hgroup>
					<h1>
						<a href="<?php echo get_bloginfo('url'); ?>">
							<?php bloginfo('name'); ?><span>.com</span>
						</a>
					</h1>
				</hgroup>
				<div id="header-inf">
					<p><span id="tagline">Un viaje sonoro por la provincia de Jaén</span></p>
					<nav id="menuprincipal">
						<?php wp_nav_menu( array( 'theme_location' => 'menu-main' ) ); ?>
					</nav>	
				</div>
			</header>