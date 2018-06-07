import { Component, OnInit, ViewChild } from '@angular/core';
import { RatingSliderComponent } from './rating-slider/rating-slider.component';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { CookieService } from 'ngx-cookie-service';
import { MatSidenav } from '@angular/material/sidenav';
import { SearchParams } from './SearchParams'

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
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
		rating: 0,
		tags: null
	};

	sortedUsers;
	panelOpenState: boolean = false;

	@ViewChild('sidenav') sidenav: MatSidenav;

	constructor(
		private cookieService: CookieService,
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
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
					this.fillSearchParams(data);
					this.getUsersByParams(this.searchParams);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	fillSearchParams(data) {
		this.searchParams.ageMin = data.ageMin;
		this.searchParams.ageMax = data.ageMax;
		this.searchParams.distance = data.distance;
		this.searchParams.gender = data.gender;
		this.searchParams.latitude = data.latitude;
		this.searchParams.longtitude = data.longtitude;
		this.searchParams.preferences = data.preferences;
		this.searchParams.rating = data.rating;
		this.searchParams.tags = data.tags;
	}

	getUsersByParams(params) {
		let token = this.cookieService.get('RefreshToken');
		params['refreshToken'] = token;
		let regexp = require('year-range-regex');
		regexp = regexp(params['ageMin'], params['ageMax']);
		params['ageRegExp'] = String(regexp);
		this.userInfoService.sendRequest('getUsersByParams', params)
			.toPromise()
			.then(
				(data) => {
					this.sortedUsers = data;
					console.log(this.sortedUsers);
				},
				(error) => {
					console.log(error);
				}
			);
	}

}
