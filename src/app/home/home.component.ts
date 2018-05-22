import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	windowWidth = window.innerWidth;

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}
	constructor() { }
	
	ngOnInit() {
	}

}
