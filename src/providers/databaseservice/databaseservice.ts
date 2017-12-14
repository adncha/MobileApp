import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class Databaseservice {

  private messages = this.db.list<object>('messages');

  constructor(private db: AngularFireDatabase) {
  }


  getMessages() {
    return this.messages;
  }

  addMessage(message: object) {
    return this.messages.push(message);
  }
}
