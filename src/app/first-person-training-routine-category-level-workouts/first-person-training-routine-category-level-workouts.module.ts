import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstPersonTrainingRoutineCategoryLevelWorkoutsPageRoutingModule } from './first-person-training-routine-category-level-workouts-routing.module';

import { FirstPersonTrainingRoutineCategoryLevelWorkoutsPage } from './first-person-training-routine-category-level-workouts.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    FirstPersonTrainingRoutineCategoryLevelWorkoutsPageRoutingModule
  ],
  declarations: [FirstPersonTrainingRoutineCategoryLevelWorkoutsPage]
})
export class FirstPersonTrainingRoutineCategoryLevelWorkoutsPageModule {}
