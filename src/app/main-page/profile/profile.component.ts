import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';
import { ChatService } from '../../chat-service/chat.service';
import { MatSnackBar } from '@angular/material';

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
		private cookieService: CookieService,
		private snackBar: MatSnackBar
	) {
		chatService.messages.subscribe(msg => {
			let id = {
				'refreshToken': this.cookieService.get('RefreshToken'),
				'id': msg['from_id']
			}
			this.userInfoService.sendRequest('ifBlocked', id)
			.toPromise()
			.then (
				(data) => {
					if (data == false) {
						if (msg['notification']) {
							let notification = msg['from_login'] + ': ' + msg['notification'];
							this.snackBar.open(notification, '', {
								duration: 7000,
							});
						} else if (msg['message']) {
							let notification = msg['from_login'] + ': ' + msg['message'];
							this.snackBar.open(notification, '', {
								duration: 7000,
							});
						}
					}
				},
				(error) => {
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
