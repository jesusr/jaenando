<?php
/**
* Template Name: Destinos
* @package Jaenando
* @since Jaenando 0.1
* @version 1.1
* @date 2015.03.01
**/
?>
<?php get_header(); ?>
<div id="content" class="">
 	<div id="inner-content">
 		<?php if (have_posts()) : while (have_posts()) : the_post();?>
		<div id="post-inicio" class="post cf">
			<div class="entrytext">
				<div id="mapa">
				</div>                    
				<div id="more">
				</div>
			</div>
		</div>
		<?php endwhile; endif; ?>
		<div id="main">
		</div>
	</div>
</div>
<script src="<?php bloginfo('template_url');?>/js/jrMap.js" type="text/javascript" charset="utf-8"></script>

<?php get_footer(); ?>
