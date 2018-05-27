<?php
	namespace App\Http\models;
	use Lcobucci\JWT\Builder;

	class JwtModel
	{
		private $token;

		function __construct($data)
		{
			$this->token = new Builder();
			// $this->token->setIssuer('http://localhost:8100');
			// $this->token->setAudience('http://localhost:4200');
			$this->token->setIssuedAt(time());
			$this->token->setNotBefore(time() + 60);
			$this->token->setExpiration(time() + 3600);
			$this->token->set('uid', );
		}

		public function createTokenForUser() {

		}
	}

?>
