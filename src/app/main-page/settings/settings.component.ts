import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { ChatService } from '../../chat-service/chat.service';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';

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
		private authorizationService: AuthorizationService
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
					if (data == false) {
						if (msg['recievedMessage']['notification']) {
							let notification = msg['recievedMessage']['from_login'] + ': ' + msg['recievedMessage']['notification'];
							Materialize.toast(msg['recievedMessage']['notification'], 7000, "cyan lighten-1");
						} else if (msg['recievedMessage']['message']) {
							let notification = msg['recievedMessage']['from_login'] + ': ' + msg['recievedMessage']['message'];
							Materialize.toast(notification, 7000, "cyan lighten-1");
						}
					}
				},
				(error) => {
				}
			)
		});
	}

	ngOnInit() {

		// this.authorizationService.refreshTokens();
	}

	onSubmit() {
		this.authorizationService.refreshTokens();
	}
}
