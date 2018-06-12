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
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'toChange': toChange,
			'value': value
		}
		this.userInfoService.sendRequest('changeBasicInfo', data)
		.toPromise()
		.then(
			(data) => {
			},
			(error) => {
			}
		);
	}

	changeUserInfo(value, toChange) {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'toChange': toChange,
			'value': value
		}
		this.userInfoService.sendRequest('changeUserInfo', data)
		.toPromise()
		.then(
			(data) => {
			},
			(error) => {
			}
		);
	}

	changeInterests(interests) {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'interests': interests
		}
		this.userInfoService.sendRequest('changeInterests', data)
		.toPromise()
		.then(
			(data) => {
			},
			(error) => {
			}
		);
	}
}
