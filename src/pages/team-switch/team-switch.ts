import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the TeamSwitchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() @Component({
  selector: 'page-team-switch', templateUrl: 'team-switch.html',
})
export class TeamSwitchPage
{

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad TeamSwitchPage');
  }

  dismiss()
  {
    this.viewCtrl.dismiss();
  }

}
