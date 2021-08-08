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

  public constructor(private camera: Camera, private platform:Platform, private androidPermissions: AndroidPermissions) 
  { 
    this.platform.ready().then(() => {

      this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
        result => console.log('Has permission?',result.hasPermission),
        err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
      );
      
      this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);

   })

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
      await fetch('http://192.168.0.102:5000/image', requestOptions)
          .then(response => console.log("RESPONSE", response.json()))

        return response;
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
