import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Authorization } from '../authorization/authorization.model';
import { Patterns } from '../authorization/patterns.model';
import { AuthorizationService } from '../authorization/authorization.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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
			this.saveUserData();
		}
	}

	checkForm() {
		if (this.patterns.emailPattern.test(this.user.email) &&
		this.patterns.loginPattern.test(this.user.login) &&
		this.patterns.passwordPattern.test(this.user.password) &&
		this.patterns.firstnamePattern.test(this.user.firstName) &&
		this.patterns.lastnamePattern.test(this.user.lastName)) {
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

	saveUserData(): void {
		this.authorizationService.sendData('api/signup', this.user)
		.toPromise()
		.then(
			(data) => {
				console.log(data);
				this.error = '';
				this.router.navigate(['/home/congrats']);
			},
			(error) => {
				this.error = error.error.exception[0].message;
			});
		}

		//saveUserData(): void {
		//	this.authorizationService.putData('signup', this.user)
		//	.subscribe(
		//		(data) => {
		//			console.log(data);
		//		},
		//		(error) => {
		//			this.error = error.error.exception[0].message;
		//			console.log(this.error);
		//		});
		//}
	}
