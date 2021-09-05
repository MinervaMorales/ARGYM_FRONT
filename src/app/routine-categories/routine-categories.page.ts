import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RoutineCategory } from 'src/models/RoutineCategory';
import { RoutineCategoryWithLevelsDTO } from 'src/services/dtos/RoutineCategoryWithLevelsDTO';
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';

@Component({
  selector: 'app-routine-categories',
  templateUrl: './routine-categories.page.html',
  styleUrls: ['./routine-categories.page.scss'],
})
export class RoutineCategoriesPage implements OnInit {


  public routineCategoryList : RoutineCategoryWithLevelsDTO[] = [];
  
  public routineCategoryService: RoutineCategoryService = this.injector.get( RoutineCategoryService );
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public loading: LoadingController = this.injector.get( LoadingController );
  public translate: TranslateService = this.injector.get( TranslateService );
  
  constructor(private route: Router, protected injector: Injector) { }

  ngOnInit() {
    this.getRoutineCategories();
  }

  
  public workouts() 
  {
    this.route.navigate(['./workouts']);
  } 

  public async getRoutineCategories()
  {
    this.loading.create();
    try
    {
      this.routineCategoryList = await (await this.routineCategoryService.GetWithLevels()).objModel;
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
