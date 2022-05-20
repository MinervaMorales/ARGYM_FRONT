import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutineLevelDetailComponent } from './routine-level-detail.component';
import { RoutineLevelDetailRoutingModule } from './routine-level-detail-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { SlideComponent } from '../slide/slide.component';



@NgModule({
  declarations: [RoutineLevelDetailComponent, SlideComponent],
  imports: [
    CommonModule,
    RoutineLevelDetailRoutingModule,
    TranslateModule
  ]
})
export class RoutineLevelDetailModule { }
