import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { ChangeService } from '../change.service';
import { Authorization } from '../../../user/authorization/authorization.model';
import { Patterns } from '../../../user/authorization/patterns.model';

@Component({
	selector: 'app-change-last-name',
	templateUrl: './change-last-name.component.html',
	styleUrls: [
		'./change-last-name.component.css',
		'../settings.component.css'
	]
})
export class ChangeLastNameComponent implements OnInit {

	constructor(
		private changeService: ChangeService,
		private authorizationService: AuthorizationService,
		private userInfoService: UserInfoService

	) { }

	ngOnInit() {
		this.authorizationService.user = new Authorization();
		this.authorizationService.patterns = new Patterns();
	}

	saveChanges(value, toChange) {
		this.changeService.changeBasicInfo(value, toChange);
	}

}
