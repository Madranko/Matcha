<?php

define('ROOT', __DIR__ . "/../");

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use Jenssegers\Blade\Blade;

require ROOT . '/vendor/autoload.php';

include_once ROOT . '/config/settings.php';

$app = new \Slim\App($settings);

include_once ROOT . '/config/pdo_connection.php';

$blade = new Blade('views', 'cache');

include ROOT . '/app/Http/routes.php';

$app->run();

?>
