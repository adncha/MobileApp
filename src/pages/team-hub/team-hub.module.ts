import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamHubPage } from './team-hub';

@NgModule({
  declarations: [
    TeamHubPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamHubPage),
  ],
})
export class TeamHubPageModule {}
