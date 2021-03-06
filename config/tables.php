<?php
$pdo->query("CREATE TABLE IF NOT EXISTS `users` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`login` VARCHAR(32) NOT NULL UNIQUE,
	`email` VARCHAR(255) NOT NULL UNIQUE,
	`password` VARCHAR(255) NOT NULL,
	`first_name` VARCHAR(255) NOT NULL,
	`last_name` VARCHAR(255) NOT NULL,
	`refresh_token` VARCHAR(255),
	`logout_time` VARCHAR(255),
	`activation_link` VARCHAR(255) NOT NULL UNIQUE,
	`is_activated` ENUM('0','1') NOT NULL DEFAULT '0',
	`first_time_login` ENUM('0','1') NOT NULL DEFAULT '1')");

$pdo->query("CREATE TABLE IF NOT EXISTS `interests` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`tag` VARCHAR(32) NOT NULL UNIQUE)");

$pdo->query("CREATE TABLE IF NOT EXISTS `all_user_interests` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`uid` INT (6) UNSIGNED NOT NULL,
	`tag` VARCHAR(32) NOT NULL)");

$pdo->query("CREATE TABLE IF NOT EXISTS `user_info` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`uid` INT (6) UNSIGNED NOT NULL UNIQUE,
	`gender` VARCHAR(32) NOT NULL,
	`preferences` VARCHAR(32) NOT NULL,
	`birthdate` DATE NOT NULL,
	`biography` TEXT NOT NULL,
	`profile_photo` TEXT NOT NULL,
	`rating` INT (6) UNSIGNED NOT NULL DEFAULT '0')");

$pdo->query("CREATE TABLE IF NOT EXISTS `user_photos` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`uid` INT (6) UNSIGNED NOT NULL,
	`photo` TEXT NOT NULL,
	`likes` INT (6) UNSIGNED NOT NULL DEFAULT '0')");

$pdo->query("CREATE TABLE IF NOT EXISTS `user_location` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`uid` INT (6) UNSIGNED NOT NULL,
	`latitude` FLOAT (18, 15) NOT NULL,
	`longtitude` FLOAT (18, 15) NOT NULL,
	`country` TEXT NOT NULL,
	`city` TEXT NOT NULL)");

$pdo->query("CREATE TABLE IF NOT EXISTS `likes` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`uid` INT (6) UNSIGNED NOT NULL,
	`target_uid` INT (6) UNSIGNED NOT NULL)");

$pdo->query("CREATE TABLE IF NOT EXISTS `report_list` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`uid` INT (6) UNSIGNED NOT NULL,
	`who_reported` INT (6) UNSIGNED NOT NULL)");

$pdo->query("CREATE TABLE IF NOT EXISTS `ban_list` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`uid` INT (6) UNSIGNED NOT NULL)");

$pdo->query("CREATE TABLE IF NOT EXISTS `history` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`current_id` INT (6) UNSIGNED NOT NULL,
	`target_id` INT (6) UNSIGNED NOT NULL,
	`message` ENUM('visit','block','unblock','connected','disconnected') NOT NULL)");


$pdo->query("CREATE TABLE IF NOT EXISTS `chat_list` (
	`id` INT (6) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`current_id` INT (6) UNSIGNED NOT NULL,
	`target_id` INT (6) UNSIGNED NOT NULL,
	`message` TEXT NOT NULL)");
?>
