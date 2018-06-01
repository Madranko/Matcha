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

	public function login($data) {
		$login = $data['login'];
		$password = $data['password'];
		if ($this->authModel->isLoginPassMatch(
			strtolower($login), hash('sha256', $password)
		)) {
			$uid = $this->authModel->getUserData("login", $login, "id");
			$firsTimeLogin = $this->authModel->getUserData("login", $login, "first_time_login");
			$newTokens = JwtModel::refreshToken($uid, $firsTimeLogin);
			$this->jwtModel->storeRefreshTokenInDb($newTokens['refreshToken']);
			return json_encode($newTokens);
		} else {
			throw new \Exception('Something went wrong');
		}
	}

	public function checkTokens($data) {
		$refreshToken = $data['refreshToken'];
		$accessToken = $data['accessToken'];
		$accessTokenExpireTime = $data['expireTime'];

		if ($accessTokenExpireTime > time()) {
			if ($id = JwtModel::getUidFromToken($refreshToken)) {
				$tokenFromDb = $this->authModel->getUserData("id", $id, "refresh_token");
				if (JwtModel::isRefreshTokenValid($refreshToken, $tokenFromDb) && JwtModel::isAccessTokenValid($accessToken)) {
					$firsTimeLogin = $this->authModel->getUserData("id", $id, "first_time_login");
					$newTokens = JwtModel::refreshToken($id, $firsTimeLogin);
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
			$firsTimeLogin = $this->authModel->getUserData("id", $id, "first_time_login");
			$newTokens = JwtModel::refreshToken($id, $firsTimeLogin);
			$this->jwtModel->storeRefreshTokenInDb($newTokens['refreshToken']);
			return json_encode($newTokens);
		}
	}

	public function deleteRefreshTokenFromDb($data) {
		$refreshToken = $data['refreshToken'];
		$this->jwtModel->deleteRefreshTokenFromDb($refreshToken);
	}
}
?>
