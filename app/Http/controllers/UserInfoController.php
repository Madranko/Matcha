<?php
namespace App\Http\controllers;

use \App\Http\controllers\Controller;

class UserInfoController extends Controller {

	private $pdo;

	public function __construct($pdo) {
		// $this->authModel = $this->model('AuthenticationModel', $pdo);
		// $this->jwtModel = $this->model('JwtModel', $pdo);
		$this->pdo = $pdo;
	}

	public function getInterests() {
		return json_encode("GET_INTERESTS WORKS!!!");
	}
}
?>
