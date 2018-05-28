<?php

use PHPUnit\Framework\TestCase;

use App\Http\models\JwtModel;

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

}

?>
