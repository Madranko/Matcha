import { Component, OnInit } from '@angular/core';

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
	constructor() { }

	ngOnInit() {
	}

	handleFileInput(file: FileList) {
		this.fileToUpload = file.item(0);
		// console.log(id);
		//Show image preview
		var reader = new FileReader();
		reader.onload = (event:any) => {
			this.imageUrl = event.target.result;
			// console.log(this.uploadImg);
		}
		reader.readAsDataURL(this.fileToUpload);
	}

}
