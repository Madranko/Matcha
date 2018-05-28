import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../user/authorization/authorization.service';
import { Router } from '@angular/router';
import { toPromise } from 'rxjs/add/operator';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	error: string;

	constructor(
		private authorizationService: AuthorizationService,
		private router: Router
	) { }

	ngOnInit() {
		if (this.authorizationService.isTokensExists()) {
			this.authorizationService.loginIfTokensValid();
		}
	}

}
