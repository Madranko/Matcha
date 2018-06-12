import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { CookieService } from 'ngx-cookie-service';
import { ChatService } from '../../../chat-service/chat.service';

@Component({
	selector: 'app-visit-page',
	templateUrl: './visit-page.component.html',
	styleUrls: ['./visit-page.component.css']
})
export class VisitPageComponent implements OnInit {
	uid: number;
	private sub: any;
	windowWidth = window.innerWidth;

	profileImageUrl: string = "assets/upload.svg";
	biography: string;
	birthdate: string;
	galleryPhotos = {
		0: "assets/upload.svg",
		1: "assets/upload.svg",
		2: "assets/upload.svg",
		3: "assets/upload.svg"
	};
	gender: string;
	preferences: string;
	shortInfo = [];
	tags = [];
	liked: boolean;
	blocked: boolean;

	constructor(
		private chatService: ChatService,
		private route: ActivatedRoute,
		private authorizationService: AuthorizationService,
		private userInfoService: UserInfoService,
		private cookieService: CookieService
	) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe((params) => {
			this.uid = +params['id'];
			this.getInfo(this.uid);
			this.chatService.sendMessage(this.uid, "visited your page", "");
			this.saveVisitToHistory();
		});

	}

	getInfo(uid) {
		let cookies = this.authorizationService.getTokensFromCookie();
		let data = {
			'uid': uid,
			'cookie': cookies
		}
		this.userInfoService.sendRequest('getVisitedUserInfo', data)
		.toPromise()
		.then(
			(data) => {
				this.saveData(data);
			},
			(error) => {
			}
		);
	}

	saveVisitToHistory() {
		let data = {
			'targetUid': this.uid,
			'refreshToken': this.cookieService.get('RefreshToken')
		};
		this.userInfoService.sendRequest('saveVisitToHistory', data)
		.toPromise()
		.then(
			(data) => {
				;
			},
			(error) => {
			}
		);
	}

	saveData(data) {
		this.profileImageUrl = "http://localhost:8100/" + data['profilePhoto'];
		this.biography = data['biography'];
		this.birthdate = data['birthdate'];
		this.gender = data['gender'];
		this.preferences = data['preferences'];
		this.shortInfo = data['shortInfo'];
		this.tags = data['tags'];
		this.liked = data['liked'];
		this.blocked = data['blocked'];
		if (data['galleryPhotos']) {
			for (let i = 0; i < data['galleryPhotos'].length; i++) {
				this.galleryPhotos[i] = "http://localhost:8100/" + data['galleryPhotos'][i];
			}
		}
	}

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}

	likeUnlike() {
		let cookies = this.authorizationService.getTokensFromCookie();
		let data = {
			'liked': this.liked,
			'visitedUid': this.uid,
			'cookie': cookies
		};

		this.userInfoService.sendRequest('likeUnlike', data)
		.toPromise()
		.then(
			(data) => {
				this.shortInfo['rating'] = data;
			},
			(error) => {
			}
		);

		if (this.liked) {
			this.chatService.sendMessage(this.uid, "unliked you", "");
			this.liked = false;
		} else {
			this.chatService.sendMessage(this.uid, "liked you", "");
			this.liked = true;
		}
	}

	reportUser() {
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'visitedUid': this.uid
		};
		this.userInfoService.sendRequest('reportUser', data)
		.toPromise()
		.then(
			(data) => {
			},
			(error) => {
			}
		);
	}

	blockUser() {
		this.blocked = true;
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'visitedUid': this.uid
		};
		this.userInfoService.sendRequest('blockUser', data)
		.toPromise()
		.then(
			(data) => {
				;
			},
			(error) => {
			}
		);
	}

	unBlockUser() {
		this.blocked = false;
		let data = {
			'refreshToken': this.cookieService.get('RefreshToken'),
			'visitedUid': this.uid
		};
		this.userInfoService.sendRequest('unBlockUser', data)
		.toPromise()
		.then(
			(data) => {
				;
			},
			(error) => {
			}
		);
	}
}
