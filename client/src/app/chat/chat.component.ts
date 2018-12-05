import { Component, OnInit,OnDestroy } from '@angular/core';
import { ChatService }       from './chat.service';

@Component({
  selector: 'chat-component',
  templateUrl: './chat.component.html',
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  userName: string;
  
  constructor(private chatService:ChatService) {}

  sendMessage(user){
    this.chatService.sendMessage({message: this.message, user: user});
    this.message = '';
  }

  ngOnInit() {
    this.chatService.getMessages().on('message', (res) => {
      console.log(res);
      this.messages.push(res.user + ':' + res.text);
    })
    // this.connection = this.chatService.getMessages().subscribe(message => {
    //   this.messages.push(message);
    // })
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
