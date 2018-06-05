import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	// windowWidth = window.innerWidth;
	// fileToUpload: File = null;
	// imageUrl: string = "assets/upload.svg";

	constructor(
		private authorizationService: AuthorizationService,
		private userInfoService: UserInfoService,
		private cookieService: CookieService
	) { }

	ngOnInit() {
		// console.log("PROFILE REFRESH");
		// this.authorizationService.refreshTokens();
	}

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}

	// handleFileInput(file: FileList) {
	// 	this.fileToUpload = file.item(0);
	// 	// console.log(id);
	// 	//Show image preview
	// 	var reader = new FileReader();
	// 	reader.onload = (event:any) => {
	// 		this.imageUrl = event.target.result;
	// 		// console.log(this.uploadImg);
	// 	}
	// 	reader.readAsDataURL(this.fileToUpload);
	// }
}
