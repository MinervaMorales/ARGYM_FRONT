import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstPersonTrainingRoutineCategoriesPageRoutingModule } from './first-person-training-routine-categories-routing.module';

import { FirstPersonTrainingRoutineCategoriesPage } from './first-person-training-routine-categories.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    FirstPersonTrainingRoutineCategoriesPageRoutingModule
  ],
  declarations: [FirstPersonTrainingRoutineCategoriesPage]
})
export class FirstPersonTrainingRoutineCategoriesPageModule {}
