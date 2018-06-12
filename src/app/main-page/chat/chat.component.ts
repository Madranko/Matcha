import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../../chat-service/chat.service';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: [
		'./chat.component.css',
		'../search/search.component.css'
	]
})
export class ChatComponent implements OnInit {

	connectedUsers = [];
	reciever_id: string;
	messages = [];
	current_id: string;
	@ViewChild('sidenav') sidenav: MatSidenav;

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
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken')
		}
		this.userInfoService.sendRequest('findConnected', data)
		.toPromise()
		.then(
			(data) => {
				this.connectedUsers = data;
			},
			(error) => {
			}
		);
	}

	reason = '';

	close(reason: string) {
		this.reason = reason;
		this.sidenav.close();
		// this.getUsersByParams(this.searchParams);
	}

	startChat(id) {
		this.reciever_id = id;
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'target_id': this.reciever_id,
		}
		this.userInfoService.sendRequest('getMessagesForChat', data)
		.toPromise()
		.then(
			(data) => {
				this.messages = data['messages'];
				this.current_id = data['current_id'];
			},
			(error) => {
			}
		)
		this.sidenav.open();
	}
}
