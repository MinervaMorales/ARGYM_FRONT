import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AudioPlayerComponent } from '../components/audio-player/audio-player.component';

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.page.html',
  styleUrls: ['./start-workout.page.scss'],
})
export class StartWorkoutPage implements OnInit {

  @ViewChild("iframeScene") iframeScene: ElementRef;
  @ViewChild("audioPlayer") audioPlayer: AudioPlayerComponent;

  constructor(private route: Router) { }

  ngOnInit() {
    this.modelStatusListener();
  }

 rest() {
    this.route.navigate(['./rest']);
  } 

  public modelStatusListener(){
    window.addEventListener("message",
    (res)=>{ 
      
      if(res.data == 'true' || res.data == 'false')
      {
        let playing: boolean = JSON.parse(res.data);
        this.audioPlayer.togglePlayer(!playing);
      }
    },
    false)
  }
}
