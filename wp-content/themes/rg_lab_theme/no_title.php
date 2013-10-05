<?php
/*
oouchida

Template Name: no title
*/

get_header(); ?>

<STYLE type="text/css">
<!--
.singular .entry-title, .singular .entry-header .entry-meta {
  display: none;
}
-->
</STYLE>

		<div id="primary">

			<div id="content" role="main">

				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', 'page' ); ?>

					<?php comments_template( '', true ); ?>

				<?php endwhile; // end of the loop. ?>

			</div><!-- #content -->
<?php wp_pagenavi(); ?>

		</div><!-- #primary -->

<?php get_footer(); ?>