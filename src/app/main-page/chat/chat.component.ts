import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat-service/chat.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

	constructor(
		private chatService: ChatService
	) { }

	ngOnInit() {
	}

	private message = {
		from: 'John Doe',
		to: '1',
		message: 'its a message'
	}

	sendMsg() {
		console.log("New message sent from client");
		// this.userInfoService.getUid().subscribe(result => {
		// 	let message = {
		// 		from_id: result['id'],
		// 		from_login: result['login'],
		// 		from_lastName: result['lastName'],
		// 		from_firstName: result['firstName'],
		// 		from_profilePhoto: result['profilePhoto'],
		// 		// to: this.uid.toString(),
		// 		to: 'someone',
		// 		message: 'Someone visited your page'
		// 	}
		// 	console.log(message);
		// 	this.chatService.messages.next(message);
		// });

	}
}
