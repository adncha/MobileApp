import {ChangeDetectorRef, Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {GamePage} from "../game/game";

/**
 * Generated class for the GamesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games',
  templateUrl: 'games.html'
})
export class GamesPage {
  games: object[];
  gamePage: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private http: HttpClient,
              public changeDetector: ChangeDetectorRef) {
    this.gamePage = GamePage;


  }

  ionViewDidLoad() {

    this.http.get('/api/games_getAll').subscribe(
      (data: object[]) => {
        this.changeDetector.markForCheck();
        this.games = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);

        }
      })
  }

  goToGamePage(id) {
    this.navCtrl.push(GamePage, {game_id: id});
  }


}
