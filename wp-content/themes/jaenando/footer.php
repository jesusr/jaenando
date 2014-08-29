<?php
/**
 * Template: footer.
 *
 * @package Jaenando
 * @since Jaenando 0.1
 */
?>
		<footer id="colophon" class="">
			<div class="footer-inner row">
				<div class="twocol"></div>
				<div id="first" class="twocol">
					<p>colabora: </p>
					<a href="http://www.dipujaen.es" title="Diputacion de Jaen">
						<img src="<?php bloginfo('template_url');?>/img/dipujaen.png" alt=""/>
					</a>
				</div>
				<div id="second" class="threecol">
					<p>acerca de: </p>
					<?php wp_nav_menu( array( 'theme_location' => 'menu-meta' ) ); ?>
				</div>
				<div id="third" class="threecol">
					<p>encu&eacute;ntranos en: </p>
					<a href="http://www.facebook.es" title="Jaenando Facebook">
						<img src="<?php bloginfo('template_url');?>/img/facebook.png" alt=""/>
					</a>
					<a href="http://www.twitter.com" title="Jaenando Twitter">
						<img src="<?php bloginfo('template_url');?>/img/twitter.png" alt=""/>
					</a>
				</div>
				<div class="twocol last"></div>
			</div>
		</footer>
	</div>
	<?php wp_footer(); ?>
</body>
</html>