import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamInvitesPage } from './team-invites';

@NgModule({
  declarations: [
    TeamInvitesPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamInvitesPage),
  ],
})
export class TeamInvitesPageModule {}
