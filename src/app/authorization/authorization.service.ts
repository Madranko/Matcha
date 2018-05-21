import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { HttpClient HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class AuthorizationService {

	constructor(private http: HttpClient) { }

	test: string;

	getTest(): Observable {
		return this.http.get('http://localhost:8100/test');
	}

	postTest(): void {
		this.http.post('http://localhost:8100/test', {login: 'bla', pass: 'alsdk'});
	}
}
