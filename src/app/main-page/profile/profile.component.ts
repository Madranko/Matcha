import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';
import { ChatService } from '../../chat-service/chat.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: [
		'./profile.component.css',
		'../main-page.component.css'
	]
})
export class ProfileComponent implements OnInit {
	windowWidth = window.innerWidth;
	// fileToUpload: File = null;
	// imageUrl: string = "assets/upload.svg";

	constructor(
		private chatService: ChatService,
		private authorizationService: AuthorizationService,
		private userInfoService: UserInfoService,
		private cookieService: CookieService
	) {
		chatService.messages.subscribe(msg => {
			let id = {
				'refreshToken': this.cookieService.get('RefreshToken'),
				'id': msg['recievedMessage']['from_id']
			}
			this.userInfoService.sendRequest('ifBlocked', id)
			.toPromise()
			.then (
				(data) => {
					console.log(data);
					if (data == false) {
						if (msg['recievedMessage']['notification']) {
							console.log('NOTIFICATION');
							console.log(msg['recievedMessage']['notification']);
							let notification = msg['recievedMessage']['from_login'] + ': ' + msg['recievedMessage']['notification'];
							Materialize.toast(msg['recievedMessage']['notification'], 7000, "cyan lighten-1");
						} else if (msg['recievedMessage']['message']) {
							console.log('MESSAGE');
							console.log(msg['recievedMessage']['message']);
							let notification = msg['recievedMessage']['from_login'] + ': ' + msg['recievedMessage']['message'];
							Materialize.toast(notification, 7000, "cyan lighten-1");
						}
					}
				},
				(error) => {
					console.log(error);
				}
			)
		});
	}

	ngOnInit() {

	}

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}
}
