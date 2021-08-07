import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetAlarmPage } from './set-alarm.page';

const routes: Routes = [
  {
    path: '',
    component: SetAlarmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetAlarmPageRoutingModule {}
