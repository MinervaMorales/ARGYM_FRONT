import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseLevelsPageRoutingModule } from './exercise-levels-routing.module';

import { ExerciseLevelsPage } from './exercise-levels.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ExerciseLevelsPageRoutingModule
  ],
  declarations: [ExerciseLevelsPage]
})
export class ExerciseLevelsPageModule {}
