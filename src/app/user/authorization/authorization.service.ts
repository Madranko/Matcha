import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})

export class AuthorizationService {
	cookieRefreshTokenValue = 'UNKNOWN';
	cookieAccessTokenValue = 'UNKNOWN';
	cookieExpireTimeValue = 'UNKNOWN';
	error: string;

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
			let cookies = {
				'accessToken': this.cookieService.get('AccessToken'),
				'refreshToken': this.cookieService.get('RefreshToken'),
				'expireTime': this.cookieService.get('ExpireTime')
			};
			this.sendData('checkTokens', cookies)
			.toPromise()
			.then(
				(data) => {
					this.error = '';
					this.setTokensInCookie(data);
					console.log(data);
					this.openUserProfilePage(data['firstTimeLogin']);
				},
				(error) => {
					// this.router.navigate(['/home']);
					this.deleteTokens();
					console.log(error);

					// this.error = error.error.exception[0].message;
				}
			);
		}
	}

	checkIfTokensValid() {
		let cookies = {
			'accessToken': this.cookieService.get('AccessToken'),
			'refreshToken': this.cookieService.get('RefreshToken'),
			'expireTime': this.cookieService.get('ExpireTime')
		};
		return this.sendData('checkTokens', cookies);
	}

	deleteTokens() {
		let token = { 'refreshToken': this.cookieService.get('RefreshToken') };
		this.http.post('http://localhost:8100/api/authorization/deleteRefreshTokenFromDb', token)
		.toPromise()
		.then(
			(data) => {
				this.cookieService.delete('AccessToken');
				this.cookieService.delete('RefreshToken');
				this.cookieService.delete('ExpireTime');
			}
		);
	}

	openUserProfilePage(firstTimeLogin): void {
		if (!this.error) {
			if (firstTimeLogin === '0') {
				console.log("First Login 0");
				window.open('/profile', '_self');
			} else {
				console.log("First Login 1");
				window.open('/user-info', '_self');
			}
		}
	}
}
