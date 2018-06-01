<?php
namespace App\Http\models;

use \App\Http\models\AuthenticationModel;
use \Firebase\JWT\JWT;

class JwtModel
{
	private $pdo;

	public function __construct($pdo) {
		$this->pdo = $pdo;
	}

	public static function getAccessTokenExpireTime() {
		return time() + 1800;
	}

	public static function createAccessToken($uid, $accessTokenExpireTime, $firsTimeLogin) {
		$token = array(
			"iss" => "http://localhost:8100/",
			"uid" => $uid,
			"exp" => $accessTokenExpireTime,
			"firstTimeLogin" => $firsTimeLogin
		);

		$jwt = JWT::encode($token, getenv('MATCHA_SECRET_KEY'), 'HS512');
		return $jwt;
	}

	public static function createRefreshToken($uid, $refreshTokenExpireTime) {
		$token = array(
			"uid" => $uid,
			"exp" => $refreshTokenExpireTime
		);
		$jwt = JWT::encode($token, getenv('MATCHA_SECRET_KEY'), 'HS512');
		return $jwt;
	}

	public static function getUidFromToken($token) {
		$decodedToken = JWT::decode($token, getenv('MATCHA_SECRET_KEY'), array('HS512'));
		return $decodedToken->uid;
	}

	public static function getFirstAccessFromToken($token) {
		$decodedToken = JWT::decode($token, getenv('MATCHA_SECRET_KEY'), array('HS512'));
		return $decodedToken->firstTimeLogin;
	}

	public function storeRefreshTokenInDb($token) {
		$id = $this->getUidFromToken($token);
		$statement = "UPDATE `users` SET `refresh_token`=? WHERE `id`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$token, $id]);
	}

	public function deleteRefreshTokenFromDb($token) {
		$id = $this->getUidFromToken($token);
		$statement = "UPDATE `users` SET `refresh_token`=? WHERE `id`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([null, $id]);
	}

	public function getSomething($something) {
		return $something;
	}

	public static function isRefreshTokenValid($refreshToken, $tokenFromDb) {
		if ($refreshToken === $tokenFromDb) {
			return true;
		} else {
			return false;
		}
	}

	public static function isAccessTokenValid($accessToken) {
		if (JWT::decode($accessToken, getenv('MATCHA_SECRET_KEY'), array('HS512'))) {
			return true;
		} else {
			return false;
		}
	}

	public static function refreshToken($id, $firsTimeLogin) {
		$newAccessTokenExpireTime = self::getAccessTokenExpireTime();
		$newAccessToken = self::createAccessToken($id, $newAccessTokenExpireTime, $firsTimeLogin);
		$newRefreshToken = self::createRefreshToken($id, time() + 3600);
		return [
			'accessToken' => $newAccessToken,
			'refreshToken' => $newRefreshToken,
			'expireTime' => $newAccessTokenExpireTime,
			'firstTimeLogin' => $firsTimeLogin,
			'id' => $id
		];
	}
}

?>
