import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	windowWidth = window.innerWidth;

	onResizez(event) {
		this.windowWidth = event.target.innerWidth;
	}
}
