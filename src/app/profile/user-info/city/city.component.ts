import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-city',
	templateUrl: './city.component.html',
	styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	city = [
		{value: 'steak-0', viewValue: 'Kyiv'},
		{value: 'pizza-1', viewValue: 'Kharkiv'},
		{value: 'tacos-2', viewValue: 'Odessa'}
	];
}
