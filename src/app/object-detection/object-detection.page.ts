import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-object-detection',
  templateUrl: './object-detection.page.html',
  styleUrls: ['./object-detection.page.scss'],
})
export class ObjectDetectionPage implements OnInit {

  private readonly options: CameraOptions =
  {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
  };

  tag:any
  flag:boolean

  public constructor(private camera: Camera, private platform:Platform, private androidPermissions: AndroidPermissions) 
  { 
    /*this.platform.ready().then(() => {

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);

   })*/

  }

  public async getPicture(): Promise<string>
    {
        this.options.targetWidth = 256;
        this.options.targetHeight = 256;
        this.options.quality = 100;
        this.options.destinationType = this.camera.DestinationType.DATA_URL;
        this.options.encodingType = this.camera.EncodingType.JPEG;
        this.options.mediaType = this.camera.MediaType.PICTURE;

        const response = await this.get();

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "image": response})
      };
     
      await fetch('http://192.168.0.109:5000/image', requestOptions)
          .then(prediction => prediction.json() )
          .then(data=>{
            this.tag=data
            console.log(data)
            return fetch('https://192.168.0.109:5001/RoutineCategory/byMachineWithString?id='+data)
            .then(prediction_result=>prediction_result.json())
            .then(data_result=>{
              console.log(data_result)
              this.flag=true
              this.tag=data_result
            })
            ;
          })

        return response;
        
    }

    public  SearchByMachineAndRoutineCategory(equipmentId,routineId){
      alert(equipmentId)
      alert(routineId)
    }

    private async get(): Promise<string>
    {
        let base64: string;

        base64 = await this.camera.getPicture( this.options );
        console.log("base64", base64);

        return base64;
    }

  ngOnInit() {
  }

}
