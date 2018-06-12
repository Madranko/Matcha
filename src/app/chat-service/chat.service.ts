import { Injectable } from '@angular/core';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { WebsocketService } from '../websocket.service';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { UserInfoService } from '../profile/user-info/service/user-info.service';

export interface Message {
	from_id: string,
	from_login: string,
	from_lastName: string,
	from_firstName: string,
	from_profilePhoto: string,
	to: string,
	notification: string,
	message: string
}

@Injectable({
	providedIn: 'root'
})
export class ChatService {

	public messages: Subject<Message>;
	constructor(
		private userInfoService: UserInfoService,
		private wsService: WebsocketService
	) {
		this.messages = <Subject<Message>>wsService
		.connect(environment.CHAT_URL)
		.pipe(
			map((response: MessageEvent): Message => {
				let recievedMessage = JSON.parse(response.data);
				return {
					recievedMessage
				}
			})
		);
	}

	sendMessage(reciever_id, notificationText, messageText) {
		this.userInfoService.getUid().subscribe(result => {
			let message = {
				from_id: result['id'],
				from_login: result['login'],
				from_lastName: result['lastName'],
				from_firstName: result['firstName'],
				from_profilePhoto: result['profilePhoto'],
				to: reciever_id,
				notification: notificationText,
				message: messageText
			}
			this.messages.next(message);
		});
	}
}
