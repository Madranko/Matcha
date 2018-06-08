import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';

@Injectable({
	providedIn: 'root'
})
export class ChangeService {

	constructor(
		private authorizationService: AuthorizationService,
		private userInfoService: UserInfoService,
		private cookieService: CookieService
	) { }

	changeBasicInfo(value, toChange) {
		// console.log(value, toChange);
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'toChange': toChange,
			'value': value
		}
		console.log(data);
		this.userInfoService.sendRequest('changeBasicInfo', data)
		.toPromise()
		.then(
			(data) => {
				console.log(data);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	changeUserInfo(value, toChange) {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'toChange': toChange,
			'value': value
		}
		console.log(data);
		this.userInfoService.sendRequest('changeUserInfo', data)
		.toPromise()
		.then(
			(data) => {
				console.log(data);
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
