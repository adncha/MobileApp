import {Component} from '@angular/core';

import {NavParams} from 'ionic-angular';

import {AboutPage} from '../about/about';
import {MapPage} from '../map/map';
import {SchedulePage} from '../schedule/schedule';
import {SpeakerListPage} from '../speaker-list/speaker-list';
import {TeamHubPage} from "../team-hub/team-hub";
import {GamesPage} from "../games/games";
import {ProfilePage} from "../profile/profile";

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = TeamHubPage;
  tab2Root: any = SchedulePage;
  tab3Root: any = SpeakerListPage;
  tab4Root: any = MapPage;
  tab5Root: any = AboutPage;
  tab6Root: any = GamesPage;
  tab7Root: any = ProfilePage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
