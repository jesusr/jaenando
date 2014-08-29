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
		<link href='http://fonts.googleapis.com/css?family=Maven+Pro:700' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Oleo+Script:700' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Cookie' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="<?php bloginfo('template_url');?>/js/css3-mediaqueries.js"></script>
		<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url');?>/css/1140.css">
		<style type="text/css">
			@-moz-document url-prefix() {
			    #logo{
			        line-height:.18em;
			    }
			}
		</style>
	</head>
	<body class="">
		<div id="wrapper" class="">
			<header id="header">	
				<nav id="menu-meta" class="row">
					<?php 
						if(is_user_logged_in()) {	echo '<li><a href="'. admin_url() .'">' . 'Administrar' . '</a></li>';
													echo '<li><a href="'. wp_logout_url('index.php') .'">' . 'Logout' . '</a></li>';
						} else { echo '<li><a href="'. wp_login_url('wp-admin/') .'">' . 'Login' . '</a></li>';}
					?>
				</nav>
				<hgroup class="borde row">
					<h1 class="ninecol">
						<a class="" id="logo" href="<?php echo get_bloginfo('url'); ?>">
							<?php bloginfo('name'); ?><span>.com</span>
						</a>
					</h1>
					<div class="threecol last"></div>
				</hgroup>
				<div id="header-inf">
					<div class="borde menu-main">
						<div class="row">
							<p><span id="tagline" class="ninecol">Un viaje sonoro por la provincia de Jaén</span></p>
							<div class="threecol last"></div>
						</div>
						<div class="row">	
							<div class="twocol"></div>
							<nav id="menuprincipal" class="eightcol">
								<?php wp_nav_menu( array( 'theme_location' => 'menu-main' ) ); ?>
							</nav>
							<div class="twocol last"></div>
						</div>
					</div>
				</div>
			</header>
