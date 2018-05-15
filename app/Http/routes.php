<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

    $container['view'] = new \Slim\Views\PhpRenderer(ROOT . 'public/views');

    $app->get('/', function (Request $request, Response $response, array $args) {
        return $this->view->render($response, 'index.html');
    });
?>
