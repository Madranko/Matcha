import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild, AfterViewInit } from '@angular/core';
import { InterestsComponent } from "./interests/interests.component";
import { ProfilePhotoComponent } from "./profile-photo/profile-photo.component";

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, AfterViewInit {
	error: string;
	constructor(
		private router: Router
	) { }

	ngAfterViewInit() {
	}

	@ViewChild(InterestsComponent) interests;
	@ViewChild(ProfilePhotoComponent) photo;

	ngOnInit() {
	}

	onSubmit(form: NgForm) {
		let url = this.photo.imageUrl;
		let tags = this.interests.tags;
		let gender = form._directives[0].value;
		let preferences = form._directives[1].value;
		let birthdate = new Date(form._directives[2].value);
		let biography = form._directives[3].value;

		let data = {
			photo: url,
			tags: tags,
			gender: gender,
			preferences: preferences,
			birthdate: birthdate,
			biography: biography
		}
		if(this.isValid(data)) {
			data['preferences'] = this.checkPreferences(data['preferences']);
			//SEND DATA ON SERVER
			console.log(data['preferences']);
		} else {
			console.log("NOT OK");
		}
	}

	isValid(data) {
		if (
			this.checkPhoto(data['photo']) &&
			this.checkGender(data['gender']) &&
			this.checkBirthdate(data['birthdate']) &&
			this.checkTags(data['tags']) &&
			this.checkGender(data['gender']) &&
			this.checkBiography(data['biography'])
		) {
			return true;
		} else {
			return false;
		}
	}

	checkPhoto(url) {
		if (url && url != "assets/upload.svg") {
				this.error = '';
			return true;
		} else {
			this.error = "You have to upload profile img";
			return false;
		}
	}
	checkTags(tags) {
		if (tags.length) {
			this.error = '';
			return true;
		} else {
			this.error = "You have to choose at least one interest";
			return false;
		}
	}
	checkGender(gender) {
		if (gender) {
			this.error = '';
			return true;
		} else {
			this.error = "You have to specify your gender";
			return false;
		}
	}

	checkBirthdate(birthdate) {
		if (birthdate && Object.prototype.toString.call(birthdate) === "[object Date]" && !isNaN( birthdate.getTime() )) {
			this.error = '';
			return true;
		} else {
			this.error = "Invalid date";
			return false;
		}
	}

	checkBiography(bio) {
		if (bio) {
			this.error = '';
			return true;
		} else {
			this.error = "Please write something, because it's mandatory of our project";
			return false;
		}
	}
	checkPreferences(pref) {
		if (pref) {
			return pref;
		} else {
			return "Bisexual";
		}
	}

}
