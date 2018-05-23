<?php
namespace App\Http\models;

class AuthenticationModel
{
	private $pdo;

	public function __construct($pdo) {
		$this->pdo = $pdo;
	}

	public function insertUserToDb($data) {
		$statement = "INSERT INTO `users` (`login`, `email`, `password`, `firstName`, `lastName`, `activation`, `restore`)
			VALUES (?, ?, ?, ?, ?, ?, ?)";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$data['login'],  $data['email'], $data['password'], $data['firstName'], $data['lastName'], 'activation_string', 'restore_string']);
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
}

?>
