<?php
namespace App\Http\models;

use \Firebase\JWT\JWT;

class JwtModel
{
	//private $pdo;

	//public function __construct($pdo) {
	//	$this->pdo = $pdo;
	//}

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

	public function storeRefreshTokenToDb($refreshToken) {
		//$statement = "SELECT * FROM `users`";
		//$preparedStatement = $this->pdo->prepare($statement);
		//$preparedStatement->execute();
		//$result = $preparedStatement->fetchAll();
		//return $result;
		$decoded = JWT::decode($refreshToken, getenv('MATCHA_SECRET_KEY'), array('HS512'));
		return $decoded;
	}
}

?>
