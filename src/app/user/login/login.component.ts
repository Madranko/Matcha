import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authorization } from '../authorization/authorization.model';
import { Patterns } from '../authorization/patterns.model';
import { toPromise } from 'rxjs/add/operator';
import { Router } from '@angular/router';
import { AuthorizationService } from '../authorization/authorization.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user: Authorization;
	patterns: Patterns;
	error: string;

	constructor(
		private authorizationService: AuthorizationService,
		private router: Router
	) { }

	ngOnInit() {
		this.user = new Authorization();
		this.patterns = new Patterns();
		this.resetForm();
	}

	resetForm(form? : NgForm) {
		if (form != null) {
			form.reset();
			this.user = {
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
		if (this.patterns.loginPattern.test(this.user.login) &&
		this.patterns.passwordPattern.test(this.user.password)) {
			return true;
		} else {
			return false;
		}
	}

	checkPattern(pattern, field) {
		if (this.user[field]) {
			if (this.patterns[pattern].test(this.user[field])) {
				return true;
			} else {
				return false;
			}
		}
	}

	getErrorMessage(name, field) {
		if (this.user[field]) {
			return ("Not a valid " + name);
		}
	}

	loginToProfile(): void {
		this.authorizationService.sendData('api/login', this.user)
		.toPromise()
		.then(
			(data) => {
				// console.log(data);
				this.error = '';
				this.authorizationService.setTokensInCookie(data);
				this.openUserProfilePage();
			},
			(error) => {
				console.log("ERROR");
				this.error = error.error.exception[0].message;
			}
		);
	}

	openUserProfilePage(): void {
		if (!this.error) {
			window.open('/profile', '_self');
		}
	}
}
