<?php

// JS・CSSファイルを読み込む
function add_files() {
	// WordPress提供のjquery.jsを読み込まない
	if (!is_admin()) {
        wp_deregister_script('jquery');
    }
 
	// jQueryの読み込み
	wp_enqueue_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js', "", "20160608", false );
	
	// サイト共通のCSSの読み込み
	wp_enqueue_style( 'main', get_template_directory_uri() . '/dist/style.css', "", '' );

	// サイト共通JS読み込み
	wp_enqueue_script( 'smart-script', get_template_directory_uri() . '/dist/bundle.js', '', true );
}
add_action('wp_enqueue_scripts', 'add_files');