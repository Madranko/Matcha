<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use \App\Http\controllers\Controller as Controller;
use \App\Http\controllers\AuthenticationController as AuthenticationController;
use \App\Http\controllers\UserInfoController as UserInfoController;

header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Origin: *');

$app->group('/api', function () use ($app, $pdo) {
	$app->group('/authorization', function() use($app, $pdo) {
		$app->post(
			'/{method}',
			function (Request $request, Response $response, array $args) use ($pdo) {
				$authController = new AuthenticationController($pdo);
				$method = $args['method'];
				// return json_encode($method);
				return $authController->$method($request->getParams());
			}
		);
	});

	$app->group('/user-info', function () use ($app, $pdo) {
		$app->get(
			'/{method}',
			function (Request $request, Response $response, array $args) use ($pdo) {
				// return json_encode(var_export($pdo, true));
				$userInfoController = new UserInfoController($pdo);
				$method = $args['method'];
				// return json_encode($method);
				return $userInfoController->$method();
				// return json_encode($method);
			}
		);
	});
});

$app->get('/', function (Request $request, Response $response, array $args) use ($blade) {
	echo $blade->make('index', [
		'name' => 'John Doe',
		'value' => 'bla bla'
	]);
});

?>
