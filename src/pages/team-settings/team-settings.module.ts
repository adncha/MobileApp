import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamSettingsPage } from './team-settings';

@NgModule({
  declarations: [
    TeamSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamSettingsPage),
  ],
})
export class TeamSettingsPageModule {}
