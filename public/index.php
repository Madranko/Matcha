<?php

define('ROOT', __DIR__ . "/../");

require '../vendor/autoload.php';

include_once ROOT . '/config/settings.php';

$app = new \Slim\App($settings);

include_once ROOT . '/config/pdo_connection.php';

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$container['view'] = new \Slim\Views\PhpRenderer('../public/views');

$app->get('/hello', function (Request $request, Response $response, array $args) {
	return $this->view->render($response, 'index.html');
});

$app->run();

?>
