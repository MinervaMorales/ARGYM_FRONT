import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPersonTrainingRoutineCategoryLevelWorkoutsPage } from './first-person-training-routine-category-level-workouts.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPersonTrainingRoutineCategoryLevelWorkoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstPersonTrainingRoutineCategoryLevelWorkoutsPageRoutingModule {}
