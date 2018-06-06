<?php

use PHPUnit\Framework\TestCase;

use App\Http\models\JwtModel;
use App\Http\models\UserInfoModel;

class JwtModelTest extends TestCase {

	protected static $pdo;


	public static function setUpBeforeClass() {
		self::$pdo = new \PDO(
			'mysql:host=' . getenv('MATCHA_HOST')
			. ';unix_socket=' . getenv('MAMP_MYSQL_UNIX_SOCKET')
			. ';dbname=' . getenv('MATCHA_DATABASE'),
			getenv('MATCHA_USER'),
			getenv('MATCHA_PASSWORD')
		);
	}

	public static function tearDownAfterClass() {
		self::$pdo = null;
	}

	public function testStoreRefreshTokenToDb() {
		$jwt = new JwtModel(self::$pdo);

		$this->assertEquals("something", $jwt->getSomething('something'));
	}

	public function testGetUserAge() {
		$um = new UserInfoModel(self::$pdo);

		$this->assertEquals(19, $um->getUserAge('1999-01-28'));
	}

}

?>
