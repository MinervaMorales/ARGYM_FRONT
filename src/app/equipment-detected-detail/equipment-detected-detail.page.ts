import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-equipment-detected-detail',
  templateUrl: './equipment-detected-detail.page.html',
  styleUrls: ['./equipment-detected-detail.page.scss'],
})
export class EquipmentDetectedDetailPage implements OnInit {

  public equipmentDetected : any;

  public translate: TranslateService = this.injector.get( TranslateService );
  public navCtrl: NavController = this.injector.get( NavController );
  public alertCtrl: AlertController = this.injector.get(AlertController);
  
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

  public async goBack(){
    
    await (await this.alertCtrl.create({
      header: this.translate.instant('confirm-equipment-detected'),
      message: this.translate.instant('message-equipment-detected'),
      buttons: [{ text: this.translate.instant("bt-no") ,
      handler: ()=>{
        this.router.navigate(['./object-detection']);
      }}, {
        text: this.translate.instant("bt-yes"),
        handler: ()=>{
        this.seeRoutines();
        }
      }]
    })).present();
  }
  
  public seeRoutines() {
    this.router.navigate(['./routine-categories-filter', {queryParams:
      {
        exercise:JSON.stringify(this.equipmentDetected)
      }}])
  }


}
