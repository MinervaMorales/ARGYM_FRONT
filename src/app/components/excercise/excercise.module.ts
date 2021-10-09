import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcerciseRoutingModule } from './excercise-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { ExcerciseComponent } from './excercise.component';
import { AccordianComponent } from 'src/app/accordian/accordian.component';



@NgModule({
  declarations: [ExcerciseComponent,AccordianComponent],
  imports: [
    CommonModule,
    ExcerciseRoutingModule,
    TranslateModule
  ]
})
export class ExcerciseModule { }
