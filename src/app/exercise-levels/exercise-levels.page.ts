import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RoutineCategory } from 'src/models/RoutineCategory';
import { RoutineCategoryLevel } from 'src/models/RoutineCategoryLevel';
import { RoutineCategoryWithLevelsDTO } from 'src/services/dtos/RoutineCategoryWithLevelsDTO';
import { ExercisePhotosService } from 'src/services/exercise/exercise-photos.service';
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';

@Component({
  selector: 'app-exercise-levels',
  templateUrl: './exercise-levels.page.html',
  styleUrls: ['./exercise-levels.page.scss'],
})
export class ExerciseLevelsPage implements OnInit {


  public routineCategoryList : RoutineCategoryWithLevelsDTO[] = [];
  
  public exercise: any;
  public equipment: any;
  public routine: any;

  public routineCategoryService: RoutineCategoryService = this.injector.get( RoutineCategoryService );
  public loading: LoadingController = this.injector.get( LoadingController );
  public translate: TranslateService = this.injector.get( TranslateService );
  public exercisePhotoService: ExercisePhotosService=this.injector.get(ExercisePhotosService);

  constructor(private route: Router, protected injector: Injector, private router: ActivatedRoute) {
    this.router.queryParams.subscribe(params =>{
      if(params)
      {
        this.exercise = JSON.parse(params['exercise']);
        this.equipment = JSON.parse(params['equipment']);
        this.routine = JSON.parse(params['routine']);
        console.log(this.exercise);
      }
    })
   }

  ngOnInit() {
  }


  public async goToRoutineLevelDetail(element, idExercise){
    console.log(idExercise)
    console.log("Element---->")
    console.log(element)
    
    console.log("exercise---->")
    console.log(this.exercise)
    var photoList= (await this.exercisePhotoService.GetByIdExercise(idExercise)).objModel;
    element.photoList= photoList;
    this.route.navigate(['./routine-level-detail'],{ queryParams: { exercise: JSON.stringify(this.exercise), level: JSON.stringify(element) }});
  }

}
