<?php get_header(); ?>

		<section id="primary">
			<div id="content" role="main">
				Esto es el index
				<?php
					query_posts($query_string . '&category_name=canciones,albumes,especiales,&posts_per_page=1');
					$i = 0;
					while ( have_posts() ) : the_post();
						get_template_part( 'content', get_post_format() );
					endwhile;
				?>
			</div><!-- #content -->
		</section><!-- #primary -->

<?php get_footer(); ?>