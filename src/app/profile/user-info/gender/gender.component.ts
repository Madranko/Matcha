import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
	selector: 'app-gender',
	templateUrl: './gender.component.html',
	styleUrls: [
		'./gender.component.css',
		'../user-info.component.css'
	],
	viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class GenderComponent implements OnInit {
	genders = [
		{
			value: 'male',
			viewValue: 'Male'
		},
		{
			value: 'female',
			viewValue: 'Female'
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
