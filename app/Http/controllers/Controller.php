<?php

namespace App\Http\controllers;

use App\Http\models\AuthenticationModel as AuthenticationModel;

class Controller {
	protected function model($model) {
		require_once('../models/' . $model . '.php');
		return new $model();
	}
}

?>
