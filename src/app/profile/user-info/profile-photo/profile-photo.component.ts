import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
	selector: 'app-profile-photo',
	templateUrl: './profile-photo.component.html',
	styleUrls: ['./profile-photo.component.css'],
	viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class ProfilePhotoComponent implements OnInit {
	imageUrl: string = "assets/Upload.svg";
	fileToUpload: File = null;
	constructor() { }

	ngOnInit() {
	}

	handleFileInput(file: FileList) {
		this.fileToUpload = file.item(0);

		//Show image preview
		var reader = new FileReader();
		reader.onload = (event:any) => {
			this.imageUrl = event.target.result;
			console.log(this.imageUrl);
		}
		reader.readAsDataURL(this.fileToUpload);
	}
}
