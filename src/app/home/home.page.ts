import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public storage: Storage = this.injector.get( Storage );
  private platform: Platform = this.injector.get(Platform);
  private androidPermissions: AndroidPermissions = this.injector.get(AndroidPermissions);

  constructor(private route: Router, protected injector: Injector) {
    
    this.platform.ready().then(() => {
      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?', result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
    })
   }

  ngOnInit() {
  }

  public workouts() 
  {
    this.route.navigate(['./routine-categories']);
  } 

  public toRecognize()
  {
    this.route.navigate(['./object-detection'])
  }

  public alarm() 
  {
    this.route.navigate(['./alarm']);
  }  

  public routineCategories()
  {
    this.route.navigate(['./routine-categories']);
  }
  public firstPersonTraining(type){
    this.route.navigate(['./first-person-training-routine-categories'], {
      queryParams:
      {
        type:JSON.stringify(type)
      }})
  }
}
