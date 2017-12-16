import {ChangeDetectorRef, Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {SettingsPage} from "../settings/settings";

/*import {GamePage} from "../game/game";*/

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user: any;
  profilePage: ProfilePage;
  user_id: any;

  constructor(public navCtrl: NavController,
              private http: HttpClient,
              public navParams: NavParams,
              public changeDetector: ChangeDetectorRef) {

    let user_id = this.navParams.data.user_id ? this.navParams.data.user_id : false;
    this.user_id = user_id;

    this.http.get('/api/users_get/' + user_id).subscribe(
      (data: object) => {
        this.changeDetector.markForCheck();
        this.user = data;
        let teams_array = this.user.teams.split(',');
        this.user.teams = [];
        for (let entry of teams_array) {
          this.user.teams.push(entry.split('___'));
        }
        console.log(this.user.teams);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }



  goToSettingPage(user_id) {
    this.navCtrl.push(SettingsPage, {user_id: user_id});
  }
}

