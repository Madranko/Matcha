<?php

namespace App\Http\controllers;

use \App\Http\models\AuthenticationModel as AuthenticationModel;

class Controller {
	protected function model($model, $pdo) {
		$modelClass = '\\App\\Http\\models\\' . $model;

		return new $modelClass($pdo);
	}
}

?>
