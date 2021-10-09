
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-routine-categories-filter',
  templateUrl: './routine-categories-filter.page.html',
  styleUrls: ['./routine-categories-filter.page.scss'],
})
export class RoutineCategoriesFilterPage implements OnInit {
  flag: any
  routineCategoryList:any
  routineByMachineAndCategory:any
  
  
  constructor(protected injector: Injector,private route: Router) { 
    
  }

  public routineCategoryService: RoutineCategoryService=this.injector.get(RoutineCategoryService);
  sliderOne: any;
  flagLevels:any;
  ngOnInit() {
    this.routineCategoryList=this.routineCategoryService.categoriesByMachine.objModel
    console.log(this.routineCategoryList)
  }


  public async showExcercises(element){
    await (this.routineCategoryService.GetByMachineAndRoutineCategory(this.routineCategoryService.categoriesByMachine.objModel.equipment.id,element.id))
    this.route.navigate(['./excercise-list']);
  }


  public async showInfo(element,id){
    this.routineByMachineAndCategory=await (this.routineCategoryService.GetByMachineAndRoutineCategory(this.routineCategoryService.categoriesByMachine.objModel.equipment.id,element.id))
    if(this.routineByMachineAndCategory?.objModel!=null){
      this.flagLevels=true
    }
  }

  public async showInfoLevel(){
    return;
  }

  start_workout() {
    this.route.navigate(['./start-workout']);
  }      

}
