import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseAreaPage } from './choose-area';

@NgModule({
  declarations: [
    ChooseAreaPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseAreaPage),
  ],
})
export class ChooseAreaPageModule {}
