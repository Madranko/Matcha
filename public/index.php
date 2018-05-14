<?php
    define('ROOT', __DIR__ . "/../");
    require '../vendor/autoload.php';
    include_once ROOT . '/config/settings.php';
    $app = new \Slim\App($settings);
    include_once ROOT . '/config/pdo_connection.php';
?>
