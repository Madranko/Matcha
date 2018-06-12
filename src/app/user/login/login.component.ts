import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authorization } from '../authorization/authorization.model';
import { Patterns } from '../authorization/patterns.model';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization/authorization.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [
		'./login.component.css',
		'../../home/home.component.css'
	]
})
export class LoginComponent implements OnInit {
	error: string;

	constructor(
		private authorizationService: AuthorizationService,
		private router: Router,
		private cookieService: CookieService
	) { }

	ngOnInit() {
		this.authorizationService.user = new Authorization();
		this.authorizationService.patterns = new Patterns();
		this.resetForm();
	}

	resetForm(form? : NgForm) {
		if (form != null) {
			form.reset();
			this.authorizationService.user = {
				firstName: '',
				lastName: '',
				login: '',
				email: '',
				password: ''
			}
		}
	}

	OnSubmit(form: NgForm) {
		if (this.checkForm()) {
			this.loginToProfile();
		}
	}

	checkForm() {
		if (this.authorizationService.patterns.loginPattern.test(this.authorizationService.user.login) &&
		this.authorizationService.patterns.passwordPattern.test(this.authorizationService.user.password)) {
			return true;
		} else {
			return false;
		}
	}

	loginToProfile(): void {
		this.authorizationService.sendData('login', this.authorizationService.user)
		.toPromise()
		.then(
			(data) => {
				this.error = '';
				this.authorizationService.setTokensInCookie(data);
				this.authorizationService.openUserProfilePage(data['firstTimeLogin']);
			},
			(error) => {
				if (this.cookieService.get('AccessToken')) {
					this.authorizationService.deleteTokensAndLogout();
				}
				this.error = error.error.exception[0].message;
			}
		);
	}
}
