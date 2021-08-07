import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { AlarmPageRoutingModule } from './alarm-routing.module';

import { AlarmPage } from './alarm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,  
    AlarmPageRoutingModule
  ],
  declarations: [AlarmPage]
})
export class AlarmPageModule {}
