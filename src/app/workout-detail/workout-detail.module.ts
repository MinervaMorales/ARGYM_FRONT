import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
  
import { IonicModule } from '@ionic/angular';

import { WorkoutDetailPageRoutingModule } from './workout-detail-routing.module';

import { WorkoutDetailPage } from './workout-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    WorkoutDetailPageRoutingModule
  ],
  declarations: [WorkoutDetailPage]
})
export class WorkoutDetailPageModule {}
