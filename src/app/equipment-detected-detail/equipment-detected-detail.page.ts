import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-equipment-detected-detail',
  templateUrl: './equipment-detected-detail.page.html',
  styleUrls: ['./equipment-detected-detail.page.scss'],
})
export class EquipmentDetectedDetailPage implements OnInit {

  public equipmentDetected : any;

  public translate: TranslateService = this.injector.get( TranslateService );
  
  constructor(private router: Router, private route: ActivatedRoute, protected injector: Injector) { 
    
    this.route.queryParams.subscribe(params =>{
      if(params)
      {
        this.equipmentDetected = JSON.parse(params['equipmentDetected']);
      }
    })
   }

  ngOnInit() {
  }

  
  public seeRoutines() {
    this.router.navigate(['./routine-categories-filter', {queryParams:
      {
        exercise:JSON.stringify(this.equipmentDetected)
      }}])
  }


}
