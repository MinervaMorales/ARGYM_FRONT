import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AudioPlayerComponent } from '../components/audio-player/audio-player.component';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController, LoadingController, NavController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

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
  public iframeSrc: SafeHtml;

  //Variable that holds the path for the html that has the ar frame implementation
  public src: string = "../assets/arscenes/arscene.html";

  //Variable that has the current selected exercise
  public exercise: any;
  //public exercise: RoutineCategoryLevelExerciseDTO;

  //Variable that hides and show the audioplayer component
  public displayAudio: boolean = false;
  
  private router: Router = this.injector.get(Router);  
  private route: ActivatedRoute = this.injector.get(ActivatedRoute);
  public domSanitizer: DomSanitizer = this.injector.get(DomSanitizer);
  private loading: LoadingController = this.injector.get(LoadingController);
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public translate: TranslateService = this.injector.get( TranslateService );


  public constructor(protected injector: Injector, private navCtrl: NavController) {
    this.route.queryParams.subscribe(params => {
      if (params) {
        this.exercise = JSON.parse(params['exercise']);
        console.log("Expected exercise");
        console.log(this.exercise)
      }
    })
  }


  public ngOnInit() {
    this.modelStatusListener();
    this.iframeSrc = this.domSanitizer.bypassSecurityTrustResourceUrl(this.src);
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      this.iframeScene?.nativeElement?.contentWindow?.postMessage(this.exercise.model3D, '*');
    }, 5000);
  }
  public ngOnDestroy(){
    console.log("on destroy start-workout!!!");
    window.removeEventListener("message",
    this.listener, false)
    this.audioPlayer?.stop();

  }

  public ionViewWillLeave() {
    console.log("on ionviewwillleave!!!!")
    window.removeEventListener("message", this.listener);
    this.audioPlayer?.stop();
  }

  public rest() {
    this.router.navigate(['./rest']);
  }

  public async alert(){
    console.log("testing");
    await (await this.alertCtrl.create({
      header: this.translate.instant('comfirm-exit-explanation'),
      message: this.translate.instant('message-exit-explanation'),
      buttons: [{ text: this.translate.instant("bt-cancel")  }, {
        text: this.translate.instant("bt-ok"),
        handler: ()=>{
          console.log('handler');
          this.navCtrl.back();
        }
      }]
    })).present();
  }


  /**
   * Method to listen the model status changes
   * within the iframe to pause or play the music
   */
  public async modelStatusListener() {

    window.addEventListener("message",
      this.listener, false)
  }

  /**
   * Method that listen the events coming from the iframe
   * 1) If the model is loading
   * 2) If the marker is found
   * 3) If the model is displaying on screen
   * @param res 
   */
  listener = async (res) => {

    if (res.data == 'loadingModel') {
      (await this.loading.create({
        message: 'Please wait while the model is loading...'
      })).present();

    }

    if (res.data == 'markerFound') {
      this.displayAudio = true;
    }

    if (res.data == 'true' || res.data == 'false') {
      let playing: boolean = JSON.parse(res.data);
      this.displayAudio = playing;
      this.audioPlayer?.togglePlayer(!playing);

      if (await this.loading.getTop() != null || await this.loading.getTop() != undefined) {
        this.loading.dismiss();
      }
    }
  }


}
