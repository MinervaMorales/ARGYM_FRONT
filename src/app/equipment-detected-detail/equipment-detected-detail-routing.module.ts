import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipmentDetectedDetailPage } from './equipment-detected-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EquipmentDetectedDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipmentDetectedDetailPageRoutingModule {}
