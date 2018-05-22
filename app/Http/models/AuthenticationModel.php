<?php
namespace App\Http\models;

class AuthenticationModel
{
	public function insertUserToDb($data) {
		$statement = "INSERT INTO `users` (`login`, `password`, `email`, `firstName`, `lastName`, `activation`)
		VALUES (?, ?, ?, ?, ?, ?)";
		$preparedStatement = $pdo->prepare($statement);
		$preparedStatement->execute([$data['Login'], $data['Password'], $data['Email'], $data['FirstName'], $data['LastName'], "string"]);
	}
}

?>
