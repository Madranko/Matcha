import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../chat-service/chat.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBar } from '@angular/material';

@Component({
	selector: 'app-messenger',
	templateUrl: './messenger.component.html',
	styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

	@Input() reciever_id;
	@Input() current_id;
	@Input() messages;
	message: string;
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
						if (msg['from_id'] == this.reciever_id) {
							let newMessages = {
								'current_id': this.reciever_id,
								'target_id': msg['to'],
								'message': msg['message']
							}
							this.messages.unshift(newMessages);
						} else {
							if (msg['message']) {
								let notification = msg['from_login'] + ': ' + msg['message'];
								this.snackBar.open(notification, '', {
									duration: 7000,
								});
							}
						}
						if (msg['notification']) {
							let notification = msg['from_login'] + ': ' + msg['notification'];
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

	sendMessage(message) {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'target_id': this.reciever_id,
			'message': message
		}
		this.message = "";
		this.chatService.sendMessage(this.reciever_id, "", message);
		this.userInfoService.sendRequest('storeChatMessage', data)
		.toPromise()
		.then(
			(data) => {

				this.messages = data['messages'];
				this.current_id = data['current_id'];
			},
			(error) => {
			}
		);
		// this.changeService.changeUserInfo(value, toChange);
	}

}
