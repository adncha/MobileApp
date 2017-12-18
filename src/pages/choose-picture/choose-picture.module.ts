import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChoosePicturePage } from './choose-picture';

@NgModule({
  declarations: [
    ChoosePicturePage,
  ],
  imports: [
    IonicPageModule.forChild(ChoosePicturePage),
  ],
})
export class ChoosePicturePageModule {}
