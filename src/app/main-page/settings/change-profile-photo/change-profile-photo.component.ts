import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
@Component({
  selector: 'app-change-profile-photo',
  templateUrl: './change-profile-photo.component.html',
  styleUrls: ['./change-profile-photo.component.css']
})
export class ChangeProfilePhotoComponent implements OnInit {
	imageUrl: string = "assets/upload.svg";
	fileToUpload: File = null;
	error: string;
	constructor(
		private cookieService: CookieService,
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
				this.error = "";
				if (data) {
					this.imageUrl = "http://localhost:8100/" + data;
				}
			},
			(error) => {
				console.log(error);
			}
		);
	}

	handleFileInput(file: FileList) {
		this.fileToUpload = file.item(0);
		var reader = new FileReader();
		reader.onload = (event:any) => {
			this.imageUrl = event.target.result;
			let data = {
				'refreshToken': this.cookieService.get('RefreshToken'),
				'photo': event.target.result
			};
			this.userInfoService.sendRequest('changeProfilePhoto', data)
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
		reader.readAsDataURL(this.fileToUpload);
	}
}
