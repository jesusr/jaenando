<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<h1 class="entry-title"><?php the_title(); ?></h1>
		<h2 class="entry-subt"><?= get_field('subtitulo') ?></h2>
			<?php edit_post_link('Editar', '<p class="edit-link">', '</p>'); ?>
	</header><!-- .entry-header -->
	<div class="entry-content">
		<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'post-thumbnail', array( title => '' ) ); ?>
		<?php endif; ?>
		<?= get_field( 'songcloud' ) ?>
		<div class="texto-completo eightcol">
			<?= get_field( 'texto_completo' );?>
		</div>
		<?php get_template_part( 'content', 'aside' ); ?>
	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
