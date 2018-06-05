import { Component, OnInit } from '@angular/core';

import { AuthorizationService } from '../../../user/authorization/authorization.service';
import { Authorization } from '../../../user/authorization/authorization.model';
import { Patterns } from '../../../user/authorization/patterns.model';

@Component({
	selector: 'app-first-last-name',
	templateUrl: './first-last-name.component.html',
	styleUrls: ['./first-last-name.component.css']
})
export class FirstLastNameComponent implements OnInit {

	constructor(
			private authorizationService: AuthorizationService
	) { }

	ngOnInit() {
		this.authorizationService.user = new Authorization();
		this.authorizationService.patterns = new Patterns();
	}

}
