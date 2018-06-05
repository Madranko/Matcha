import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
@Component({
	selector: 'app-user-interests',
	templateUrl: './user-interests.component.html',
	styleUrls: ['./user-interests.component.css']
})
export class UserInterestsComponent implements OnInit {
	tags = [];
	constructor(
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
		this.getUserTags();
	}
	getUserTags() {
		let cookies = this.authorizationService.getTokensFromCookie();
		// console.log(cookies);
		this.userInfoService.sendRequest('getShortInfo', cookies)
		.toPromise()
		.then(
			(data) => {
				this.tags = data['tags'];
				// console.log(this.tags);
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
