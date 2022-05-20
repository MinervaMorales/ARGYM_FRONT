import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPersonTrainingRoutineCategoriesPage } from './first-person-training-routine-categories.page';

const routes: Routes = [
  {
    path: '',
    component: FirstPersonTrainingRoutineCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstPersonTrainingRoutineCategoriesPageRoutingModule {}
