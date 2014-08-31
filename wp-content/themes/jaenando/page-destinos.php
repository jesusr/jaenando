<?php
/**
* Template Name: Destinos
* @package Jaenando
* @since Jaenando 0.1
**/
?>
<?php get_header(); ?>


<script type="text/javascript">
 
</script>
<div id="content" class="">
	<div class="row">
		<div class="twocol"></div> 
	 	<div id="inner-content" class="eightcol cf">
	 		<?php if (have_posts()) : while (have_posts()) : the_post();?>
			<div id="post-inicio" class="post cf">
				<div class="entrytext">
					<div id="mapa" viewbox="0 0 500 500" class="sevencol">
					</div>                    
					<div id="more" class="fivecol last">
					</div>
					<?php the_content('<p>Read the rest of this page &raquo;</p>'); ?>
				</div>
			</div>
			<?php endwhile; endif; ?>
			<?php edit_post_link('Editar', '<p class="edit-link">', '</p>'); ?>
			<div id="main">
			</div>
		</div>
		<div class="twocol last"></div> 
	</div>
</div>
<script src="<?php bloginfo('template_url');?>/js/jrMap.js" type="text/javascript" charset="utf-8"></script>
<?php get_footer(); ?>
