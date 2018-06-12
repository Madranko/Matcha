import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { ChatService } from '../../chat-service/chat.service';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
	currentUid;
	likedHistory;
	visitHistory;
	blockHistory;

	constructor(
		private chatService: ChatService,
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
					console.log(error);
				}
			)
		});
	}

	ngOnInit() {
		this.getLikedHistory();
		this.getVisitHistory();
		this.getBlockHistory();
		this.getCurrentUserId();
	}

	getLikedHistory() {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken')
		};
		this.userInfoService.sendRequest('getLikedHistory', data)
		.toPromise()
		.then(
			(data) => {
				console.log(data);
				this.likedHistory = data;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getVisitHistory() {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken')
		};
		this.userInfoService.sendRequest('getVisitHistory', data)
		.toPromise()
		.then(
			(data) => {
				console.log(data);
				this.visitHistory = data;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getBlockHistory() {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken')
		};
		this.userInfoService.sendRequest('getBlockHistory', data)
		.toPromise()
		.then(
			(data) => {
				console.log(data);
				this.blockHistory = data;
			},
			(error) => {
				console.log(error);
			}
		);
	}

	getCurrentUserId() {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken')
		};
		this.userInfoService.sendRequest('getCurrentUserId', data)
		.toPromise()
		.then(
			(data) => {
				this.currentUid = data;
			},
			(error) => {
				console.log(error);
			}
		);
	}

}
