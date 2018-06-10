import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { Observable, of, pipe } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';

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

	sendRequest(route, data): Observable<any> {
		return this.http.post('http://localhost:8100/api/user-info/' + route, data);
	}

	getLocation() {
		this.http.get('http://ip-api.com/json')
		.toPromise()
		.then(
			(data) => {
				// console.log(data);
				let location = {
				'refreshToken': this.cookieService.get('RefreshToken'),
				'city': data['city'],
				'country': data['country'],
				'latitude': data['lat'],
				'longtitude': data['lon']
			};
			this.sendRequest('userLocation', location)
			.toPromise()
			.then(
				(data) => {
					// console.log(data);
				},
				(error) => {
					console.log(error);
				}
			)
		}
	);
}

sendData(route, data): void {
	this.http.post('http://localhost:8100/api/user-info/' + route, data)
	.toPromise()
	.then(
		(data) => {
			this.error = '';
			this.authorizationService.deleteTokensFromCookie();
			this.authorizationService.setTokensInCookie(data);
			window.open('/main', '_self');
		},
		(error) => {
			console.log(error);
		}
	);
}

getUid(): Observable<any> {
	let route = 'getUidFromToken';
	let data = {
		'refreshToken': this.cookieService.get('RefreshToken')
	}
	return this.http.post('http://localhost:8100/api/user-info/' + route, data)
	.pipe(
		map((response) => {
			let id = response['id'];
			let login = response['login'];
			let firstName = response['firstName'];
			let lastName = response['lastName'];
			let profilePhoto = response['profilePhoto'];
			return {
				id,
				login,
				firstName,
				lastName,
				profilePhoto
			}
		})
	);
}
}
