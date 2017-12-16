import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamSwitchPage } from './team-switch';

@NgModule({
  declarations: [
    TeamSwitchPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamSwitchPage),
  ],
})
export class TeamSwitchPageModule {}
