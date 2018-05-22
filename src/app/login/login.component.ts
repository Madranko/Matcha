import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Authorization } from '../authorization/authorization.model';
import { Patterns } from '../authorization/patterns.model';

import { AuthorizationService } from '../authorization/authorization.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user : Authorization;
	patterns : Patterns;
	test = {};

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
				FirstName: '',
				LastName: '',
				Login: '',
				Email: '',
				Password: ''
			}
		}
	}

	OnSubmit(form: NgForm) {
		if (this.checkForm()) {
			console.log('OK');
		} else {
			console.log('ERROR');
		}
	}

	checkForm() {
		if (this.patterns.loginPattern.test(this.user.Login) &&
		this.patterns.passwordPattern.test(this.user.Password)) {
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
}
