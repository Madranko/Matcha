import { Component, OnInit, ViewChild } from '@angular/core';
import { RatingSliderComponent } from './rating-slider/rating-slider.component';
import { UserInfoService } from '../../profile/user-info/service/user-info.service';
import { AuthorizationService } from '../../user/authorization/authorization.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	@ViewChild('sidenav') sidenav: MatSidenav;

	constructor(
		private cookieService: CookieService,
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
		this.getSearchParamsAndBrowseUsers();
	}

	searchParams = { };

	reason = '';

	close(reason: string) {
		this.reason = reason;
		this.sidenav.close();
	}

	formatLabel(value: number | null) {
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
				console.log(this.searchParams);
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
		let regexp = require('year-range-regex');
 		regexp = regexp(params['ageMin'], params['ageMax']);
		params['ageRegExp'] = String(regexp);
		console.log(params);
		this.userInfoService.sendRequest('getUsersByParams', params)
		.toPromise()
		.then(
			(data) => {
				console.log(data);
			},
			(error) => {
				console.log(error);
			}
		);
	}

}
