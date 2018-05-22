import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Authorization } from '../authorization/authorization.model';
import { Patterns } from '../authorization/patterns.model';
import { AuthorizationService } from '../authorization/authorization.service';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	user : Authorization;
	patterns : Patterns;

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
			this.saveUserData();
			console.log("OKOKOKOK");
		}
	}

	checkForm() {
		if (this.patterns.emailPattern.test(this.user.Email) &&
		this.patterns.loginPattern.test(this.user.Login) &&
		this.patterns.passwordPattern.test(this.user.Password) &&
		this.patterns.firstnamePattern.test(this.user.FirstName) &&
		this.patterns.lastnamePattern.test(this.user.LastName)) {
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
		this.authorizationService.putData('signup', this.user)
		.subscribe(
			(data) => {
				console.log(data);
			},
			(error) => {
				console.log(error);
			});
		}
	}
