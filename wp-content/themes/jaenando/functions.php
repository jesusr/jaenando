<?php
function register_my_menus() {
  register_nav_menus(
    array(
      'menu-meta' => __( 'Menu meta' ),
      'menu-main' => __( 'Menu main' )
    )
  );
}
add_action( 'init', 'register_my_menus' );

/*Podcasts Type*/
function podcast_custom_init() {
  $labels = array(
    'name' => 'Podcasts',
    'singular_name' => 'Podcast',
    'add_new' => 'Añadir Nuevo',
    'add_new_item' => 'Añadir Nuevo Podcast',
    'edit_item' => 'Editar Podcast',
    'new_item' => 'Nuevo Podcast',
    'all_items' => 'Todos los Podcasts',
    'view_item' => 'Ver Podcast',
    'search_items' => 'Buscar Podcast',
    'not_found' =>  'No encontrado',
    'not_found_in_trash' => 'No se han encontrado Podcasts en la papelera', 
    'parent_item_colon' => '',
    'menu_name' => 'Podcasts'
  );

  $args = array(
    'labels' => $labels,
    'public' => true,
    'publicly_queryable' => true,
    'show_ui' => true, 
    'show_in_menu' => true, 
    'query_var' => true,
    'rewrite' => array( 'slug' => 'podcast' ),
    'capability_type' => 'post',
    'has_archive' => true, 
    'hierarchical' => false,
    'menu_position' => null,
    'supports' => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'custom-fields' ),
    'taxonomies' => array('category')
  ); 
  register_post_type( 'podcast', $args );
  flush_rewrite_rules( false );
}
add_action( 'init', 'podcast_custom_init' );
add_theme_support( 'post-thumbnails', array( 'post','slides','page','podcast') );
register_sidebar( array(
    'id'          => 'right-sidebar',
    'name'        => __( 'Right Sidebar', $text_domain ),
    'description' => __( 'Sidebar en el lado derecho de Propuestas.', $text_domain ),
) );
?>