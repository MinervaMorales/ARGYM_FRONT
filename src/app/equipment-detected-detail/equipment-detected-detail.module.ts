import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipmentDetectedDetailPageRoutingModule } from './equipment-detected-detail-routing.module';

import { EquipmentDetectedDetailPage } from './equipment-detected-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    EquipmentDetectedDetailPageRoutingModule
  ],
  declarations: [EquipmentDetectedDetailPage]
})
export class EquipmentDetectedDetailPageModule {}
