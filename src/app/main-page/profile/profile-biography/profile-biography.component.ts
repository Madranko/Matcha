import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';

@Component({
	selector: 'app-profile-biography',
	templateUrl: './profile-biography.component.html',
	styleUrls: [
		'./profile-biography.component.css',
		'../../../main-page/search/visit-page/visit-page.component.css'
	]
})
export class ProfileBiographyComponent implements OnInit {
	bio: string;
	constructor(
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
		this.getBiography();
	}

	getBiography(){
		let cookies = this.authorizationService.getTokensFromCookie();
		this.userInfoService.sendRequest('getBiography', cookies)
		.toPromise()
		.then(
			(data) => {
				// console.log(data);
				this.bio = data;
			},
			(error) => {
				console.log(error);
			}
		);
	}

}
