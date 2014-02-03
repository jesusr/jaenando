<?php get_header(); ?>
	<div id="content" class="">
		<div class="row">
			<div class="twocol"></div> 
			<div id="content" role="main">
				<div id="inner-content" class="eightcol">
					<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
					<?php get_template_part( 'content', 'single-podcast' ); ?>
					<?php endwhile; // end of the loop. ?>
				</div>
			</div>
			<div class="twocol last"></div> 
		</div>
	</div>			
<?php get_footer(); ?>
