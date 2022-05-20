import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { Howl } from 'howler';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class AudioPlayerComponent implements OnInit {

  public player: Howl = null;
  public isPlaying: boolean = false;
  public progress: Number = 0;
  @Input() audio: string;
  @ViewChild('range', { static: false}) range: IonRange;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Method to start the audio
   */
  public start()
  {
    if(this.player){
      this.player.stop();
    }
    this.player = new Howl({
      src: [this.audio],
      onplay: () =>{
        this.isPlaying = true;
        this.updateProgress();
      },
      onend: ()=>{

      }
    })
  }

  public stop()
  {
      this.player.stop();
  }

  /**
   * Method to pause and play 
   * the audio
   */
  public togglePlayer(pause)
  {
    if(!this.player)
    {
      this.start();
    }
    this.isPlaying = !pause;
    if(pause){
      this.player.pause();
    } else{
      this.player.play();
    }
  }

  /**
   * Method that locates the audio in a exact minute
   */
  public seek(){
    let newValue = +this.range.value;
    let duration = this.player.duration();
    this.player.seek(duration *(newValue /100))
  }

  public updateProgress(){
    let seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;
    setTimeout(()=>{
      this.updateProgress();
    }, 1000);
  }

}
