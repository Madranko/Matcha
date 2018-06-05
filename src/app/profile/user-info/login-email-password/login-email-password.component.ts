import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { Authorization } from '../../../user/authorization/authorization.model';
import { Patterns } from '../../../user/authorization/patterns.model';

@Component({
	selector: 'app-login-email-password',
	templateUrl: './login-email-password.component.html',
	styleUrls: ['./login-email-password.component.css']
})
export class LoginEmailPasswordComponent implements OnInit {
	constructor(
		private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
		this.authorizationService.user = new Authorization();
		this.authorizationService.patterns = new Patterns();
	}

}
