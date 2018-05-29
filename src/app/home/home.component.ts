import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../user/authorization/authorization.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	error: string;

	constructor(
		private cookieService: CookieService,
		private authorizationService: AuthorizationService,
		private router: Router
	) { }

	ngOnInit() {
		if (this.authorizationService.isTokensExists()) {
			this.authorizationService.loginIfTokensValid();
		}
	}
	isHome() {
		if(this.router.url === '/home') {
			return true;
		} else {
			return false;
		}
	}

	isUserLoggedIn(): boolean {
		if (
			this.cookieService.check('AccessToken') &&
			this.cookieService.check('RefreshToken') &&
			this.cookieService.check('ExpireTime')
		) {
			return true;
		}
		return false;
	}

}
