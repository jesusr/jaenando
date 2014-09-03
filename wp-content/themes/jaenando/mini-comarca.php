<?php
/**
* Template Name: mini-comarca
* @package Jaenando
* @since Jaenando 0.1
**/
require('../../../wp-load.php');
$comarcas=array("sierrasur" => "Sierra Sur","condado"=>"El Condado","sierramorena"=>"Sierra Morena","campina"=>"La Campiña","lasvillas"=>"Las Villas","laloma"=>"La Loma","cazorla"=>"Cazorla","jaen"=>"Jaén","sierramagina"=>"Sierra Mágina","sierrasegura"=>"Sierra de Segura");
?>
			<div id="comarca">
				<div id="" class="detalle-<?php echo $_GET["cname"];?>">
					<?php echo '<h1>Comarca de '.$comarcas[$_GET["cname"]].'</h1>';?>
			 		<?php 
			 			$aux = $_GET["cname"];
						query_posts(array('post_type' => 'podcast','category_name'=>$aux)); 
					?>
					<?php while ( have_posts() ) : the_post(); ?>
						<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<header class="entry-header">
								<h2 class="entry-title-prop"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'toolbox' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
								<div class="entry-meta">
 									<?php echo get_the_post_thumbnail( $post_id, 'medium', $attr ); ?>
								</div><!-- .entry-meta -->
								<p class="entry-excerpt"><?php get_the_excerpt();?></p>
								<p class="btns"><a href="<?php the_permalink(); ?>" title="<?php printf( esc_attr__( 'Permalink to %s', 'toolbox' ), the_title_attribute( 'echo=0' ) ); ?>" rel="bookmark"><i class="flaticon-page35"></i></a>
								<a href="" id="player_call"><i class="flaticon-play11"></i></a></p>
							</header><!-- .entry-header -->
							<div class="texto-completo">
								<?php the_excerpt( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'toolbox' ) ); ?>
								<p class="leermas"><a href="<?php the_permalink();?>">Más</a></p>
							</div><!-- .entry-summary -->


						</article><!-- #post-<?php the_ID(); ?> -->

					<?php endwhile; ?>
				</div>
			</div>