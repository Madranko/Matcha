import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-user-gallery',
	templateUrl: './user-gallery.component.html',
	styleUrls: [
		'./user-gallery.component.css',
		'../profile.component.css'
	]
})
export class UserGalleryComponent implements OnInit {
	windowWidth = window.innerWidth;
	fileToUpload: File = null;
	imageUrl: string = "assets/upload.svg";
	userImages = {
		0: "assets/upload.svg",
		1: "assets/upload.svg",
		2: "assets/upload.svg",
		3: "assets/upload.svg"
	};
	constructor(
		private cookieService: CookieService,
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
		this.getGalleryPhotos();
	}

	getGalleryPhotos() {
		let cookies = this.authorizationService.getTokensFromCookie();
		this.userInfoService.sendRequest('getGalleryPhotos', cookies)
		.toPromise()
		.then(
			(data) => {
				if (data) {
					for (let i = 0; i < data.length; i++) {
						this.userImages[i] = "http://localhost:8100/" + data[i];
					}
				}
			},
			(error) => {
				console.log(error);
			}
		);
	}

	handleFileInput(file: FileList, i) {
		this.fileToUpload = file.item(0);
		var reader = new FileReader();
		reader.onload = (event:any) => {
			let previous = this.userImages[i];
			console.log(previous);
			this.userImages[i] = event.target.result;
			let data = {
				'previous': previous,
				'refreshToken': this.cookieService.get('RefreshToken'),
				'photo': this.userImages[i]
			}
			this.userInfoService.sendRequest('storeUserPhoto', data)
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
