import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExcerciseComponent } from './excercise.component';



const routes: Routes = [
  {
    path: '',
    component: ExcerciseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcerciseRoutingModule { }
