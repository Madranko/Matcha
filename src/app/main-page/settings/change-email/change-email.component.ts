import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { UserInfoService } from '../../../profile/user-info/service/user-info.service';
import { ChangeService } from '../change.service';
import { Authorization } from '../../../user/authorization/authorization.model';
import { Patterns } from '../../../user/authorization/patterns.model';

@Component({
	selector: 'app-change-email',
	templateUrl: './change-email.component.html',
	styleUrls: [
		'./change-email.component.css',
		'../settings.component.css'
	]
})
export class ChangeEmailComponent implements OnInit {

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
		if (value) {
			this.changeService.changeBasicInfo(value, toChange);
		}
	}

}
