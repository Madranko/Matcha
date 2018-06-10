import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { webSocket } from 'rxjs/webSocket';
import { ajax } from 'rxjs/ajax';
import { CookieService } from 'ngx-cookie-service';
import { AuthorizationService } from './user/authorization/authorization.service';
import { UserInfoService } from './profile/user-info/service/user-info.service';

@Injectable({
	providedIn: 'root'
})
export class WebsocketService {

	constructor(
		private userInfoService: UserInfoService,
		private authorizationService: AuthorizationService,
		private cookieService: CookieService
	) { }

	private subject: Subject<MessageEvent>;

	public connect(url): Subject<MessageEvent> {
		if (!this.subject) {
			this.subject = this.create(url);
			console.log("Successfully Connected:" + url);
		}
		return this.subject;
	}

	private create(url): Subject<MessageEvent> {
		let ws = new WebSocket(url);

		let observable = Observable.create(
			(obs) => {
				ws.onmessage = obs.next.bind(obs);
				ws.onerror = obs.error.bind(obs);
				ws.onclose = obs.complete.bind(obs);
				return ws.close.bind(ws);
			}
		)

		let observer = {
			next: (data: Object) => {
				if (ws.readyState === WebSocket.OPEN) {
					ws.send(JSON.stringify(data));
				}
			}
		}
		return Subject.create(observer, observable);
	}
}
