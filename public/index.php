<?php

define('ROOT', __DIR__ . "/../");

use Jenssegers\Blade\Blade;
use \App\Http\controllers\AuthenticationController;

session_start();

require ROOT . '/vendor/autoload.php';

include_once ROOT . '/config/settings.php';

$app = new \Slim\App($settings);

include_once ROOT . '/config/pdo_connection.php';

$blade = new Blade('views', 'cache');

include ROOT . '/app/Http/routes.php';

$app->run();

?>
