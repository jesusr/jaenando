<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<!--<div class="entry-author">
			<a href="<?php bloginfo('url'); ?>/author/<?php the_author_meta('user_nicename'); ?>/" rel="bookmark">
				<div class="author-avatar"><?php echo get_avatar(get_the_author_email(), '50'); ?></div>
				<div class="author-name"><?php the_author_meta('user_nicename'); ?></div>
			</a>
		</div>-->
		<h1 class="entry-title-prop"><?php the_title(); ?></h1>
		<div class="entry-meta">
			<?php echo '<time class="entry-date" pubdate>' . get_the_date('j F Y') . '</time>'; ?>
			<span class="sep"> | </span>
			<?php the_tags( ' ');?>
			<span class="sep"> | </span>
			<?php the_category( ', ' ) ?>
			<?php edit_post_link('Editar', '<span class="sep"> | </span><span class="edit-link">', '</span>'); ?>
		</div><!-- .entry-meta -->
	</header><!-- .entry-header -->
	<div class="entry-content eightcol">
		<div class="texto-completo">
			<?php if ( has_post_thumbnail() ) : ?>
			<?php the_post_thumbnail( 'post-thumbnail', array( title => '' ) ); ?>
			<?php endif; ?>
			<?php the_content(); ?>
		</div>
		<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'toolbox' ), 'after' => '</div>' ) ); ?>
		<?php comments_template( '', true ); ?>
	</div><!-- .entry-content -->
	<div class="fourcol last">
		<ul id="sidebar">
			<?php dynamic_sidebar( 'right-sidebar' ); ?>
		</ul>
	</div>
</article><!-- #post-<?php the_ID(); ?> -->
