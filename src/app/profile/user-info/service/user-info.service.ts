import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserInfoService {
	userInfo = [];
	error: string;
	constructor(
		private authorizationService: AuthorizationService,
		private http: HttpClient
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
				console.log(data);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	storeUserInfo(data) {
		this.userInfo = data;
		this.authorizationService.checkIfTokensValid()
		.toPromise()
		.then(
			(data) => {
				this.error = '';
				this.authorizationService.setTokensInCookie(data);
				this.userInfo['id'] = data['id'];
				console.log(this.userInfo);
				this.sendData('storeUserInfo', this.userInfo);
				// console.log(this.userInfo);
				console.log(data);
			},
			(error) => {
				console.log(error);
				this.authorizationService.deleteTokens();
			}
		);
	}


}
