import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ChoosePicturePage} from "../choose-picture/choose-picture";

/**
 * Generated class for the BotIntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bot-intro',
  templateUrl: 'bot-intro.html',
})
export class BotIntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotIntroPage');
  }

  goToChoosePicturePage() {
    this.navCtrl.push(ChoosePicturePage);
  }

}
