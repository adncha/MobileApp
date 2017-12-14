import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Events} from 'ionic-angular';


//Firebase
import {Databaseservice} from "../../providers/databaseservice/databaseservice";
import {Observable} from "rxjs/Observable";


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

  message: string = '';

  messages$: Observable<Object[]>;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events,
              public databaseService: Databaseservice) {

    this.messages$ = this.databaseService
      .getMessages()// Get messages
      .snapshotChanges()// Get the key and value pair
      .map(
        changes => {
          return changes.map(c => (
            {
              key: c.payload.key,
              ...c.payload.val()
            }
          ))
        }
      );
    console.log(this.messages$);
  }

  ionViewDidLoad() {

  }

  sendMessage() {
    this.databaseService.addMessage({
      'message': this.message
    }).then(ref => {
      console.log(ref.key);
      this.message = '';
    });
  }
}
