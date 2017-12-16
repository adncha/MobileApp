import {ChangeDetectorRef, Component, Pipe, PipeTransform} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ProfilePage} from "../profile/profile";

/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Game {
  id: string,
  name: string,
  start: string,
  start_time: string,
  end_time: string,
  score_team_1: string,
  score_team_2: string,
  venue_id: string,
  venue_avatar: string,
  venue_name: string,
  venue_price: string,
  venue_size: string,
  venue_type: string,
  venue_localization: string,
  team_1_id: string,
  team_2_id: string,
  team_1_name: string,
  team_2_name: string,
  team_1_players: any,
  team_2_players: any,
  team_1_category: string,
  team_2_category: string,
  team_1_avatar: string,
  team_2_avatar: string,
  team_1_score: string,
  team_2_score: string,
  max_players: number,
  min_players: number
  teams: any
}


@IonicPage({
  name: 'game-page'
})
@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  game: Game;
  profilePage: ProfilePage;
  team_1_empty_spots: [] = [];
  team_2_empty_spots: [] = [];

  constructor(public navCtrl: NavController,
              private http: HttpClient,
              public navParams: NavParams,
              public changeDetector: ChangeDetectorRef) {


    let game_id = this.navParams.data.game_id ? this.navParams.data.game_id : '222';

    this.http.get('/api/games_get/' + game_id).subscribe(
      (data: object) => {
        this.changeDetector.markForCheck();
        this.game = data[0];
        let players_array = this.game.team_1_players.split(',');
        this.game.team_1_players = [];


        for (let entry of players_array) {
          this.game.team_1_players.push(entry.split('___'));
        }

        this.team_1_empty_spots = Array(this.game.team_1_players.length).fill(1);
        players_array = this.game.team_2_players.split(',');
        this.game.team_2_players = [];
        for (let entry of players_array) {
          this.game.team_2_players.push(entry.split('___'));
        }
        this.team_2_empty_spots = Array(this.game.team_2_players.length).fill(1);

        this.game.teams =
          [
            {
              'name': this.game.team_1_name,
              'avatar': this.game.team_1_avatar,
              'players': this.game.team_1_players,
              'empty_spots': this.team_1_empty_spots
            }
            ,
            {
              'name': this.game.team_2_name,
              'avatar': this.game.team_2_avatar,
              'players': this.game.team_2_players,
              'empty_spots': this.team_2_empty_spots
            }
          ];

        console.log(this.game.teams);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred:', err.error.message);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);

        }
      })
  }


}
