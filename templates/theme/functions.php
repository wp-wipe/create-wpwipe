<?php

add_action('wp_enqueue_scripts', function () {
    wp_enqueue_style('main-style', get_template_directory_uri() . '/dist/public.css', array(), md5_file(__DIR__ . '/dist/public.css'), 'all');
    wp_enqueue_script('main-script', get_template_directory_uri() . '/dist/public.js', array('jquery'), md5_file(__DIR__ . '/dist/public.js'), true);
});
add_action('admin_enqueue_scripts', function () {
    wp_enqueue_style('admin-style', get_template_directory_uri() . '/dist/admin.css', array(), md5_file(__DIR__ . '/dist/admin.css'), 'all');
    wp_enqueue_script('admin-script', get_template_directory_uri() . '/dist/admin.js', array('jquery'), md5_file(__DIR__ . '/dist/admin.js'), true);
});
