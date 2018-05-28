<?php

namespace App\Http\controllers;

use \App\Http\controllers\Controller;
use \App\Http\models\AuthenticationModel;
use \App\Http\models\JwtModel;

class AuthenticationController extends Controller {
	private $authModel;
	private $jwtModel;
	// private $JwtModel;
	private $pdo;

	public function __construct($pdo) {
		$this->authModel = $this->model('AuthenticationModel', $pdo);
		$this->jwtModel = $this->model('JwtModel', $pdo);
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
			$accessTokenExpireTime = json_encode(JwtModel::getAccessTokenExpireTime());
			$uid = $this->authModel->getUserData("login", $login, "id");
			$accessToken = JwtModel::createAccessToken($uid, $accessTokenExpireTime);
			$refreshToken = JwtModel::createRefreshToken($uid, time() + 3600);
			$this->jwtModel->storeRefreshTokenInDb($refreshToken);
			return json_encode([
				'accessToken' => $accessToken,
				'refreshToken' => $refreshToken,
				'expireTime' => $accessTokenExpireTime
			]);
		} else {
			throw new \Exception('Something went wrong');
		}
	}
}

?>
