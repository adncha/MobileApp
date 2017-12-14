import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';

import {UserData} from './user-data';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class GamesService {
  games: any;

  constructor(public http: HttpClient, public user: UserData) {
  }

  getGames() {
    this.http.get('/api/items').subscribe(
      data => {
        this.games = data;
      });
  }

}
