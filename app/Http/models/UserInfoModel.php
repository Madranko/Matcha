<?php
namespace App\Http\models;

class UserInfoModel {
	private $pdo;

	public function __construct($pdo) {
		$this->pdo = $pdo;
	}

	public function getAllInterests() {
		$result = array();
		$statement = "SELECT * FROM `interests`";
		$preparedStatement = $this->pdo->prepare($statement);
		$preparedStatement->execute();
		$fetch =  $preparedStatement->fetchAll();
		foreach ($fetch as $value) {
			$result[] = $value[0];
		}
		return $result;
	}
}
?>
