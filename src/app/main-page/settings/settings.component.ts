import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { ChatService } from '../../chat-service/chat.service';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	constructor(
		private userInfoService: UserInfoService,
		private cookieService: CookieService,
		private chatService: ChatService,
		private authorizationService: AuthorizationService,
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

	onSubmit() {
		this.authorizationService.refreshTokens();
	}
}
