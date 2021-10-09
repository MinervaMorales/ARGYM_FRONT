import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoutineCategoriesFilterPageRoutingModule } from './routine-categories-filter-routing.module';

import { RoutineCategoriesFilterPage } from './routine-categories-filter.page';
import { TranslateModule } from '@ngx-translate/core';
import { AccordianComponent } from '../accordian/accordian.component';
import { AccordianLevelsComponent } from '../components/accordian-levels/accordian-levels.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoutineCategoriesFilterPageRoutingModule,
    TranslateModule
  ],
  declarations: [RoutineCategoriesFilterPage,AccordianComponent,AccordianLevelsComponent]
})
export class RoutineCategoriesFilterPageModule {}
