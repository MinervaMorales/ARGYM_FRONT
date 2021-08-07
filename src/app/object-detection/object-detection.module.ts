import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectDetectionPageRoutingModule } from './object-detection-routing.module';

import { ObjectDetectionPage } from './object-detection.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ObjectDetectionPageRoutingModule
  ],
  declarations: [ObjectDetectionPage]
})
export class ObjectDetectionPageModule {}
