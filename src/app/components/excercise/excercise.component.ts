import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ExercisePhotosService } from 'src/services/exercise/exercise-photos.service';
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.scss'],
})
export class ExcerciseComponent implements OnInit {
  public translate: TranslateService = this.injector.get( TranslateService );
  constructor(protected injector: Injector,private route: Router) { }

  excerciseDetail:any

  public routineCategoryService: RoutineCategoryService=this.injector.get(RoutineCategoryService);
  public exercisePhotoService: ExercisePhotosService=this.injector.get(ExercisePhotosService);

  ngOnInit() {
    console.log("excercise list")
    console.log(this.routineCategoryService.exercise)
    this.excerciseDetail=this.routineCategoryService.exercise.objModel
  }

  public async showAr(element,idExercise){
    console.log(idExercise)
    var photoList= (await this.exercisePhotoService.GetByIdExercise(idExercise)).objModel
  
    element.photoList=photoList
    this.route.navigate(['./routine-level-detail'],{
      queryParams:
      {
        exercise:JSON.stringify(element)
      }});
  }

}