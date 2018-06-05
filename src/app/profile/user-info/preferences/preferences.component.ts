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
			value: 'heterosexual',
			viewValue: 'Heterosexual'
		},
		{
			value: 'homosexual',
			viewValue: 'Homosexual'
		},
		{
			value: 'bisexual',
			viewValue: 'Bisexual'
		}
	];

	selected: string = this.preferences[2].viewValue;
	value: string = "Allo";
	constructor() { }

	ngOnInit() {
		this.value = "ALLO"
	}

}
