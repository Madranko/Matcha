import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})
export class UserInfoService {
	userInfo = [];
	error: string;
	constructor(
		private authorizationService: AuthorizationService,
		private http: HttpClient,
		private cookieService: CookieService
	) { }

	getData(route): Observable<any> {
		return this.http.get('http://localhost:8100/api/user-info/' + route);
	}

	getLocation() {

	}

	sendData(route, data): void {
		console.log(data['birthdate']);
		this.http.post('http://localhost:8100/api/user-info/' + route, data)
		.toPromise()
		.then(
			(data) => {
				this.error = '';
				this.authorizationService.setTokensInCookie(data);
				console.log(data);
			},
			(error) => {
				this.authorizationService.deleteTokens();
				console.log(error);
			}
		);
	}
}
