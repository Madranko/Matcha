import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-preferences',
	templateUrl: './preferences.component.html',
	styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
	preferences = [
		{
			value: 'hetero',
			viewValue: 'Heterosexual'
		},
		{
			value: 'gay',
			viewValue: 'Homosexual'
		},
		{
			value: 'bi',
			viewValue: 'Biosexual'
		}
	];

	constructor() { }

	ngOnInit() {
	}

}
