import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseLevelPage } from './choose-level';

@NgModule({
  declarations: [
    ChooseLevelPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseLevelPage),
  ],
})
export class ChooseLevelPageModule {}
