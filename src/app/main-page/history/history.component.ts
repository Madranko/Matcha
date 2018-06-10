import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';

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
		private userInfoService: UserInfoService,
		private cookieService: CookieService
	) { }

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
