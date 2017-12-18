import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseAvailabilitiesPage } from './choose-availabilities';

@NgModule({
  declarations: [
    ChooseAvailabilitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseAvailabilitiesPage),
  ],
})
export class ChooseAvailabilitiesPageModule {}
