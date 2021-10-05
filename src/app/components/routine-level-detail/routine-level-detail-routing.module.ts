import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoutineLevelDetailComponent } from './routine-level-detail.component';


const routes: Routes = [
  {
    path: '',
    component: RoutineLevelDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineLevelDetailRoutingModule { }
