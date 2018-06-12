import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { ChangeService } from '../change.service';
import { Authorization } from '../../../user/authorization/authorization.model';
import { Patterns } from '../../../user/authorization/patterns.model';

@Component({
	selector: 'app-change-preferences',
	templateUrl: './change-preferences.component.html',
	styleUrls: [
		'./change-preferences.component.css',
		'../settings.component.css'
	]
})
export class ChangePreferencesComponent implements OnInit {
	preferences = [
		{
			value: 'heterosexual',
			viewValue: 'Heterosexual'
		},
		{
			value: 'homosexual',
			viewValue: 'Homosexual'
		},
		{
			value: 'bisexual',
			viewValue: 'Bisexual'
		}
	];

	selected: string;
	value: string;
	constructor(
		private changeService: ChangeService,
		private userInfoService: UserInfoService
	) { }

	ngOnInit() {
	}

	saveChanges(value, toChange) {
		if (value) {
			this.changeService.changeUserInfo(value, toChange);
		}
	}

}
