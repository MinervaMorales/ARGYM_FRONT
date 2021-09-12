import { Component, Injector, OnInit } from '@angular/core';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';
import { ImageProcessingService } from 'src/services/ImageProcessing/image-processing.service';
import { ThrowStmt } from '@angular/compiler';

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

  private route: Router = this.injector.get(Router);
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public loading: LoadingController = this.injector.get( LoadingController );
  public translate: TranslateService = this.injector.get( TranslateService );
  public routineCategoryService: RoutineCategoryService=this.injector.get(RoutineCategoryService);
  public imageProcessingService: ImageProcessingService=this.injector.get(ImageProcessingService)
  public routinesByMachine: any[]
  public responseImagePredicted:any

  public constructor(private camera: Camera, private platform:Platform, private androidPermissions: AndroidPermissions,protected injector: Injector) 
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
        /*this.options.targetWidth = 256;
        this.options.targetHeight = 256;
        this.options.quality = 100;
        this.options.destinationType = this.camera.DestinationType.DATA_URL;
        this.options.encodingType = this.camera.EncodingType.JPEG;
        this.options.mediaType = this.camera.MediaType.PICTURE;
        const response = await this.get();

       
     
     

        let responseImagePredicted =await this.ProcessingImage(response)
        console.log(responseImagePredicted)

        this.tag=await this.GetRoutinesByMachineString(responseImagePredicted)*/
        this.tag=await this.GetRoutinesByMachineString("2_dumbell")
        console.log(this.tag)

        return "2_dumbell";

        
    }

    public async GetRoutinesByMachineString(str:string){
      
      this.loading.create();
      try
      {
        
        this.routinesByMachine = await (await this.routineCategoryService.GetByMachineWithString(str)).objModel;
        this.flag=true
        return this.routinesByMachine
        
      
      }
      catch ( e )
      {
        console.log(e);
        this.loading.dismiss();

        return await (await this.alertCtrl.create({
          header: this.translate.instant('error'),
          message: this.translate.instant('unexpected'),
          buttons: [{ text: this.translate.instant( "bt-ok" )}]
        })).present();
      }
    }

    public async ProcessingImage(response:string){
      this.loading.create();
      try{
        return this.responseImagePredicted= await (await this.imageProcessingService.PredictImage({image:response}));
      }
      catch ( e )
      {
        console.log(e);
        this.loading.dismiss();

        return await (await this.alertCtrl.create({
          header: this.translate.instant('error'),
          message: this.translate.instant('unexpected'),
          buttons: [{ text: this.translate.instant( "bt-ok" )}]
        })).present();
      }
    }

    public  SearchByMachineAndRoutineCategory(routine){
      
      console.log(routine)
      console.log(this.tag?.objModel)
      
    }

    public seeRoutines(){
      this.route.navigate(['./routine-categories-filter'])
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
