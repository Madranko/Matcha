import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilePhotoComponent } from '../profile/user-info/profile-photo/profile-photo.component';
import { GenderComponent } from '../profile/user-info/gender/gender.component';
import { PreferencesComponent } from '../profile/user-info/preferences/preferences.component';
import { BirthdateComponent } from '../profile/user-info/birthdate/birthdate.component';
import { InterestsComponent } from '../profile/user-info/interests/interests.component';
import { BiographyComponent } from '../profile/user-info/biography/biography.component';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
	navLinks = [
		{
			path: 'search',
			label: 'SEARCH',
			icon: 'search'
		},
		{
			path: 'chat',
			label: 'CHAT',
			icon: 'chat_bubble'
		},
		{
			path: 'favorites',
			label: 'FAVORITES',
			icon: 'favorite'
		},
		{
			path: 'settings',
			label: 'SETTINGS',
			icon: 'settings'
		}
	];
	windowWidth = window.innerWidth;

	constructor() { }

	ngOnInit() {
	}

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}
}
