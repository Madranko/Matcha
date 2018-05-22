<?php

define('ROOT', __DIR__ . "/../");

use Jenssegers\Blade\Blade;
use App\Http\models\AuthenticationController as AuthenticationController;

require ROOT . '/vendor/autoload.php';

include_once ROOT . '/config/settings.php';

$app = new \Slim\App($settings);

include_once ROOT . '/config/pdo_connection.php';

$container['AuthenticationController'] = function ($container) {
	return new AuthenticationController;
}

$blade = new Blade('views', 'cache');

include ROOT . '/app/Http/routes.php';

$app->run();

?>
