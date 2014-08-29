<?php
/**
* Template Name: Category
* @package Jaenando
* @since Jaenando 0.1
**/
?>
<?php get_header(); ?>

	<div id="content" class="">
		<div class="row">
			<div class="twocol"></div> 
			<div id="content" role="main">
				<div id="inner-content" class="sixcol">
					<?php /* Start the Loop */ ?>
					<?php while ( have_posts() ) : the_post(); ?>					
						<?php get_template_part( 'content', 'summary' ); ?>
					<?php endwhile; ?>
					<?php /* Display navigation to next/previous pages when applicable */ ?>
					<?php if (  $wp_query->max_num_pages > 1 ) : ?>
						<nav id="nav-below">
							<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'toolbox' ) ); ?></div>
							<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'toolbox' ) ); ?></div>
						</nav><!-- #nav-below -->
					<?php endif; ?>				
				</div>
			</div>
			<ul id="sidebar" class="threecol">
				<?php dynamic_sidebar( 'right-sidebar' ); ?>
			</ul>
			<div class="onecol last"></div> 
		</div>
	</div>	


<?php get_footer(); ?>
