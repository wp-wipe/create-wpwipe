<?php
/*
Plugin Name: %%PROJECT_NAME%%
Plugin URI: 
Description: 
Author:
Author URI:
Version: 
License: 
License URI:
Tags:
Text Domain: %%PROJECT_SLUG%%
*/

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('%%PROJECT_SLUG%%-public-style', plugin_dir_url(__FILE__) . '/dist/public.css', array(), md5_file(__DIR__ . '/dist/public.css'), 'all');
    wp_enqueue_script('%%PROJECT_SLUG%%-public-script', plugin_dir_url(__FILE__)  . '/dist/public.js', array('jquery'), md5_file(__DIR__ . '/dist/public.js'), true);
});
add_action('admin_enqueue_scripts', function () {
    wp_enqueue_style('%%PROJECT_SLUG%%-admin-style', plugin_dir_url(__FILE__)  . '/dist/admin.css', array(), md5_file(__DIR__ . '/dist/admin.css'), 'all');
    wp_enqueue_script('%%PROJECT_SLUG%%-admin-script', plugin_dir_url(__FILE__)  . '/dist/admin.js', array('jquery'), md5_file(__DIR__ . '/dist/admin.js'), true);
});
