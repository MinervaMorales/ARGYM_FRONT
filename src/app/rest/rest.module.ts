import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { NgCircleProgressModule } from 'ng-circle-progress';
  

import { RestPageRoutingModule } from './rest-routing.module';

import { RestPage } from './rest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,    
    RestPageRoutingModule,
    NgCircleProgressModule.forRoot({})  
  ],
  declarations: [RestPage]
})
export class RestPageModule {}
