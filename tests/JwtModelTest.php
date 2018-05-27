<?php

use PHPUnit\Framework\TestCase;

use App\Http\models\JwtModel;

class JwtModelTest extends TestCase {

	public function testStoreRefreshTokenToDb() {
		$pdo = new \PDO(
			'mysql:host=' . getenv('MATCHA_HOST'),
			getenv('MATCHA_USER'),
			getenv('MATCHA_PASSWORD'),
			[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
		);

		$jwt = new JwtModel();


		$this->assertEquals("something", $jwt->storeRefreshTokenToDb('something'));
	}

}

?>
