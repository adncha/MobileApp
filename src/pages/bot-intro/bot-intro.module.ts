import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BotIntroPage } from './bot-intro';

@NgModule({
  declarations: [
    BotIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(BotIntroPage),
  ],
})
export class BotIntroPageModule {}
