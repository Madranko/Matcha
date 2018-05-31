import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.css'
		// './fontawesome/css/fontawesome-all.min.css'
	]
})
export class AppComponent {

	constructor(
		private cookieService: CookieService
	) { }

	// windowWidth = window.innerWidth;

	// onResizez(event) {
	// 	this.windowWidth = event.target.innerWidth;
	// }

	// isUserLoggedIn(): boolean {
	// 	if (
	// 		this.cookieService.check('AccessToken') &&
	// 		this.cookieService.check('RefreshToken') &&
	// 		this.cookieService.check('ExpireTime')
	// 	) {
	// 		return true;
	// 	}
	// 	return false;
	// }
}
