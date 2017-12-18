import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestTeamsPage } from './request-teams';

@NgModule({
  declarations: [
    RequestTeamsPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestTeamsPage),
  ],
})
export class RequestTeamsPageModule {}
