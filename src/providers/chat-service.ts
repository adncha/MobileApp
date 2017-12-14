import {Injectable} from '@angular/core';
import {Events} from 'ionic-angular';
import {Observable} from "rxjs/Observable";

import {HTTP} from '@ionic-native/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

export class ChatMessage {
  message_id: string;
  user_id: string;
  user_name: string;
  user_avatar: string;
  team_id: string;
  time: number | string;
  message: string;
  status: string;

  constructor(message_id: string,
              user_id: string,
              user_name: string,
              user_avatar: string,
              team_id: string,
              time: number | string,
              message: string,
              status: string) {
  }
}

export class UserInfo {
  id: string;
  name?: string;
  avatar?: string;
}

@Injectable()
export class ChatService {
  apiRoot: string= './assets/mock/msg-list.json';


  constructor(private http: HTTP,
              public events: Events) {
  }

  mockNewMsg(msg) {
    const mockMsg: ChatMessage = {
      message_id: Date.now().toString(),
      user_id: '210000198410281948',
      user_name: 'Hancock',
      user_avatar: './assets/to-user.jpg',
      team_id: '140000198202211138',
      time: Date.now(),
      message: msg.message,
      status: 'success'
    };

    setTimeout(() => {
      this.events.publish('chat:received', mockMsg, Date.now())
    }, Math.random() * 1800)
  }




  getMessages() {
    this.http.get('./assets/mocks/msg-list.json', {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }



  sendMsg(msg: ChatMessage) {
    return new Promise(resolve => setTimeout(() => resolve(msg), Math.random() * 1000))
      .then(() => this.mockNewMsg(msg));
  }



}
