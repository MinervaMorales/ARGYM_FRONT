import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutRoutineDetailPageRoutingModule } from './workout-routine-detail-routing.module';

import { WorkoutRoutineDetailPage } from './workout-routine-detail.page';
import { TranslateModule } from '@ngx-translate/core';
import { SlideComponent } from '../components/slide/slide.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule, 
    WorkoutRoutineDetailPageRoutingModule
  ],
  declarations: [WorkoutRoutineDetailPage, SlideComponent]
})
export class WorkoutRoutineDetailPageModule {}
