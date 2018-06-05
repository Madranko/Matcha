import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';

@Component({
	selector: 'app-user-photos',
	templateUrl: './user-photos.component.html',
	styleUrls: ['./user-photos.component.css']
})
export class UserPhotosComponent implements OnInit {
	imageUrl: string = "assets/upload.svg";
	fileToUpload: File = null;
	error: string;
	constructor(
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
		this.getUserPhotos();
	}

	getUserPhotos() {
		// let cookies = this.authorizationService.getTokensFromCookie();
		// this.userInfoService.sendRequest('getProfilePhoto', cookies)
		// .toPromise()
		// .then(
		// 	(data) => {
		// 		this.error = "";
		// 		if (data) {
		// 			this.imageUrl = data;
		// 		}
		// 	},
		// 	(error) => {
		// 		console.log(error);
		// 	}
		// );
	}

	handleFileInput(file: FileList) {
		this.fileToUpload = file.item(0);

		//Show image preview
		var reader = new FileReader();
		reader.onload = (event:any) => {
			this.imageUrl = event.target.result;
			// console.log(this.imageUrl);
		}
		reader.readAsDataURL(this.fileToUpload);
	}

}
