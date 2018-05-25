import { Component, OnInit } from '@angular/core';
import { Authorization } from '../authorization/authorization.model';
import { Patterns } from '../authorization/patterns.model';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-forgot-pass',
	templateUrl: './forgot-pass.component.html',
	styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
	user: Authorization;
	patterns: Patterns;
	error: string;

	constructor() { }

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
			console.log('Email was sent');
		}
	}

	checkForm() {
		if (this.patterns.emailPattern.test(this.user.email)) {
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
