<?php

namespace App\Http\controllers;

use \App\Http\controllers\Controller;
use \App\Http\models\AuthenticationModel;

class AuthenticationController extends Controller {
	private $authModel;
	private $pdo;
	
	public function __construct($pdo) {
		$this->authModel = $this->model('AuthenticationModel', $pdo);
		$this->pdo = $pdo;
	}

	public function signUp($data) {
		if (
			$this->authModel->isUserExists(strtolower($data['login'])) ||
			$this->authModel->isEmailExists(strtolower($data['email']))
		) {
			throw new \Exception('Login or Email is already in use');
		}
		$this->authModel->insertUserToDb($data);
	}

	public function login($login, $password) {
		if ($this->authModel->isLoginPassMatch(
			strtolower($login), hash('sha256', $password)
		)) {
			return json_encode('user can login');
		} else {
			throw new \Exception('Something went wrong');
		}
	}
}

?>
