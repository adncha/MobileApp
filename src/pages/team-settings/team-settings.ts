import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the TeamSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() @Component({
  selector: 'page-team-settings', templateUrl: 'team-settings.html',
})
export class TeamSettingsPage
{

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController)
  {
  }

  ionViewDidLoad()
  {
    console.log('ionViewDidLoad TeamSettingsPage');
  }


  dismiss()
  {
    this.viewCtrl.dismiss();
  }

}
