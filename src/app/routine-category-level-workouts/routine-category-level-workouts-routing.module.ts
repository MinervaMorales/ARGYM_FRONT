import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineCategoryLevelWorkoutsPage } from './routine-category-level-workouts.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineCategoryLevelWorkoutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineCategoryLevelWorkoutsPageRoutingModule {}
