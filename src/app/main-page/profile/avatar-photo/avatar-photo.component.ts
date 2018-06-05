import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';

@Component({
	selector: 'app-avatar-photo',
	templateUrl: './avatar-photo.component.html',
	styleUrls: ['./avatar-photo.component.css']
})
export class AvatarPhotoComponent implements OnInit {
	imageUrl: string = "assets/upload.svg";
	constructor(
		private authorizationService: AuthorizationService,
		private userInfoService: UserInfoService
	) { }

	ngOnInit() {
		this.getProfilePhoto();
	}

	getProfilePhoto() {
		let cookies = this.authorizationService.getTokensFromCookie();
		this.userInfoService.sendRequest('getProfilePhoto', cookies)
		.toPromise()
		.then(
			(data) => {
				this.imageUrl = data;
			},
			(error) => {
				console.log(error);
			}
		);
	}

}
