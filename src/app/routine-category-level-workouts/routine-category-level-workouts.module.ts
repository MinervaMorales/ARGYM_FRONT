import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutineCategoryLevelWorkoutsPageRoutingModule } from './routine-category-level-workouts-routing.module';

import { RoutineCategoryLevelWorkoutsPage } from './routine-category-level-workouts.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    RoutineCategoryLevelWorkoutsPageRoutingModule
  ],
  declarations: [RoutineCategoryLevelWorkoutsPage]
})
export class RoutineCategoryLevelWorkoutsPageModule {}
