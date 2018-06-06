import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
		private http: HttpClient,
		private cookieService: CookieService
	) { }

	sendData(route, data): Observable<any> {
		return this.http.post('http://localhost:8100/api/authorization/' + route, data);
	}

	setTokensInCookie(data): void {
		this.cookieService.set('AccessToken', data['accessToken']);
		this.cookieService.set('RefreshToken', data['refreshToken']);
		this.cookieService.set('ExpireTime', data['expireTime']);
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
		this.cookieService.deleteAll('/main');
	}

	deleteTokensAndLogout() {
		let token = { 'refreshToken': this.cookieService.get('RefreshToken') };
		this.http.post('http://localhost:8100/api/authorization/deleteRefreshTokenFromDb', token)
		.toPromise()
		.then(
			(data) => {
				this.deleteTokensFromCookie();
				window.open('/home', '_self');
			},
			(error) => {
				this.deleteTokensFromCookie();
				window.open('/home', '_self');
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
				console.log(error);
				this.deleteTokensAndLogout();
			}
		);
		console.log("test2");
	}

	openUserProfilePage(firstTimeLogin): void {
		if (!this.error) {
			if (firstTimeLogin === '0') {
				console.log("First Login 0");
				window.open('/main/profile', '_self');
			} else {
				console.log("First Login 1");
				window.open('/user-info', '_self');

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
