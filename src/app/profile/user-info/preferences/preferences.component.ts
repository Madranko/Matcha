import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
	selector: 'app-preferences',
	templateUrl: './preferences.component.html',
	styleUrls: [
		'./preferences.component.css',
		'../user-info.component.css'
	],
	viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
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
			viewValue: 'Bisexual'
		}
	];

	selected: string = this.preferences[2].viewValue;

	constructor() { }

	ngOnInit() {
	}

}
