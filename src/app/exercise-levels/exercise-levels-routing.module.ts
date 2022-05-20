import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseLevelsPage } from './exercise-levels.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseLevelsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciseLevelsPageRoutingModule {}
