import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class AuthorizationService {

	constructor(private http: HttpClient) { }

	putData(route, data): Observable<any> {
		console.log(route);
		console.log(data);
		return this.http.post('http://localhost:8100/' + route, data);
	}
}
