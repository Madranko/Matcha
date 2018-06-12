import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Authorization } from './authorization.model';
import { Patterns } from './patterns.model';
@Injectable({
	providedIn: 'root'
})

export class AuthorizationService {
	cookieRefreshTokenValue = 'UNKNOWN';
	cookieAccessTokenValue = 'UNKNOWN';
	cookieExpireTimeValue = 'UNKNOWN';
	error: string;
	user: Authorization;
	patterns: Patterns;

	constructor(
		private router: Router,
		private http: HttpClient,
		private cookieService: CookieService
	) { }

	sendData(route, data): Observable<any> {
		return this.http.post('http://localhost:8100/api/authorization/' + route, data);
	}

	setTokensInCookie(data): void {
		this.cookieService.set('AccessToken', data['accessToken'], 3, '/');
		this.cookieService.set('RefreshToken', data['refreshToken'], 3, '/');
		this.cookieService.set('ExpireTime', data['expireTime'], 3, '/');
	}

	isTokensExists() {
		if (this.cookieService.get('AccessToken')
		&& this.cookieService.get('RefreshToken')
		&& this.cookieService.get('ExpireTime')) {
			return true;
		} else {
			return false;
		}
	}

	loginIfTokensValid() {
		if (this.isTokensExists()) {
			this.checkIfTokensValid()
			.toPromise()
			.then(
				(data) => {
					this.error = '';
					this.setTokensInCookie(data);
					this.openUserProfilePage(data['firstTimeLogin']);
				},
				(error) => {
					if (this.cookieService.get('AccessToken')) {
						this.deleteTokensAndLogout();
					}
				}
			);
		}
	}

	checkIfTokensValid() {
		let cookies = this.getTokensFromCookie();
		return this.sendData('checkTokens', cookies);
	}

	getTokensFromCookie() {
		return {
			'accessToken': this.cookieService.get('AccessToken'),
			'refreshToken': this.cookieService.get('RefreshToken'),
			'expireTime': this.cookieService.get('ExpireTime')
		};
	}
	deleteTokensFromCookie(): void {
		this.cookieService.deleteAll('/');
	}

	deleteTokensAndLogout() {
		let token = { 'refreshToken': this.cookieService.get('RefreshToken') };
		this.http.post('http://localhost:8100/api/authorization/deleteRefreshTokenFromDb', token)
		.toPromise()
		.then(
			(data) => {
				this.deleteTokensFromCookie();
				this.router.navigate(['/home']);
				// window.open('/home', '_self');
			},
			(error) => {
				this.deleteTokensFromCookie();
				this.router.navigate(['/home']);
				// window.open('/home', '_self');
			}
		);
	}

	refreshTokens(): void {
		let cookies = this.getTokensFromCookie();
		this.sendData('checkTokens', cookies)
		.toPromise()
		.then(
			(data) => {
				this.deleteTokensFromCookie();
				this.setTokensInCookie(data);
			},
			(error) => {
				this.deleteTokensAndLogout();
			}
		);
	}

	openUserProfilePage(firstTimeLogin): void {
		if (!this.error) {
			if (firstTimeLogin === '0') {
				this.router.navigate(['/main/profile']);
				// window.open('/main/profile', '_self');
			} else {
				this.router.navigate(['/user-info']);
				// window.open('/user-info', '_self');
			}
		}
	}

	checkPattern(pattern, field) {
		if (this.user[field]) {
			if (this.patterns[pattern].test(this.user[field])) {
				return true;
			} else {
				return false;
			}
		}
	}

	getErrorMessage(name, field) {
		if (this.user[field]) {
			return ("Not a valid " + name);
		}
	}
}
