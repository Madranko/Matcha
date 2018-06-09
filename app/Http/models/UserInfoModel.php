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

	public function checkIfAlreadyExists($table, $id) {
		$statement = "SELECT * FROM `$table` WHERE `uid`=?";
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
		$img = str_replace('data:image/', '', $imgCoded);
		$exploded = explode(";", $img);
		$format = $exploded[0];
		$img = str_replace($format . ';base64,', '', $img);
		$img = str_replace(' ', '+', $img);
		$data = base64_decode($img);
		$name = mktime() . "." . $format;
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
		return $fetch['profile_photo'];
	}

	public function changeProfilePhoto($photo, $id) {
		$photoPath = $this->putPhotoInFolder($photo);
		$statement = "UPDATE `user_info` SET `profile_photo`=? WHERE `uid`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$photoPath, $id]);
	}

	public function changeInfo($table, $toChange, $newValue, $uid) {
		if ($toChange == 'password') {
			$newValue = hash('sha256', $newValue);
		}
		$statement = "UPDATE $table SET $toChange = ? WHERE `id` = ?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$newValue, $uid]);
	}

	public function storeInfo($data, $id) {
		$photoPath = $this->putPhotoInFolder($data['photo']);
		$unix_date = strtotime($data['birthdate']);
		$birthdate = date("Y-m-d", $unix_date);
		if ($this->checkIfAlreadyExists("user_info", $id)) {
			$statement = "UPDATE `user_info` SET `gender`=?, `preferences`=?, `birthdate`=?, `biography`=?, `profile_photo`=? WHERE `uid`=?";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$data['gender'], $data['preferences'], $birthdate, $data['biography'], $photoPath, $id]);
		} else {
			$statement = "INSERT INTO `user_info` (`uid`, `gender`, `preferences`, `birthdate`, `biography`, `profile_photo`) VALUE (?, ?, ?, ?, ?, ?)";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$id, $data['gender'], $data['preferences'], $birthdate, $data['biography'], $photoPath]);
		}
	}

	public function getUserTags($id) {
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
		$statement = "SELECT
			`users`.`first_name`,
			`users`.`last_name`,
			`users`.`login`,
			`user_info`.`rating`,
			`user_location`.`city`,
			`user_location`.`country`
			FROM `users`
			INNER JOIN `user_info` ON `users`.`id`=`user_info`.`uid`
			INNER JOIN `user_location` ON `users`.`id`=`user_location`.`uid`
			WHERE `users`.`id`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$id]);
		$info = $preparedStatement->fetchAll();
		$shortInfo = array(
			'firstName' => $info[0]['first_name'],
			'lastName' => $info[0]['last_name'],
			'login' => $info[0]['login'],
			'rating' => $info[0]['rating'],
			'city' => $info[0]['city'],
			'country' => $info[0]['country']
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

	public function isUserLiked($currentUid, $visitedUid) {
		$statement = "SELECT `uid` FROM `likes` WHERE `target_uid`=? AND `uid`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$visitedUid, $currentUid]);
		$fetch = $preparedStatement->fetchAll();
		if ($fetch) {
			return true;
		}
		return false;
	}

	public function unlikeUser($currentUid, $visitedUid) {
		$statement = "DELETE FROM `likes` WHERE `uid`=? AND `target_uid`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$currentUid, $visitedUid]);
		$newRating = $this->updateRating($visitedUid);
		return $newRating;
	}

	public function likeUser($currentUid, $visitedUid) {
		$statement = "INSERT INTO `likes` (`uid`,`target_uid`) VALUES (?,?)";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$currentUid, $visitedUid]);
		$newRating = $this->updateRating($visitedUid);
		return $newRating;
	}

	public function updateRating($uid) {
		$rating = $this->getRatingFromLikes($uid);
		$statement = "UPDATE `user_info` SET `rating`=? WHERE `uid` = ?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$rating, $uid]);
		return $rating;
	}

	public function getRatingFromLikes($visitedId) {
		$statement = "SELECT COUNT(`id`) FROM `likes` WHERE `target_uid` = ?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$visitedId]);
		$fetch = $preparedStatement->fetchAll();
		return $fetch[0][0];
	}

	public function getAllUserPhotos($id) {
		$statement = "SELECT `photo` FROM `user_photos` WHERE `uid`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$id]);
		$fetch = $preparedStatement->fetchAll();
		$allPhotos = array();
		if ($fetch) {
			$i = 0;
			foreach ($fetch as $photo) {
				$allPhotos[] = $photo[0];
			}
			return $allPhotos;
		}
	}

	public function storePhotoInDb($previous, $photoPath, $uid) {
		if ($previous == "assets/upload.svg") {
			$statement = "SELECT * FROM `user_photos` WHERE `uid`=?";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$uid]);
			$result = $preparedStatement->fetchAll();
		} else {
			$statement = "UPDATE `user_photos` SET `photo`=? WHERE `uid`=? AND `photo`=?";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$photoPath, $uid, $previous]);
			$result = $preparedStatement->fetchAll();
		}
		if (count($result) < 4) {
			$statement = "INSERT INTO `user_photos` (`uid`, `photo`) VALUE (?, ?)";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$uid, $photoPath]);
		}
		return $this->getAllUserPhotos($uid);
	}

	public function storeUserLocation($data, $id) {
		if ($this->checkIfAlreadyExists("user_location", $id)) {
			$statement = "UPDATE `user_location` SET `city`=?, `country`=?, `longtitude`=?, `latitude`=?  WHERE `uid`=?";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$data['city'], $data['country'], $data['longtitude'], $data['latitude'], $id]);
		} else {
			$statement = "INSERT INTO `user_location` (`uid`, `city`, `country`, `longtitude`, `latitude`) VALUE (?, ?, ?, ?, ?)";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$id, $data['city'], $data['country'], $data['longtitude'], $data['latitude']]);
		}
	}

	public function getSearchParams($id) {
		$statement = "SELECT
			`user_info`.`gender`,
			`user_info`.`preferences`,
			`user_info`.`birthdate`,
			`user_info`.`rating`,
			`user_location`.`latitude`,
			`user_location`.`longtitude`
			FROM `user_info`
			INNER JOIN
			`user_location` ON `user_info`.`uid`=`user_location`.`uid`
			WHERE `user_info`.`uid`=?;";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$id]);
		$result =  $preparedStatement->fetchAll();
		return $result[0];
	}

	// SELECT $need FROM $table WHERE $property = $value
	public function getUserData($need, $table, $property, $value) {
		$statement = "SELECT `$need` FROM `$table` WHERE `$property`=?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$value]);
		$result =  $preparedStatement->fetch();
		return $result[0];
	}

	public function getUserAge($birthDate) {
		$birthDate = explode("-", $birthDate);
		$age = (date(
			"md", date(
				"U", mktime(
					0, 0, 0, $birthDate[1], $birthDate[2], $birthDate[0]
				)
			)
		) > date("md")
			? ((date("Y") - $birthDate[0]) - 1)
			: (date("Y") - $birthDate[0]));
		return $age;
	}

	public function getValidRegexp($invalidRegexp) {
		$invalidSplit = explode('/', $invalidRegexp);
		$validRegexp = explode('$', $invalidSplit[1]);
		return $validRegexp[0];
	}

	public function preferencesStatement($currentGender, $currentPreferences) {
		if ($currentPreferences == "heterosexual") {
			$statement = "`user_info`.`gender` != '$currentGender' AND `user_info`.`preferences` != 'homosexual'";
		} else if ($currentPreferences == 'homosexual') {
			$statement = "`user_info`.`gender` = '$currentGender' AND `user_info`.`preferences` = 'homosexual'";
		} else if ($currentPreferences == 'bisexual'){
			$statement = "((`user_info`.`gender` = '$currentGender' AND `user_info`.`preferences` != 'heterosexual') OR (`user_info`.`gender` != '$currentGender' AND `user_info`.`preferences` != 'homosexual'))";
		}
		return $statement;
	}

	public function tagsStatement($tags) {
		$tagCounter = 0;
		if ($tags) {
			$tagsStatement = "";
			foreach ($tags as $tag) {
				$tagsStatement = $tagsStatement . ", '$tag'";
				$tagCounter++;
			}
			$tagsStatement = substr($tagsStatement, 2);
		}
		return [
			'tagsStatement' => $tagsStatement,
			'tagCount' => $tagCounter
		];
	}

	public function sortUsersByParams($params, $currentId) {
		$genderStatement = $this->preferencesStatement($params['gender'], $params['preferences']);
		if ($params['tags']) {
			$tagsInfo = $this->tagsStatement($params['tags']);
			$tagCounter = $tagsInfo['tagCount'];
			$tagsStatement = $tagsInfo['tagsStatement'];
			$tagsQuery = "AND `all_user_interests`.`tag` IN($tagsStatement)";

		} else {
			$tagCounter = 1;
			$tagsQuery = "";
		}
		$statement = "SELECT *
		FROM (
			SELECT
			`id`,
			`first_name`,
			`last_name`,
			`gender`,
			`preferences`,
			`birthdate`,
			`rating`,
			`grouped_tags`,
			`biography`,
			`profile_photo`,
			(LENGTH(`grouped_tags`) - LENGTH(REPLACE(`grouped_tags`,',',''))) + 1 AS `tag_length_count`
			FROM (
				SELECT
				`users`.`id`,
				`users`.`first_name`,
				`users`.`last_name`,
				`user_info`.`gender`,
				`user_info`.`preferences`,
				`user_info`.`birthdate`,
				`user_info`.`rating`,
				`user_info`.`biography`,
				`user_info`.`profile_photo`,
				GROUP_CONCAT(`all_user_interests`.`tag`) AS `grouped_tags`
				FROM `users`
				INNER JOIN `user_info`
					ON `users`.`id`=`user_info`.`uid`
				INNER JOIN `all_user_interests`
					ON `all_user_interests`.`uid`=`user_info`.`uid`
				WHERE
					(`user_info`.`birthdate` < ? AND `user_info`.`birthdate` > ?)
					AND
					(`user_info`.`rating` >= ?)
					AND
					(`user_info`.`uid` != ?)
					AND
					$genderStatement
					$tagsQuery
					GROUP BY `all_user_interests`.`uid`
					ORDER BY `user_info`.`rating` DESC
			) A
		) AA WHERE `tag_length_count` > $tagCounter - 1";

		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([
			$params['dateMax'],
			$params['dateMin'],
			$params['rating'],
			$currentId
		]);
		$result = $preparedStatement->fetchAll();
		$result = $this->removeBannedUsers($result, $currentId);
		return $result;
	}

	public function removeBannedUsers($users, $currentId) {
		for ($i = 0; $i < count($users); $i++) {
			if ($this->ifBanned($users[$i]['id']) || $this->ifReported($currentId, $users[$i]['id'])) {
				unset($users[$i]);
			}
		}
		return array_values($users);
	}

	public function reportUser($currentId, $reportedId) {
		if (!$this->ifReported($currentId, $reportedId)) {
			$statement = "INSERT INTO `report_list` (`uid`, `who_reported`) VALUE (?, ?)";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$reportedId, $currentId]);
			if ($this->limitReports($reportedId) > 0) {
				$this->banUser($reportedId);
			}
		}
	}

	public function limitReports($uid) {
		$statement = "SELECT COUNT(`id`) FROM `report_list` WHERE `uid` = ?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$uid]);
		$fetch = $preparedStatement->fetchAll();
		return $fetch[0][0];
	}

	public function banUser($uid) {
		if (!$this->ifBanned($uid)) {
			$statement = "INSERT INTO `ban_list` (`uid`) VALUE (?)";
			$preparedStatement = $this->pdo->prepare($statement);
			$preparedStatement->execute([$uid]);
		}
	}

	public function ifBanned($uid) {
		$statement = "SELECT * FROM `ban_list` WHERE `uid` = ?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$uid]);
		$fetch = $preparedStatement->fetchAll();
		if ($fetch) {
			return true;
		} else {
			return false;
		}
	}

	public function ifReported($currentId, $reportedId) {
		$statement = "SELECT * FROM `report_list` WHERE `uid` = ? AND `who_reported` = ?";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute([$reportedId, $currentId]);
		$fetch = $preparedStatement->fetchAll();
		if ($fetch) {
			return true;
		} else {
			return false;
		}
	}
}
?>
