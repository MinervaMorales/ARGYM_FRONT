import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutineCategoriesFilterPage } from './routine-categories-filter.page';

const routes: Routes = [
  {
    path: '',
    component: RoutineCategoriesFilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutineCategoriesFilterPageRoutingModule {}
