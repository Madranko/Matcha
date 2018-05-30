import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserInfoService {

	constructor(
		private http: HttpClient
	) { }

	getData(route): Observable<any> {
		return this.http.get('http://localhost:8100/api/user-info/' + route);
	}

	getLocation() {
		
	}
}
