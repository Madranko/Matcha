<?php
namespace App\Http\models;

class AuthenticationModel
{
	private $pdo;

	public function __construct($pdo) {
		$this->pdo = $pdo;
	}

	public function insertUserToDb($data) {
		// $activationLink = hash('md5', rand(1000, 5000));
		$statement = "INSERT INTO `users` (`login`, `email`, `password`, `first_name`, `last_name`, `activation_link`)
		VALUES (?, ?, ?, ?, ?, ?)";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([
			strtolower($data['login']),
			strtolower($data['email']),
			hash('sha256', $data['password']),
			ucfirst(strtolower($data['firstName'])),
			ucfirst(strtolower($data['lastName'])),
			"link"
		]);
		return ($this->sendLinkOnEmail('email', $data['email']));
	}

	public function sendLinkOnEmail($property, $value) {
		$activationLink = hash('md5', rand(1000, 5000));
		$email = $this->getUserData("login", $value, "email");
		$statement = "UPDATE `users` SET `activation_link`=? WHERE `$property`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$activationLink, $value]);
		$subject = 'Signup | Verification';
		$message = 'Thanks for signing up!
		Your account has been created, you can login after you have activated your account by pressing the url below.
		http://localhost:8100/api/authorization/verify?email='.$email.'&hash='.$activationLink.'';
		$header = 'MIME-version: 1.0' . "\r\n";
		$header .= 'Content-Type:text/html;charset=UTF-8' . "\r\n";
		$header .= 'From: noreply@matcha.com' . "\r\n";
		if (mail($email, $subject, $message, $header)) {
			return json_encode("Check your mail!\n");
		} else {
			return json_encode("Something wrong!\n");
		}
	}

	public function isAccountActivated($login) {
			$statement = "SELECT `is_activated` FROM `users` WHERE `login`=?";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$login]);
			$fetch = $preparedStatement->fetch();
			if ($fetch[0] == '1') {
				return true;
			} else {
				 return false;
			}
	}

	public function activateAccount($email, $hash)
	{
		$statement = "SELECT * FROM `users` WHERE `email`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$email]);
		$fetch = $preparedStatement->fetch();
		// return $fetch['0'];
		if ($fetch['activation_link'] === $hash) {
			$statement = "UPDATE `users` SET `is_activated`='1' WHERE `email`=?";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$email]);
			echo "You can login now";
		} else {
			echo "404 Not Found";
		}
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
		return $result[0];
	}
}

?>
