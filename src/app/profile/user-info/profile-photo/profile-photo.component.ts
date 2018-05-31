import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
	selector: 'app-profile-photo',
	templateUrl: './profile-photo.component.html',
	styleUrls: ['./profile-photo.component.css']
})
export class ProfilePhotoComponent implements OnInit {
	imageUrl: string = "assets/upload.svg";
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
		}
		reader.readAsDataURL(this.fileToUpload);
	}
}
