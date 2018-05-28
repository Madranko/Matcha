<?php
namespace App\Http\models;

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

	public static function createAccessToken($uid, $accessTokenExpireTime) {
		$token = array(
			"iss" => "http://localhost:8100/",
			"uid" => $uid,
			"exp" => $accessTokenExpireTime
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

	public function getUidFromToken($token) {
		$decodedToken = JWT::decode($token, getenv('MATCHA_SECRET_KEY'), array('HS512'));
		return $decodedToken->uid;
	}

	public function storeRefreshTokenInDb($token) {
		$id = $this->getUidFromToken($token);
		$statement = "UPDATE `users` SET `refresh_token`=? WHERE `id`='$id'";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$token]);
	}
}

?>
