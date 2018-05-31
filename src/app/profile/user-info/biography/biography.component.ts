import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
	selector: 'app-biography',
	templateUrl: './biography.component.html',
	styleUrls: ['./biography.component.css'],
	viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class BiographyComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

}
