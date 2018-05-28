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
			$uid = $this->authModel->getUserData("login", $login, "id");
			$newTokens = JwtModel::refreshToken($uid);
			$this->jwtModel->storeRefreshTokenInDb($newTokens['refreshToken']);
			return json_encode($newTokens);
		} else {
			throw new \Exception('Something went wrong');
		}
	}

	public function checkTokens($refreshToken, $accessToken, $accessTokenExpireTime) {
		if ($accessTokenExpireTime > time()) {
			if ($id = JwtModel::getUidFromToken($refreshToken)) {
				$tokenFromDb = $this->authModel->getUserData("id", $id, "refresh_token");
				if (JwtModel::isRefreshTokenValid($refreshToken, $tokenFromDb) && JwtModel::isAccessTokenValid($accessToken)) {
					$newTokens = JwtModel::refreshToken($id);
					$this->jwtModel->storeRefreshTokenInDb($newTokens['refreshToken']);
					return json_encode($newTokens);
				} else {
					throw new \Exception("Invalid token");
				}
			} else {
				throw new \Exception("No id in RefreshToken");
			}
		} else {
			$id = JwtModel::getUidFromToken($refreshToken);
			$newTokens = JwtModel::refreshToken($id);
			$this->jwtModel->storeRefreshTokenInDb($newTokens['refreshToken']);
			return json_encode($newTokens);
		}
	}
}
?>
