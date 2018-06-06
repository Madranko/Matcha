<?php
namespace App\Http\controllers;

use \App\Http\controllers\Controller;
use \App\Http\controllers\AuthenticationController;
use \App\Http\models\UserInfoModel;
use \App\Http\models\JwtModel;
use \App\Http\models\AuthenticationModel;

class UserInfoController extends Controller {

	private $pdo;
	private $userInfoModel;
	private $authController;
	// private $jwtModel;
	// private $authModel;

	public function __construct($pdo) {
		$this->userInfoModel = $this->model('UserInfoModel', $pdo);
		$this->authController = new AuthenticationController($pdo);
		$this->pdo = $pdo;
	}

	public function getInterests() {
		return json_encode($this->userInfoModel->getAllInterests());
	}

	public function getProfilePhoto($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$pathToPhoto = $this->userInfoModel->getProfilePhoto($id);
		return json_encode($pathToPhoto);
	}

	public function storeUserInfo($data) {

		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$this->userInfoModel->storeInterests($data['tags'], $id);
		$this->userInfoModel->updateFirstTimeLogin($id);
		$this->userInfoModel->storeInfo($data, $id);
		$tokens = $this->authController->checkTokens($data);
		return $tokens;
	}

	public function getShortInfo($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$shortInfo = $this->userInfoModel->getShortInfo($id);
		return json_encode($shortInfo);
	}

	public function getMoreInfo($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$info = $this->userInfoModel->getMoreInfo($id);
		return json_encode($info);
	}

	public function getBiography($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$info = $this->userInfoModel->getUserData('biography', 'user_info', 'uid', $id);
		return json_encode($info);
	}

	public function storeUserPhoto($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$path = $this->userInfoModel->putPhotoInFolder($data['photo']);
		$result = $this->userInfoModel->storePhotoInDb($data['previous'], $path, $id);
		return json_encode($result);
	}

	public function getGalleryPhotos($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$result = $this->userInfoModel->getAllUserPhotos($id);
		return json_encode($result);
	}

	public function userLocation($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$this->userInfoModel->storeUserLocation($data, $id);
	}

	public function getSearchParams($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$tags = $this->userInfoModel->getUserTags($id);
		$userInfo = $this->userInfoModel->getSearchParams($id);
		$age = $this->userInfoModel->getUserAge($userInfo['birthdate']);
		$ageMin = strval(date("Y") - $age - 5);
		$ageMax = strval(date("Y") - $age + 5);
		$params = [
			'ageMin' => $ageMin,
			'ageMax' => $ageMax,
			'distance' => 0,
			'gender' => $userInfo['gender'],
			'latitude' => $userInfo['latitude'],
			'longtitude' => $userInfo['longtitude'],
			'preferences' => $userInfo['preferences'],
			'rating' => $userInfo['rating'],
			'tags' => $tags
		];
		return json_encode($params);
	}

	public function getUsersByParams($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$usersByAge = $this->userInfoModel->findUsersByAge($data['ageMin'], $data['ageMax'], $data['ageRegExp'], $id);
		$usersByGender = $this->userInfoModel->findUsersByGender($data['preferences'], $data['gender'], $id);
		return json_encode($usersByAge);
	}
}
?>
