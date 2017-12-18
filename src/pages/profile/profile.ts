import {ChangeDetectorRef, Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {SettingsPage} from "../settings/settings";
import {GamePage} from "../game/game";
import {TeamProfilePage} from "../team-profile/team-profile";


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
              public modalCtrl: ModalController,
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
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  goToSettingPage() {

    let modal = this.modalCtrl.create(SettingsPage);
    modal.present();
  }

  goToGamePage(game_id) {
    this.navCtrl.push(GamePage, {
      'game_id': game_id
    })
  }

  goToTeamProfilePage(team_id) {
    this.navCtrl.push(TeamProfilePage, {
      'team_id': team_id
    })
  }
}

