<?php
namespace App\Http\models;

class UserInfoModel {
	private $pdo;

	public function __construct($pdo) {
		$this->pdo = $pdo;
	}

	public function getAllInterests() {
		$result = array();
		$statement = "SELECT `tag` FROM `interests`";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute();
		$fetch =  $preparedStatement->fetchAll();
		foreach ($fetch as $value) {
			$result[] = $value[0];
		}
		return $result;
	}

	public function putNewInterestsToBase($interests) {
		foreach ($interests as $tag) {
			$statement = "SELECT `tag` FROM `interests` WHERE `tag`=?";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$tag]);
			$fetch =  $preparedStatement->fetch();
			if (!$fetch[0]) {
				$statement = "INSERT INTO `interests` (`tag`) VALUE (?)";
				$preparedStatement = $this->pdo->prepare($statement);
				$preparedStatement->execute([$tag]);
			}
		}
	}

	public function storeUserInterests($interests, $uid) {
		$statement = "DELETE FROM `all_user_interests` WHERE `uid`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$uid]);
		foreach ($interests as $tag) {
			$statement = "INSERT INTO `all_user_interests` (`uid`, `tag`) VALUE (?, ?)";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$uid, $tag]);
		}
	}

	public function storeInterests($allTags, $uid) {
		$this->putNewInterestsToBase($allTags);
		$this->storeUserInterests($allTags, $uid);
	}

	public function checkIfAlreadyExists($id) {
		$statement = "SELECT * FROM `user_info` WHERE `uid`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$id]);
		$fetch = $preparedStatement->fetch();
		if ($fetch[0]) {
			return true;
		} else {
			return false;
		}
	}

	public function storeInfo($data, $id) {
		// $birthdate = date("Y-m-d", $data['birthdate']);
		$unix_date = strtotime($data['birthdate']);
		$birthdate = date("Y-m-d", $unix_date);
		// return $birthdate;
		// return json_encode($this->checkIfAlreadyExists($id));
		if ($this->checkIfAlreadyExists($id)) {
			$statement = "UPDATE `user_info` SET `gender`=?, `preferences`=?, `birthdate`=?, `biography`=? WHERE `uid`=?";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$data['gender'], $data['preferences'], $birthdate, $data['biography'], $id]);
		} else {
			$statement = "INSERT INTO `user_info` (`uid`, `gender`, `preferences`, `birthdate`, `biography`) VALUE (?, ?, ?, ?, ?)";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$id, $data['gender'], $data['preferences'], $birthdate, $data['biography']]);
		}

	}
}
?>
