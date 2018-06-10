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

	public function changeProfilePhoto($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$pathToPhoto = $this->userInfoModel->changeProfilePhoto($data['photo'], $id);
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
		$params = [
			'ageMin' => $age - 5,
			'ageMax' => $age + 5,
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

	public function getUsersByParams($params) {
		$id = JwtModel::getUidFromToken($params['refreshToken']);
		$params['dateMax'] = strval(date('Y') - $params['ageMin'] + 1);
		$params['dateMin'] = strval(date('Y') - $params['ageMax']);
		$result = $this->userInfoModel->sortUsersByParams($params, $id);
		return json_encode($result);
	}

	public function getVisitedUserInfo($data) {
		$currentUid = JwtModel::getUidFromToken($data['cookie']['refreshToken']);
		$id = $data['uid'];
		$shortInfo = $this->userInfoModel->getShortInfo($id);
		$moreInfo = $this->userInfoModel->getMoreInfo($id);
		$liked = $this->userInfoModel->isUserLiked($currentUid, $id);
		$fullInfo = [
			'profilePhoto' => $pathToProfilePhoto = $this->userInfoModel->getProfilePhoto($id),
			'birthdate' => $moreInfo['birthdate'],
			'gender' => $moreInfo['gender'],
			'preferences' => $moreInfo['preferences'],
			'shortInfo' => $shortInfo['info'],
			'tags' => $shortInfo['tags'],
			'biography' => $biography = $this->userInfoModel->getUserData('biography', 'user_info', 'uid', $id),
			'galleryPhotos' => $galleryPhotos = $this->userInfoModel->getAllUserPhotos($id),
			'liked' => $liked
		];
		return json_encode($fullInfo);
	}


	public function likeUnlike($data) {
		$currentUid = JwtModel::getUidFromToken($data['cookie']['refreshToken']);
		$visitedUid = $data['visitedUid'];
		$liked = $data['liked'];
		if ($liked) {
			$rating = $this->userInfoModel->unlikeUser($currentUid, $visitedUid);
		} else {
			$rating = $this->userInfoModel->likeUser($currentUid, $visitedUid);
		}
		return json_encode($rating);
	}

	public function changeBasicInfo($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$result = $this->userInfoModel->changeInfo('users', $data['toChange'], $data['value'], $id);
		return json_encode($result);
	}

	public function changeUserInfo($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$result = $this->userInfoModel->changeInfo('user_info', $data['toChange'], $data['value'], $id);
		return json_encode($result);
	}

	public function changeInterests($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$result = $this->userInfoModel->storeUserInterests($data['interests'], $id);
		return json_encode($result);
	}

	public function reportUser($data) {
		$currentId = JwtModel::getUidFromToken($data['refreshToken']);
		$reportedId = $data['visitedUid'];
		$result = $this->userInfoModel->reportUser($currentId, $reportedId);
		return json_encode($result);
	}

	public function getUidFromToken($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$return = [
			'id' => $id,
			'login' => $this->userInfoModel->getUserData('login', 'users', 'id', $id),
			'firstName' => $this->userInfoModel->getUserData('first_name', 'users', 'id', $id),
			'lastName' => $this->userInfoModel->getUserData('last_name', 'users', 'id', $id),
			'profilePhoto' => $this->userInfoModel->getUserData('profile_photo', 'user_info', 'uid', $id),
		];
		return json_encode($return);
	}

	public function ifBlocked($data) {
		$id = JwtModel::getUidFromToken($data['refreshToken']);
		$result = $this->userInfoModel->ifBlocked($id, $data['id']);
		return json_encode($result);
	}

	public function blockUser($data) {
		$currentId = JwtModel::getUidFromToken($data['refreshToken']);
		$reportedId = $data['visitedUid'];
		$result = $this->userInfoModel->blockUser($currentId, $reportedId);
		return json_encode($result);
	}
}
?>
