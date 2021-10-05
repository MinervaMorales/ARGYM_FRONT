import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioPlayerComponent } from '../components/audio-player/audio-player.component';
import { DomSanitizer } from '@angular/platform-browser';
import { RoutineCategoryLevelExerciseDTO } from 'src/services/dtos/RoutineCategoryLevelExerciseDTO';
import { ExcerciseComponent } from '../components/excercise/excercise.component';

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.page.html',
  styleUrls: ['./start-workout.page.scss'],
})
export class StartWorkoutPage implements OnInit {

  //Variable that holds the reference for the iframe html element
  @ViewChild("iframeScene") iframeScene: ElementRef;

  //Variable that holds the reference for the AudioPlayer component
  @ViewChild("audioPlayer") audioPlayer: AudioPlayerComponent;

  //Variable to dynamically change the iframeSrc path 
  public iframeSrc:SafeHtml;

  //Variable that holds the path for the html that has the ar frame implementation
  public  src: string = "../assets/arscenes/arscene.html";

  //Variable that has the current selected exercise
  //public exercise: RoutineCategoryLevelExerciseDTO;
  public exercise: any;
  

  public constructor(private router: Router, private route: ActivatedRoute, public domSanitizer: DomSanitizer) { 
    this.route.queryParams.subscribe(params =>{
      if(params)
      {
        this.exercise = JSON.parse(params['exercise']);
      }
    })
  }

  public ngOnInit(){
    console.log("ex")
    console.log(this.exercise)
    this.modelStatusListener();
    this.iframeSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

  public ngAfterViewInit(){
    setTimeout(()=>{
      console.log("here :")
      console.log(this.exercise.model3D)
      this.iframeScene.nativeElement.contentWindow.postMessage(this.exercise?.model3D, '*');
    }, 15000);
  }

  public rest() {
    this.router.navigate(['./rest']);
  } 


  /**
   * Method to listen the model status changes
   * within the iframe to pause or play the music
   */
  public modelStatusListener()  {

    window.addEventListener("message",
    (res)=>{ 
      
      if(res.data == 'true' || res.data == 'false')
      {
        let playing: boolean = JSON.parse(res.data);
        this.audioPlayer.togglePlayer(!playing);
      }
    }, false)
  }


}
