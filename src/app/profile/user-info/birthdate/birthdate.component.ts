import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
	selector: 'app-birthdate',
	templateUrl: './birthdate.component.html',
	styleUrls: [
		'./birthdate.component.css',
		'../user-info.component.css'
	],
	viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class BirthdateComponent implements OnInit {
	minDate = new Date(1900, 0, 1);
	maxDate = new Date(2000, 0, 1);

	value: any;
	constructor() { }

	ngOnInit() {
	}
}
