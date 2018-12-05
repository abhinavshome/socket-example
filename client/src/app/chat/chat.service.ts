import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:5000';  
  private socket;
  
  constructor() {
    this.socket = io(this.url);
  }

  sendMessage(message){
    this.socket.emit('add-message', message);    
  }
  
  getMessages() {
    return this.socket;

    // let obs = new Subject();
    // this.socket = io(this.url);
    // this.socket.on('message', (data) => {
    //   obs.next(data);
    // });
    // return obs;

    // let observable = new Observable(observer => {
    //   this.socket = io(this.url);
    //   this.socket.on('message', (data) => {
    //     observer.next(data);    
    //   });
    //   return () => {
    //     this.socket.disconnect();
    //   };  
    //})     
    //return observable;
  }  
}