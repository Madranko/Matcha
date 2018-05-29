import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-birthdate',
	templateUrl: './birthdate.component.html',
	styleUrls: ['./birthdate.component.css']
})
export class BirthdateComponent implements OnInit {
	minDate = new Date(1900, 0, 1);
	maxDate = new Date(2000, 0, 1);

	constructor() { }

	ngOnInit() {
	}
}
