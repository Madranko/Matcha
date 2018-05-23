import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authorization } from '../authorization/authorization.model';
import { Patterns } from '../authorization/patterns.model';
import { toPromise } from 'rxjs/add/operator/toPromise';

import { AuthorizationService } from '../authorization/authorization.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user: Authorization;
	patterns: Patterns;
	error: string;

	constructor(private authorizationService: AuthorizationService) { }

	ngOnInit() {
		this.user = new Authorization();
		this.patterns = new Patterns();
		this.resetForm();
	}

	resetForm(form? : NgForm) {
		if (form != null) {
			form.reset();
			this.user = {
				Login: '',
				Password: ''
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
		this.authorizationService.putData('login', this.user)
		.toPromise()
		.then(
			(data) => {
				console.log(data);
				this.error = '';
				this.openUserProfilePage();
			},
			(error) => {
				this.error = error.error.exception[0].message;
			}
		);
	}

	//loginToProfile(): Promise {
	//	let promise = new Promise((resolve, reject) => {
	//		let testData;
	//		this.authorizationService.putData('login', this.user)
	//			.subscribe(
	//				(data) => {
	//					testData = data;
	//					console.log(testData);
	//				},
	//				(error) => {
	//					this.error = error.error.exception[0].message;
	//					console.log(this.error);
	//				}
	//			);
	//		if (this.error) {
	//			reject();
	//		} else {
	//			resolve();
	//		}
	//	});
	//	console.log('promise');
	//	return promise;
	//}

	//loginToProfile(): void {
	//	this.authorizationService.putData('login', this.user)
	//	.subscribe(
	//		(data) => {
	//			console.log(data);
	//		},
	//		(error) => {
	//			this.error = error.error.exception[0].message;
	//			console.log(this.error);
	//		});
	//}

	openUserProfilePage(): void {
		if (!this.error) {
			window.open('/user-profile', '_self');
		}
	}
}
