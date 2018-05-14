<?php
$settings = [
    'settings' => [
        'displayErrorDetails' => true,
        'db' => [
            'host' => getenv('MATCHA_HOST'),
            'db_name' => getenv('MATCHA_DATABASE'),
            'username' => getenv('MATCHA_USER'),
            'password' => getenv('MATCHA_PASSWORD'),
            'charset' => 'utf8',

            'options' => [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                ],
        ],

    ],
];
?>
