import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ExercisePhotosService } from 'src/services/exercise/exercise-photos.service';
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.scss'],
})
export class ExcerciseComponent implements OnInit {

  public excerciseDetail: any;
  public equipment: any;
  public routine: any;
  public routineCategoryService: RoutineCategoryService=this.injector.get(RoutineCategoryService);
  public exercisePhotoService: ExercisePhotosService=this.injector.get(ExercisePhotosService);
  public translate: TranslateService = this.injector.get( TranslateService );

  constructor(private router: Router, private route: ActivatedRoute, protected injector: Injector) { 
    
    this.route.queryParams.subscribe(params =>{
      if(params)
      {
        this.excerciseDetail = JSON.parse(params['exerciseList']);
        this.equipment = JSON.parse(params['equipment']);
        this.routine = JSON.parse(params['routine']);
      }
    })
   }



  ngOnInit() {
    console.log("excercise list")
    console.log(this.excerciseDetail)
  }

  public GetExerciseLevels(element){
  
    this.router.navigate(['./exercise-levels'], { queryParams: { exercise: JSON.stringify(element), equipment: JSON.stringify(this.equipment), routine: JSON.stringify(this.routine) } });
  }

  public async showAr(element, idExercise){
    console.log(idExercise)
    var photoList= (await this.exercisePhotoService.GetByIdExercise(idExercise)).objModel
    element.photoList=photoList
    this.router.navigate(['./routine-level-detail'],{
      queryParams:
      {
        exercise:JSON.stringify(element)
      }});
  }

}
