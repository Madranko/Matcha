<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

use \App\Http\controllers\Controller as Controller;
use \App\Http\controllers\AuthenticationController as AuthenticationController;

header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Origin: *');


$app->post(
	'/api/signup',
	function (Request $request, Response $response, array $args) use ($pdo) {
		$authController = new AuthenticationController($pdo);
		return $authController->signUp($request->getParams());
	}
);

$app->post(
	'/api/login',
	function (Request $request, Response $response, array $args) use ($pdo) {
		$authController = new AuthenticationController($pdo);
		$data = $request->getParams();
		return $authController->login($data['login'], $data['password']);
	}
);

$app->post(
	'/api/check-tokens',
	function (Request $request, Response $response, array $args) use ($pdo) {
		$authController = new AuthenticationController($pdo);
		$data = $request->getParams();
		return $authController->checkTokens($data['refreshToken'], $data['accessToken'], $data['expireTime']);
	}
);

$app->post(
	'/api/delete-refresh-token',
	function (Request $request, Response $response, array $args) use ($pdo) {
		$authController = new AuthenticationController($pdo);
		$data = $request->getParams();
		return $authController->deleteRefreshTokenFromDb($data['refreshToken']);
	}
);

//$app->post('/signup', 'AuthenticationController:signUp') use ($pdo);

$app->get('/', function (Request $request, Response $response, array $args) use ($blade) {
	echo $blade->make('index', [
		'name' => 'John Doe',
		'value' => 'bla bla'
	]);
});

?>
