
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';
import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from 'src/services/loader/loader.service';


@Component({
  selector: 'app-routine-categories-filter',
  templateUrl: './routine-categories-filter.page.html',
  styleUrls: ['./routine-categories-filter.page.scss'],
})
export class RoutineCategoriesFilterPage implements OnInit {

  public flag: any
  public routineCategoryList:any
  public routineByMachineAndCategory:any 
  public routinesByMachine: any;
  public sliderOne: any;
  public flagLevels:any;
  public routineCategoryService: RoutineCategoryService=this.injector.get(RoutineCategoryService);
 
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public translate: TranslateService = this.injector.get(TranslateService);
  private ionLoader: LoaderService = this.injector.get(LoaderService);
  
  public constructor(protected injector: Injector,private route: Router) { 
    
  }

 
  async ngOnInit() {
    await this.GetRoutinesByMachineString();
  }

  public async GetRoutinesByMachineString() {

    try {

      let selectedEquipment = window.localStorage.getItem('IMAGE_PREDICTED');
      this.routinesByMachine = await (await this.routineCategoryService.GetByMachineWithString(selectedEquipment)).objModel;
      this.routineCategoryList = this.routinesByMachine;
      console.log("rotuine", this.routineCategoryList)

    }
    catch (e) {

      console.log(e);

      return await (await this.alertCtrl.create({
        header: this.translate.instant('error'),
        message: this.translate.instant('unexpected'),
        buttons: [{ text: this.translate.instant("bt-ok") }]
      })).present();
    }
  }


  public async showExcercises(element){
    try {
      let exerciseList = await (await (this.routineCategoryService.GetByMachineAndRoutineCategory(this.routinesByMachine.equipment.id,element.id))).objModel;
      console.log('showExercises', exerciseList);
      this.route.navigate(['./excercise-list'], { queryParams: { exerciseList: JSON.stringify(exerciseList), equipment: JSON.stringify(this.routineCategoryList?.equipment), routine: JSON.stringify(element) } });

    }
    catch (e) {

      console.log(e);

      return await (await this.alertCtrl.create({
        header: this.translate.instant('error'),
        message: this.translate.instant('unexpected'),
        buttons: [{ text: this.translate.instant("bt-ok") }]
      })).present();
    }
  }

}
