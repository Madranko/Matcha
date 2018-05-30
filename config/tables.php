<?php
$pdo->query("CREATE TABLE IF NOT EXISTS `users` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`login` VARCHAR(32) NOT NULL UNIQUE,
	`email` VARCHAR(255) NOT NULL UNIQUE,
	`password` VARCHAR(255) NOT NULL,
	`first_name` VARCHAR(255) NOT NULL,
	`last_name` VARCHAR(255) NOT NULL,
	`refresh_token` VARCHAR(255),
	`activation_link` VARCHAR(255) NOT NULL UNIQUE,
	`is_activated` ENUM('0','1') NOT NULL DEFAULT '0',
	`first_time_login` ENUM('0','1') NOT NULL DEFAULT '1')");

$pdo->query("CREATE TABLE IF NOT EXISTS `interests` (
	`tag` VARCHAR(32) NOT NULL UNIQUE)");
?>
