import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-gender',
	templateUrl: './gender.component.html',
	styleUrls: [
		'./gender.component.css',
		'../user-info.component.css'
	]
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
		},
		{
			value: 'Transgender',
			viewValue: 'Transgender'
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
