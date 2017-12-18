import {ChangeDetectorRef, Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {TeamSettingsPage} from "../team-settings/team-settings";
import {GamePage} from "../game/game";
import {ProfilePage} from "../profile/profile";

/**
 * Generated class for the TeamProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-profile',
  templateUrl: 'team-profile.html',
})
export class TeamProfilePage {
  team: any;
  team_id: any;

  constructor(public navCtrl: NavController,
              private http: HttpClient,
              public navParams: NavParams,
              public changeDetector: ChangeDetectorRef) {

    let team_id = this.navParams.data.team_id ? this.navParams.data.team_id : false;
    this.team_id = team_id;

    this.http.get('/api/teams_get/' + team_id).subscribe(
      (data: object) => {
        this.team = data;
        let players_array = this.team.players.split(',');
        this.team.players = [];
        for (let entry of players_array) {
          this.team.players.push(entry.split('___'));
        }
        console.log(this.team);
        this.team.won = this.team.won.split(',').length;
        this.team.lost = this.team.lost.split(',').length;
        this.team.draw = this.team.draw ? this.team.draw.split(',').length : 0;
        this.team.ratio = this.team.won / (this.team.won + this.team.lost + this.team.draw);
        console.log(this.team);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  goToTeamSettingPage(team_id) {
    this.navCtrl.push(TeamSettingsPage, {team_id: team_id});
  }

  goToGamePage(game_id) {
    this.navCtrl.push(GamePage, {game_id: game_id});
  }

  goToProfilePage(user_id) {
    this.navCtrl.push(ProfilePage, {user_id: user_id});
  }


}
