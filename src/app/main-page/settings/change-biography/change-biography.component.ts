import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { ChangeService } from '../change.service';

@Component({
	selector: 'app-change-biography',
	templateUrl: './change-biography.component.html',
	styleUrls: [
		'./change-biography.component.css',
		'../settings.component.css'
	]
})
export class ChangeBiographyComponent implements OnInit {

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
