<?php
$container = $app->getContainer();

$container['database'] = function($container) {
    $config = $container->get('settings')['db'];
    $dsn = "mysql:host={$config['host']};{$config['charset']}";
    $username = $config['username'];
    $password = $config['password'];
    return (new PDO($dsn, $username, $password, $config['options']));
};
$pdo = $container['database'];
$dbName = $container->get('settings')['db']['db_name'];
$pdo->query("CREATE DATABASE IF NOT EXISTS `$dbName`");
$pdo->query("USE `$dbName`");
?>
