import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { StartWorkoutPageRoutingModule } from './start-workout-routing.module';

import { StartWorkoutPage } from './start-workout.page';
import { AudioPlayerComponent } from '../components/audio-player/audio-player.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     TranslateModule,   
    StartWorkoutPageRoutingModule
  ],
  declarations: [StartWorkoutPage, 
    AudioPlayerComponent]
})
export class StartWorkoutPageModule {}
