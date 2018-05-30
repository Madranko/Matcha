<?php
namespace App\Http\controllers;

use \App\Http\controllers\Controller;
use \App\Http\models\UserInfoModel;

class UserInfoController extends Controller {

	private $pdo;

	public function __construct($pdo) {
		$this->userInfoModel = $this->model('UserInfoModel', $pdo);
		// $this->jwtModel = $this->model('JwtModel', $pdo);
		$this->pdo = $pdo;
	}

	public function getInterests() {
		return json_encode($this->userInfoModel->getAllInterests());
	}
}
?>
