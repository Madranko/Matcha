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

	constructor(
		private http: HttpClient,
		private cookieService: CookieService
	) { }

	sendData(route, data): Observable<any> {
		return this.http.post('http://localhost:8100/' + route, data);
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
		let cookies = {
			'accessToken': this.cookieService.get('AccessToken'),
			'refreshToken': this.cookieService.get('RefreshToken'),
			'expireTime': this.cookieService.get('ExpireTime')
		};
		let res;
		this.sendData('api/check-tokens', cookies)
		.toPromise()
		.then(
			(data) => {
				this.error = '';
				this.setTokensInCookie(data);
				console.log(data);
				// this.openUserProfilePage();
			},
			(error) => {
				// this.router.navigate(['/home']);
				console.log(error);

				// this.error = error.error.exception[0].message;
			}
		);
	}

	deleteTokens(data): Observable<any> {
		this.deleteCookieTokens();
		this.http.delete('http://localhost:8100/api/delete-refresh-token', data);
	}

	checkIfTokensValid() {
		let cookies = {
			'accessToken': this.cookieService.get('AccessToken'),
			'refreshToken': this.cookieService.get('RefreshToken'),
			'expireTime': this.cookieService.get('ExpireTime')
		};
		return this.sendData('checkTokens', cookies);
	}

	deleteCookieTokens(): void {
		this.cookieService.delete('AccessToken');
		this.cookieService.delete('RefreshToken');
		this.cookieService.delete('ExpireTime');
	}
}
