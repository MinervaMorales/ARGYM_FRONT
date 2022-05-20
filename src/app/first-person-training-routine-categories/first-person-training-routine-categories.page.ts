
import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RoutineCategory } from 'src/models/RoutineCategory';
import { RoutineCategoryLevel } from 'src/models/RoutineCategoryLevel';
import { DataService } from 'src/services/data/data.service';
import { RoutineCategoryWithLevelsDTO } from 'src/services/dtos/RoutineCategoryWithLevelsDTO';
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';

@Component({
  selector: 'app-first-person-training-routine-categories',
  templateUrl: './first-person-training-routine-categories.page.html',
  styleUrls: ['./first-person-training-routine-categories.page.scss'],
})
export class FirstPersonTrainingRoutineCategoriesPage implements OnInit {

  public type: any;
  public routineCategoryList : RoutineCategoryWithLevelsDTO[] = [];
  public title: string;
  public routineCategoryService: RoutineCategoryService = this.injector.get( RoutineCategoryService );
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public loading: LoadingController = this.injector.get( LoadingController );
  public translate: TranslateService = this.injector.get( TranslateService );

  constructor(private route: Router, protected injector: Injector,  private router: ActivatedRoute,) {
    this.router.queryParams.subscribe(params =>{
      if(params)
      {
        this.type = JSON.parse(params['type']);
        this.title = this.type == 1 ? 'first-person': 'third-person' 
      }
    })
   }

  ngOnInit() {
    this.getRoutineCategories();
  }

  
  public workouts(routineCategory: RoutineCategory, level: RoutineCategoryLevel) 
  {
    this.route.navigate(['./first-person-training-routine-category-level-workouts'], { queryParams: { routineCategory: JSON.stringify(routineCategory), routineCategoryLevel: JSON.stringify(level), type: JSON.stringify(this.type) }});
  } 

  public async getRoutineCategories()
  {
    this.loading.create();
    try
    {
      this.routineCategoryList = await (await this.routineCategoryService.GetWithLevelsType(this.type)).objModel;
      console.log(this.routineCategoryList);
    
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

}
