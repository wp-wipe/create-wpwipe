<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head() ?>
  <script>
    window.__admin_ajax = '<?= admin_url('admin-ajax.php'); ?>';
  </script>
</head>

<body <?php body_class(); ?>>