import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutineCategoriesPageRoutingModule } from './routine-categories-routing.module';

import { RoutineCategoriesPage } from './routine-categories.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    RoutineCategoriesPageRoutingModule
  ],
  declarations: [RoutineCategoriesPage]
})
export class RoutineCategoriesPageModule {}
