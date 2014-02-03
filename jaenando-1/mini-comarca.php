<?php
/**
* Template Name: mini-comarca
* @package Jaenando
* @since Jaenando 0.1
**/
?>
			<div id="comarca">
				<div id="" class="">
			 		<?php query_posts('category_name='+$_GET["cname"]); ?>
					<?php while ( have_posts() ) : the_post(); ?>					
						<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<header class="entry-header">
								<h1 class="entry-title-prop"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'toolbox' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h1>
								<div class="entry-meta">
									<?php echo '<time class="entry-date" pubdate>' . get_the_date('j F Y') . '</time>'; ?>
									<span class="sep"> | </span>
									<?php the_tags( ' ');?>
									<span class="sep"> | </span>
									<?php the_category( ', ' ) ?>
									<?php edit_post_link('Editar', '<span class="sep"> | </span><span class="edit-link">', '</span>'); ?>
								</div><!-- .entry-meta -->
							</header><!-- .entry-header -->
							<div class="texto-completo">
								<?php the_excerpt( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'toolbox' ) ); ?>
								<p class="leermas"><a href="<?php the_permalink();?>">Leer M&aacute;s</a></p>
							</div><!-- .entry-summary -->


						</article><!-- #post-<?php the_ID(); ?> -->

					<?php endwhile; ?>
				</div>
			</div>