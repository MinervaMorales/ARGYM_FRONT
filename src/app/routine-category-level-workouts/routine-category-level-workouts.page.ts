import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavParams } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RoutineCategory } from 'src/models/RoutineCategory';
import { RoutineCategoryLevel } from 'src/models/RoutineCategoryLevel';
import { DataService } from 'src/services/data/data.service';
import { RoutineCategoryLevelExerciseDTO } from 'src/services/dtos/RoutineCategoryLevelExerciseDTO';
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';

@Component({
  selector: 'app-routine-category-level-workouts',
  templateUrl: './routine-category-level-workouts.page.html',
  styleUrls: ['./routine-category-level-workouts.page.scss'],
})
export class RoutineCategoryLevelWorkoutsPage implements OnInit {

 
  public exerciseList : RoutineCategoryLevelExerciseDTO[] = [];
  public routineCategoryLevel: RoutineCategoryLevel;
  public routineCategory: RoutineCategory;
  public routineCategoryService: RoutineCategoryService = this.injector.get( RoutineCategoryService );
  
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public loading: LoadingController = this.injector.get( LoadingController );
  public translate: TranslateService = this.injector.get( TranslateService );
  constructor(private router: Router, private route: ActivatedRoute, protected injector: Injector) { 
    
    this.route.queryParams.subscribe(params =>{
      if(params)
      {
        this.routineCategory = JSON.parse(params['routineCategory']);
        this.routineCategoryLevel = JSON.parse(params['routineCategoryLevel']);
      }
    })
  }

  ngOnInit() {
    
    this.getRoutineCategories();
  }

  public async getRoutineCategories()
  {
    this.loading.create();
    try
    {
      this.exerciseList = await (await this.routineCategoryService.GetByRoutineCategoryLevel(this.routineCategoryLevel.id)).objModel;    
      console.log(this.exerciseList);
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

  public workout_detail(exercise: RoutineCategoryLevelExerciseDTO) 
  {
      this.router.navigate(['./workout-routine-detail'], { queryParams: { exercise: JSON.stringify(exercise)}});
  } 


}
