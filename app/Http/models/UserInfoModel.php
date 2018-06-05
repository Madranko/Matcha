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

	public function updateFirstTimeLogin($id) {
		$statement = "UPDATE `users` SET `first_time_login`=? WHERE `id`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute(['0', $id]);
	}

	public function putPhotoInFolder($imgCoded) {
		$image_folder = "images/";
		$img = str_replace('data:image/png;base64,', '', $imgCoded);
		$img = str_replace(' ', '+', $img);
		$data = base64_decode($img);
		$name = mktime() . ".png";
		$file = $image_folder . $name;
		file_put_contents($file, $data);
		$path = "images/" . $name;
		return $path;
	}

	public function getProfilePhoto($id) {
		$statement = "SELECT `profile_photo` FROM `user_info` WHERE `uid`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$id]);
		$fetch = $preparedStatement->fetch();
		if ($fetch[0]) {
			// $res = file_get_contents($fetch['profile_photo']);
			$path = $fetch['profile_photo'];
			$type = pathinfo($path, PATHINFO_EXTENSION);
			$data = file_get_contents($path);
			$base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
			return $base64;
		}
	}

	public function storeInfo($data, $id) {
		$photoPath = $this->putPhotoInFolder($data['photo']);
		$unix_date = strtotime($data['birthdate']);
		$birthdate = date("Y-m-d", $unix_date);
		if ($this->checkIfAlreadyExists($id)) {
			$statement = "UPDATE `user_info` SET `gender`=?, `preferences`=?, `birthdate`=?, `biography`=?, `profile_photo`=? WHERE `uid`=?";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$data['gender'], $data['preferences'], $birthdate, $data['biography'], $photoPath, $id]);
		} else {
			$statement = "INSERT INTO `user_info` (`uid`, `gender`, `preferences`, `birthdate`, `biography`, `profile_photo`) VALUE (?, ?, ?, ?, ?, ?)";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$id, $data['gender'], $data['preferences'], $birthdate, $data['biography'], $photoPath]);
		}
	}

	public function getUserTags($id)
	{
		$statement = "SELECT `tag` FROM `all_user_interests` WHERE `uid`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$id]);
		$fetch = $preparedStatement->fetchAll();
		$tags = array();
		foreach ($fetch as $tag) {
			$tags[] = $tag['tag'];
		}
		return $tags;
	}

	public function getShortInfo($id) {
		$statement = "SELECT users.first_name, users.last_name, users.login, user_info.rating FROM `users`
		INNER JOIN `user_info` ON users.id=user_info.uid
		WHERE users.id=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$id]);
		$info = $preparedStatement->fetchAll();
		$shortInfo = array(
			'firstName' => $info[0]['first_name'],
			'lastName' => $info[0]['last_name'],
			'login' => $info[0]['login'],
			'rating' => $info[0]['rating']
		);
		$tags = $this->getUserTags($id);
		return [
			'info' => $shortInfo,
			'tags' => $tags
		];
	}

	public function getMoreInfo($id) {
		$date = $this->getUserData('birthdate', 'user_info', 'uid', $id);
		$unix_date = strtotime($date);
		$birthdate = date("d F Y", $unix_date);
		return [
			'gender' => $this->getUserData('gender', 'user_info', 'uid', $id),
			'preferences' => $this->getUserData('preferences', 'user_info', 'uid', $id),
			'birthdate' => $birthdate
		];
	}

	public function storePhotoInDb($photoPath, $uid) {
		$statement = "SELECT * FROM `user_photos` WHERE `uid`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$uid]);
		$result = $preparedStatement->fetchAll();
		if (count($result) < 4) {
			$statement = "INSERT INTO `user_photos` (`uid`, `photo`) VALUE (?, ?)";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$uid, $photoPath]);
		}
	}

	// SELECT $need FROM $table WHERE $property = $value
	public function getUserData($need, $table, $property, $value) {
		$statement = "SELECT `$need` FROM `$table` WHERE `$property`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$value]);
		$result =  $preparedStatement->fetch();
		return $result[0];
	}
}
?>
