import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FullUserInfo } from './service/full-user-info.model';

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
	info: FullUserInfo;
	constructor(
		private router: Router
	) { }

	ngOnInit() {
		this.info = new FullUserInfo();
	}

	onSubmit(form: NgForm) {
		// console.log(form._directives);
	}
}
