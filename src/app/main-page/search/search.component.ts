import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSidenav } from '@angular/material/sidenav';
import { SearchParams } from './SearchParams';
import { ChatService } from '../../chat-service/chat.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: [
		'./search.component.css',
		'../../profile/user-info/user-info.component.css'
	]
})
export class SearchComponent implements OnInit {
	searchParams: SearchParams = {
		ageMin: 18,
		ageMax: 99,
		distance: 0,
		gender: 'male',
		latitude: 0,
		longtitude: 0,
		preferences: null,
		order: 'DESC',
		orderField: 'rating',
		rating: 0,
		tags: null
	};
	visible: boolean = true;
	selectable: boolean = true;
	removable: boolean = true;
	addOnBlur: boolean = false;
	error: string;
	counter = 0;
	separatorKeysCodes = [ENTER, COMMA];
	tagCtrl = new FormControl();
	filteredTags: Observable<any[]>;
	tags = [];
	allTags = [];
	order = [
		{
			name: 'Ascending',
			value: 'ASC'
		},
		{
			name: 'Descending',
			value: 'DESC'
		}
	];
	orderFields = [
		{
			name: 'Age',
			value: 'birthdate'
		},
		{
			name: 'Location',
			value: 'distance'
		},
		{
			name: 'Rating',
			value: 'rating'
		}
	];

	sortedUsers;
	panelOpenState: boolean = false;

	@ViewChild('sidenav') sidenav: MatSidenav;
	@ViewChild('tagInput') tagInput: ElementRef;

	constructor(
		private chatService: ChatService,
		private cookieService: CookieService,
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService
	) {
		this.filteredTags = this.tagCtrl.valueChanges.pipe(
			startWith(null),
			map((tag: string | null) => tag ? this.filter(tag) : this.allTags.slice()));

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
							if (msg['recievedMessage']['notification']) {
								console.log('NOTIFICATION');
								console.log(msg['recievedMessage']['notification']);
								let notification = msg['recievedMessage']['from_login'] + ': ' + msg['recievedMessage']['notification'];
								Materialize.toast(msg['recievedMessage']['notification'], 7000, "cyan lighten-1");
							} else if (msg['recievedMessage']['message']) {
								console.log('MESSAGE');
								console.log(msg['recievedMessage']['message']);
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
		this.getAllInterests();
		this.getSearchParamsAndBrowseUsers();
	}

	reason = '';

	close(reason: string) {
		this.reason = reason;
		this.sidenav.close();
		this.getUsersByParams(this.searchParams);
		console.log(this.searchParams);
	}

	ratingLabel(value: number | null) {
		if (!value) {
			return 0;
		}
		return value;
	}

	ageMinLabel(value: number | null) {
		if (!value) {
			return 0;
		}
		return value;
	}

	ageMaxLabel(value: number | null) {
		if (!value) {
			return 0;
		}
		return value;
	}

	distanceLabel(value: number | null) {
		if (!value) {
			return 0;
		}
		return value;
	}

	getSearchParamsAndBrowseUsers() {
		let cookies = this.authorizationService.getTokensFromCookie();
		this.userInfoService.sendRequest('getSearchParams', cookies)
			.toPromise()
			.then(
				(data) => {
					this.searchParams = data;
					this.searchParams['tags'] = this.tags;
					this.getUsersByParams(this.searchParams);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	getUsersByParams(params) {
		let token = this.cookieService.get('RefreshToken');
		params['refreshToken'] = token;
		this.userInfoService.sendRequest('getUsersByParams', params)
			.toPromise()
			.then(
				(data) => {
					this.sortedUsers = data;
					console.log(data);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	getAllInterests() {
		this.userInfoService.getData("getInterests")
			.toPromise()
			.then(
				(data) => {
					this.error = '';
					this.allTags = data;
				},
				(error) => {
					console.log("ERROR");
					this.error = error.error.exception[0].message;
				}
			);
	}

	add(event: MatChipInputEvent): void {
		const input = event.input;
		const value = event.value;
		const pattern = new RegExp("^[a-zA-Z0-9]{2,15}$");
		if (pattern.test(value) && this.counter < 10) {
			if ((value || '').trim() && this.checkIfExists(value)) {
				this.tags.push(value.trim());
				this.counter = this.tags.length;
			}
		}
		if (input) {
			input.value = '';
		}

		this.tagCtrl.setValue(null);
	}

	checkIfExists(tag) {
		for(var i in this.tags) {
			if (this.tags[i] == tag) {
				return false;
			}
		}
		return true;
	}

	remove(tag: any): void {
		const index = this.tags.indexOf(tag);

		if (index >= 0) {
			this.tags.splice(index, 1);
			this.counter = this.tags.length;
		}
	}

	filter(name: string) {
		return this.allTags.filter(tag =>
			tag.toLowerCase().indexOf(name.toLowerCase()) === 0);
	}

	selected(event: MatAutocompleteSelectedEvent): void {
		if (this.checkIfExists(event.option.viewValue)) {
			this.tags.push(event.option.viewValue);
			this.tagInput.nativeElement.value = '';
			this.tagCtrl.setValue(null);
		}
	}
}
