<?php
/**
 * Template Name: Sidebar Template with posts
 */

get_header(); ?>


		<div id="primary">
			<div id="content" role="main">
            <?php query_posts('posts_per_page=10'); ?>
			<?php if ( have_posts() ) : ?>

              <?php //twentyeleven_content_nav( 'nav-above' ); ?>

				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>
                    <?php // get_template_part( 'content', get_post_format() ); ?>
                    <?php get_template_part( 'content', 'page' ); ?>
				<?php endwhile; ?>

              <?php //twentyeleven_content_nav( 'nav-below' ); ?>

			<?php else : ?>

				<article id="post-0" class="post no-results not-found">
					<header class="entry-header">
						<h1 class="entry-title"><?php _e( 'Nothing Found', 'twentyeleven' ); ?></h1>
					</header><!-- .entry-header -->
                    <hr id="title_partition" />

					<div class="entry-content">
						<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'twentyeleven' ); ?></p>
						<?php get_search_form(); ?>
					</div><!-- .entry-content -->
				</article><!-- #post-0 -->

			<?php endif; ?>

			</div><!-- #content -->
<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>

		</div><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>