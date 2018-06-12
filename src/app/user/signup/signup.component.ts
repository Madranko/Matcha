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
	styleUrls: [
		'./signup.component.css',
		'../../home/home.component.css'
	]
})
export class SignupComponent implements OnInit {
	error: string;

	constructor(
		private authorizationService: AuthorizationService,
		private router: Router
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
			this.saveUserData();
		}
	}

	checkForm() {
		if (this.authorizationService.patterns.emailPattern.test(this.authorizationService.user.email) &&
		this.authorizationService.patterns.loginPattern.test(this.authorizationService.user.login) &&
		this.authorizationService.patterns.passwordPattern.test(this.authorizationService.user.password) &&
		this.authorizationService.patterns.firstnamePattern.test(this.authorizationService.user.firstName) &&
		this.authorizationService.patterns.lastnamePattern.test(this.authorizationService.user.lastName)) {
			return true;
		} else {
			return false;
		}
	}

	saveUserData(): void {
		this.authorizationService.sendData('signUp', this.authorizationService.user)
		.toPromise()
		.then(
			(data) => {
				this.error = '';
				this.router.navigate(['/home/congrats']);
			},
			(error) => {
				this.error = error.error.exception[0].message;
			});
		}
	}
