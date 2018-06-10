import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: [
		'./profile.component.css',
		'../main-page.component.css'
	]
})
export class ProfileComponent implements OnInit {
	windowWidth = window.innerWidth;
	// fileToUpload: File = null;
	// imageUrl: string = "assets/upload.svg";

	constructor(
		private authorizationService: AuthorizationService,
		private userInfoService: UserInfoService,
		private cookieService: CookieService
	) { }

	ngOnInit() {

	}

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}
}
