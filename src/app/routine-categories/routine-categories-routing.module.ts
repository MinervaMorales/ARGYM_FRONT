import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineCategoriesPage } from './routine-categories.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineCategoriesPageRoutingModule {}
