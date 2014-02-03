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
	 	<div id="inner-content" class="eightcol">
	 		<?php if (have_posts()) : while (have_posts()) : the_post();?>
			<div id="post-inicio" class="post">
				<div class="entrytext">
                    <div id="mapa" viewBox="0 0 300 300" class="eightcol"></div>
                    <div id="more" class="fivecol last"></div>
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
<script src="<?php bloginfo('template_url');?>/js/raphael-min.js" type="text/javascript" charset="utf-8"></script>
<script src="<?php bloginfo('template_url');?>/js/destinos.js.js" type="text/javascript" charset="utf-8"></script>
<?php get_footer(); ?>