import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';

@Component({
	selector: 'app-short-info',
	templateUrl: './short-info.component.html',
	styleUrls: ['./short-info.component.css']
})
export class ShortInfoComponent implements OnInit {

	shortInfo = [];
	tags = [];
	constructor(
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
		this.getShortInfo();
	}

	getShortInfo() {
		let cookies = this.authorizationService.getTokensFromCookie();
		// console.log(cookies);
		this.userInfoService.sendRequest('getShortInfo', cookies)
		.toPromise()
		.then(
			(data) => {
				this.shortInfo = data['info'];
				this.tags = data['tags'];
			},
			(error) => {
				console.log(error);
			}
		);
	}

}
