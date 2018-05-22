<?php

namespace App\Http\controllers;

use App\Http\controllers\Controller as Controller;
use App\Http\models\AuthenticationModel as AuthenticationModel;

class AuthenticationController extends Controller {

	private $authModel = $this->model('AuthenticationModel');

	public function signUp($request, $response) {
		$data = $request->getParams();

		if ($this->authModel->isUserExists($data['login'], $data['pass'])) {
			throw new Exception('User is already exists');
		}
		$this->authModel->indertUserToDb
	}

	public function login() {

	}
}

?>
