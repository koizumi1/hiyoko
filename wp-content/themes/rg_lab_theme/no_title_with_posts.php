<?php
/*
oouchida

Template Name: no title with post
*/

get_header(); ?>


         <?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'content', 'page' ); ?>

			<?php comments_template( '', true ); ?>

		 <?php endwhile; // end of the loop. ?>

		<div id="primary">
			<div id="content" role="main">
              <div id="titles" style="margin: 0 auto;width: 100%; font-size: 14px;">
                   <?php $my_query = new WP_Query('showposts=5'); ?>
                  <ul>
                     <?php if ($my_query->have_posts()) : ?>
                     <?php while ($my_query->have_posts()) : $my_query->the_post(); ?>
                     <li style="margin-bottom: -13px;">
                       <div style="font-weight: bold"><a href="<?php the_permalink() ?>"><?php the_title(); ?> : <?php the_time('Y年m月d日（D）'); ?></a></div>
                       <div style="margin-left: 3%"><?php the_excerpt() ?></div>
　　              </li>
                      <?php endwhile; ?>
                      <?php wp_reset_query(); ?>
                      <?php endif; ?>
                   </ul>
                 </div>

<?php if(function_exists('wp_pagenavi')) { wp_pagenavi(); } ?>
			</div><!-- #content -->
		</div><!-- #primary -->



<?php get_sidebar(); ?>
<?php get_footer(); ?>