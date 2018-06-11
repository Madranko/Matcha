import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../chat-service/chat.service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-messenger',
	templateUrl: './messenger.component.html',
	styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

	@Input() reciever_id;
	@Input() current_id;
	@Input() messages;
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

						if (msg['recievedMessage']['from_id'] == this.reciever_id) {
							let newMessages = {
								'current_id': this.reciever_id,
								'target_id': msg['recievedMessage']['to'],
								'message': msg['recievedMessage']['message']
							}
							this.messages.unshift(newMessages);
						} else {
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

	sendMessage(message) {
		console.log(message);
		console.log(this.reciever_id);
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
				// console.log(this.reciever_id);
				console.log(data);
				console.log(this.messages);
			},
			(error) => {
				console.log(error);
			}
		);
		// console.log(this.data);
		// this.changeService.changeUserInfo(value, toChange);
	}

}
