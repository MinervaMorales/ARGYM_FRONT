import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Component({
  selector: 'app-object-detection',
  templateUrl: './object-detection.page.html',
  styleUrls: ['./object-detection.page.scss'],
})
export class ObjectDetectionPage implements OnInit {

  public constructor(private platform:Platform, private androidPermissions: AndroidPermissions) 
  { 
    navigator.getUserMedia = ((<any>navigator).getUserMedia || (<any>navigator).webkitGetUserMedia || (<any>navigator).mozGetUserMedia || (<any>navigator).msGetUserMedia);

    platform.ready().then(() => {

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);

   })

  }

  ngOnInit() {
  }

}
