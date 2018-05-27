<?php
namespace App\Http\models;

class AuthenticationModel
{
	private $pdo;

	public function __construct($pdo) {
		$this->pdo = $pdo;
	}

	public function insertUserToDb($data) {
		$statement = "INSERT INTO `users` (`login`, `email`, `password`, `first_name`, `last_name`, `activation_link`)
			VALUES (?, ?, ?, ?, ?, ?)";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([
			strtolower($data['login']),
			strtolower($data['email']),
			hash('sha256', $data['password']),
			ucfirst(strtolower($data['firstName'])),
			ucfirst(strtolower($data['lastName'])),
			'activation_string'
		]);
	}

	public function isUserExists($login) {
		$statement = "SELECT `login` FROM `users` WHERE `login`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$login]);
		$isExists = $preparedStatement->fetchAll();
		if (isset($isExists[0][0])) {
			return true;
		} else {
			return false;
		}
	}

	public function isEmailExists($email) {
		$statement = "SELECT `email` FROM `users` WHERE `email`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$email]);
		$isExists = $preparedStatement->fetchAll();
		if (isset($isExists[0][0])) {
			return true;
		} else {
			return false;
		}
	}

	public function isLoginPassMatch($login, $password) {
		$statement = "SELECT `login` FROM `users` WHERE `login`=? AND `password`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$login, $password]);
		$isExists = $preparedStatement->fetchAll();
		if (isset($isExists[0][0])) {
			return true;
		} else {
			return false;
		}
	}
	//$property is a string "login" or "email" and $value is a value of property so we can get data by login or email, $need is a name of parameter you need to get,
	public function getUserData($property, $value, $need) {
		$statement = "SELECT `$need` FROM `users` WHERE `$property`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$value]);
		$result =  $preparedStatement->fetch();
		return $result[0][0];
	}
}

?>
