import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {UserData} from '../../providers/user-data';

import {UserOptions} from '../../interfaces/user-options';

import {TabsPage} from '../tabs-page/tabs-page';
import {SignInPage} from "../sign-in/sign-in";

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(
  {
    name: 'sign-up-page',
    segment: 'sign-up-page'
  }
)
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  signup: UserOptions = {username: '', password: ''};
  submitted = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userData: UserData) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }

  goToSignInPage()
  {
    this.navCtrl.push(SignInPage);
  }

}
