<?php
/*
Template Name: QueEs
*/
?>
<?php get_header(); ?>
<div id="content" class="">
	<div class="row">
		<div class="twocol"></div> 
	 	<div id="inner-content" class="eightcol">
	 		<?php if (have_posts()) : while (have_posts()) : the_post();?>
			<div id="post-inicio" class="post">
				<div class="entrytext">
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
<?php get_footer(); ?>