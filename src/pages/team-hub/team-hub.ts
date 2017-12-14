import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Events, Content, TextInput} from 'ionic-angular';
import {ChatMessage} from "../../providers/chat-service";
import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the TeamHubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-hub',
  templateUrl: 'team-hub.html',
})
export class TeamHubPage {

  @ViewChild(Content) content: Content;
  messages: ChatMessage[] = [];
  message: string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,
              private http: HttpClient) {
  }


  ionViewDidLoad() {
    this.http.get<ChatMessage[]>('./assets/mock/msg-list.json').subscribe(
      data => {
        this.messages= data;

        console.log(this.messages);
      },
      err=>
      {
        console.log('Something went wrong!');
      }
  );
  }

  /**
   * @name pushNewMsg
   * @param msg
   */
  sendMessage(msg: ChatMessage) {
    // Verify user relationships
    this.messages.push(msg);
    this.scrollToBottom();
  }


  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }


  send() {
    console.log(this.message);
  }

}
