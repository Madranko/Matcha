import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';

@Component({
	selector: 'app-more-info',
	templateUrl: './more-info.component.html',
	styleUrls: [
		'./more-info.component.css',
		'../../../main-page/search/visit-page/visit-page.component.css'
	]
})
export class MoreInfoComponent implements OnInit {
	info = [];
	windowWidth = window.innerWidth;
	constructor(
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
		this.getMoreInfo();
	}

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}

	getMoreInfo(){
		let cookies = this.authorizationService.getTokensFromCookie();
		this.userInfoService.sendRequest('getMoreInfo', cookies)
		.toPromise()
		.then(
			(data) => {
				this.info = data;
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
