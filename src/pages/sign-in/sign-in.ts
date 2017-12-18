import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserData} from "../../providers/user-data";
import {UserOptions} from "../../interfaces/user-options";
import {NgForm} from "@angular/forms";
import {TabsPage} from "../tabs-page/tabs-page";
import {SignUpPage} from "../sign-up/sign-up";

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

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

  goToSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

}
