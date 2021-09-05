import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutRoutineDetailPage } from './workout-routine-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutRoutineDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutRoutineDetailPageRoutingModule {}
