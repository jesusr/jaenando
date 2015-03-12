<?php
/**
 * Template: footer.
 *
 * @package Jaenando
 * @since Jaenando 0.1
 */
?>
		<footer id="colophon" class="">
			<div class="footer-inner">
				<div id="first">
					<?php wp_nav_menu( array( 'theme_location' => 'menu-meta' ) ); ?>
				</div>
				<div id="second">
					<a href="http://www.dipujaen.es" title="Diputacion de Jaen">Diputación de Jaén</a>
				</div>
				<div id="third">
					<a href="http://www.facebook.es" title="Jaenando Facebook">Facebook</a>
					<a href="http://www.twitter.com" title="Jaenando Twitter">Twitter</a>
					<a href="mailto:info@jaenando.com" title="Jaenando Mail">Correo</a>
				</div>
			</div>
		</footer>
	</div>
	<?php wp_footer(); ?>
</body>
</html>