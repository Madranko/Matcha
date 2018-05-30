import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../service/user-info.service';

@Component({
	selector: 'app-interests',
	templateUrl: './interests.component.html',
	styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
	error: string;
	constructor(
		private userInfoService: UserInfoService
	) { }

	ngOnInit() {
		this.userInfoService.getData("getInterests")
		.toPromise()
		.then(
			(data) => {
				console.log(data);
				this.error = '';
				// this.authorizationService.setTokensInCookie(data);
				// this.authorizationService.openUserProfilePage(data['firstTimeLogin']);
			},
			(error) => {
				console.log("ERROR");
				this.error = error.error.exception[0].message;
			}
		);
	}
}
