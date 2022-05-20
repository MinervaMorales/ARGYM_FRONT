import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ExercisePhotos } from 'src/models/ExercisePhotos';
import { RoutineCategory } from 'src/models/RoutineCategory';
import { RoutineCategoryLevel } from 'src/models/RoutineCategoryLevel';
import { RoutineCategoryLevelExerciseDTO } from 'src/services/dtos/RoutineCategoryLevelExerciseDTO';
import { ExercisePhotosService } from 'src/services/exercise/exercise-photos.service';

@Component({
  selector: 'app-workout-routine-detail',
  templateUrl: './workout-routine-detail.page.html',
  styleUrls: ['./workout-routine-detail.page.scss'],
})
export class WorkoutRoutineDetailPage implements OnInit {
 
  public exercise: RoutineCategoryLevelExerciseDTO;
  public routineCategoryLevel: RoutineCategoryLevel;
  public routineCategory: RoutineCategory;
  public exercisePhotosList: ExercisePhotos;
  public exercisePhotosService: ExercisePhotosService = this.injector.get(ExercisePhotosService);
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public loading: LoadingController = this.injector.get( LoadingController );
  public translate: TranslateService = this.injector.get( TranslateService );
  constructor(private router: Router, private route: ActivatedRoute, protected injector: Injector) { 
    
    this.route.queryParams.subscribe(params =>{
      if(params)
      {
        this.exercise = JSON.parse(params['exercise']);
        this.routineCategory = JSON.parse(params['routineCategory']);
        this.routineCategoryLevel = JSON.parse(params['routineCategoryLevel']);
        console.log(this.exercise);
      }
    })
  }

  ngOnInit() {
    
    this.getExercisePhotos();
  }

  public async getExercisePhotos()
  {
    this.loading.create();
    try
    {
      this.exercisePhotosList = await (await this.exercisePhotosService.GetByIdExercise(this.exercise?.idExcercise)).objModel;    
      console.log(this.exercisePhotosList);
    }
    catch ( e )
    {
      console.log(e);
      this.loading.dismiss();

      await (await this.alertCtrl.create({
        header: this.translate.instant('error'),
        message: this.translate.instant('unexpected'),
        buttons: [{ text: this.translate.instant( "bt-ok" )}]
      })).present();
    }
  }

  public start_workout(exercise: RoutineCategoryLevelExerciseDTO) 
  {
      this.router.navigate(['./start-workout'], {queryParams: { exercise: JSON.stringify(exercise)}});
  } 

}
