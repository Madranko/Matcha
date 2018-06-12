import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { ChatService } from '../../chat-service/chat.service';
import { MatSnackBar } from '@angular/material';

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
				this.likedHistory = data;
			},
			(error) => {
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
				this.visitHistory = data;
			},
			(error) => {
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
				this.blockHistory = data;
			},
			(error) => {
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
			}
		);
	}

}
