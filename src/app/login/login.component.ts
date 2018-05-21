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
				Login: '',
				Password: ''
			}
		}
	}

	OnSubmit(form: NgForm) {
		if (this.patterns.loginPattern.test(this.user.Login) &&
			this.patterns.passwordPattern.test(this.user.Password)) {
			console.log('OK');
		} else {
			console.log('ERROR');
			this.getTest();
		}
	}

	getTest(): void {
		this.authorizationService.getTest().subscribe((data) => {
			this.test = data;
		console.log(this.test);
		});
	}

	postTest(): void {
		console.log('hello');
		this.authorizationService.postTest();
	}
}
