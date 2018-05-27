<?php
namespace App\Http\models;

use \Firebase\JWT\JWT;

class JwtModel
{
	public static function getAccessTokenExpireTime() {
		return time() + 1800;
	}

	public static function createAccessToken($uid, $accessTokenExpireTime) {
		$key = "example_key";
		$token = array(
			"iss" => "http://localhost:8100/",
			"uid" => $uid,
			"exp" => $accessTokenExpireTime
		);

		$jwt = JWT::encode($token, $key, 'HS512');
		return $jwt;
	}

	public static function createRefreshToken($uid, $refreshTokenExpireTime) {
		$key = "example_key";
		$token = array(
			"uid" => $uid,
			"exp" => $refreshTokenExpireTime
		);

		$jwt = JWT::encode($token, $key, 'HS512');
		return $jwt;
	}
}

?>
