import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilePhotoComponent } from '../profile/user-info/profile-photo/profile-photo.component';
import { GenderComponent } from '../profile/user-info/gender/gender.component';
import { PreferencesComponent } from '../profile/user-info/preferences/preferences.component';
import { BirthdateComponent } from '../profile/user-info/birthdate/birthdate.component';
import { InterestsComponent } from '../profile/user-info/interests/interests.component';
import { BiographyComponent } from '../profile/user-info/biography/biography.component';
import { AuthorizationService } from '../user/authorization/authorization.service';
import { UserInfoService } from '../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';
import { ChatService } from '../chat-service/chat.service';

@Component({
	selector: 'app-main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
	profileImg: string = "";
	navLinks = [
		{
			path: 'profile',
			label: 'HOME',
			icon: 'home'
		},
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
			path: 'history',
			label: 'HISTORY',
			icon: 'history'
		},
		{
			path: 'settings',
			label: 'SETTINGS',
			icon: 'settings'
		}
	];
	windowWidth = window.innerWidth;

	constructor(
		private chatService: ChatService,
		private authorizationService: AuthorizationService,
		private userInfoService: UserInfoService,
		private cookieService: CookieService
	) {
		chatService.messages.subscribe(msg => {
			let id = {
				'refreshToken': this.cookieService.get('RefreshToken'),
				'id': msg['recievedMessage']['from_id'];
			}
			this.userInfoService.sendRequest('ifBlocked', id)
			.toPromise()
			.then (
				(data) => {
					console.log(data);
					if (data == false) {
						Materialize.toast(msg['recievedMessage']['notification'], 7000, "cyan lighten-1");
					}
				},
				(error) => {
					console.log(error);
				}
			)
		});
	}

	ngOnInit() {
		this.authorizationService.refreshTokens();
		this.userInfoService.getLocation();
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken')
		}
		this.userInfoService.sendRequest('getProfilePhoto', data)
		.toPromise()
		.then(
			(data) => {
				this.profileImg = "http://localhost:8100/" + data;
				this.chatService.sendMessage("", "", "");
			},
			(error) => {
				console.log(error);
			}
		);
	}

	logout() {
		this.authorizationService.deleteTokensAndLogout();
	}

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}
}
