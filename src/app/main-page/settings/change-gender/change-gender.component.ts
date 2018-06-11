import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { ChangeService } from '../change.service';
import { Authorization } from '../../../user/authorization/authorization.model';
import { Patterns } from '../../../user/authorization/patterns.model';

@Component({
	selector: 'app-change-gender',
	templateUrl: './change-gender.component.html',
	styleUrls: [
		'./change-gender.component.css',
		'../settings.component.css'
	]
})
export class ChangeGenderComponent implements OnInit {
	selectedGender: string;
	genders = [
		{
			value: 'male',
			viewValue: 'Male'
		},
		{
			value: 'female',
			viewValue: 'Female'
		}
	];
	constructor(
		private changeService: ChangeService,
		private userInfoService: UserInfoService
	) { }

	ngOnInit() {
	}

	saveChanges(value, toChange) {
		console.log(value);
		if (value) {
			this.changeService.changeUserInfo(value, toChange);
		}
	}

}
