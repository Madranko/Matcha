import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { UserInfoService } from '../service/user-info.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';

@Component({
	selector: 'app-profile-photo',
	templateUrl: './profile-photo.component.html',
	styleUrls: ['./profile-photo.component.css'],
	viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class ProfilePhotoComponent implements OnInit {
	imageUrl: string = "assets/upload.svg";
	fileToUpload: File = null;
	error: string;
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

		//Show image preview
		var reader = new FileReader();
		reader.onload = (event:any) => {
			this.imageUrl = event.target.result;
			// console.log(this.imageUrl);
		}
		reader.readAsDataURL(this.fileToUpload);
	}
}
