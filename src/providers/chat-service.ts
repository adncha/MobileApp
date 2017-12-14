import {Injectable} from '@angular/core';
import {Events} from 'ionic-angular';

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

}

export class UserInfo {
  id: string;
  name?: string;
  avatar?: string;
}

@Injectable()
export class ChatService {

  constructor(public events: Events) {


  }


}
