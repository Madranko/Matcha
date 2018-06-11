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
	) { }

	ngOnInit() {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken')
		}
		this.userInfoService.sendRequest('findConnected', data)
		.toPromise()
		.then(
			(data) => {
				this.connectedUsers = data;
				console.log(this.connectedUsers);
			},
			(error) => {
				console.log(error);
			}
		);
	}

	reason = '';

	close(reason: string) {
		this.reason = reason;
		this.sidenav.close();
		// this.getUsersByParams(this.searchParams);
		// console.log(this.searchParams);
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
				console.log(data);
				this.messages = data['messages'];
				this.current_id = data['current_id'];
			},
			(error) => {
				console.log(error);
			}
		)
		this.sidenav.open();
	}
}
