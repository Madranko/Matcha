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

	putData(route, data): Observable<any> {
		return this.http.post('http://localhost:8100/' + route, data);
	}

	setTokensInCookie(data) {
		this.cookieService.set('AccessToken', data['accessToken']);
		this.cookieService.set('RefreshToken', data['refreshToken']);
		this.cookieService.set('ExpireTime', data['expireTime']);
	}
}
