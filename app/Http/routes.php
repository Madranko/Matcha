<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Origin: *');

$app->get('/', function (Request $request, Response $response, array $args) use ($blade) {
	echo $blade->make('index', [
		'name' => 'John Doe',
		'value' => 'bla bla'
	]);
});

//$app->get('/test', function (Request $request, Response $response, array $args) {
//	return json_encode([
//		'login' => 'foo',
//		'pass' => 'bar'
//	]);
//});

$app->post('/test', function (Request $request, Response $response, array $args) use($pdo){
	$statement = "INSERT INTO `test` (`login`, `password`)
		VALUES (?, ?)";
	$preparedStatement = $pdo->prepare($statement);
	$preparedStatement->execute([$request->getParams()['login'], $request->getParams()['pass']]);
});



?>
