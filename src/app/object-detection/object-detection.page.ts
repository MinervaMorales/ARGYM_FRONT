import { Component, Injector, OnInit } from '@angular/core';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { RoutineCategoryService } from 'src/services/routineCategory/routine-category.service';
import { ImageProcessingService } from 'src/services/ImageProcessing/image-processing.service';
import { LoaderService } from 'src/services/loader/loader.service';
import { ObjectDetectionImage } from 'src/common/const/value';
import { Picture } from 'src/common/utilities/picture';
import { imageBase64 } from 'src/common/const/imageBase64';


const slideOpts = {
  initialSlide: 1,
  speed: 400
};

@Component({
  selector: 'app-object-detection',
  templateUrl: './object-detection.page.html',
  styleUrls: ['./object-detection.page.scss'],
})
export class ObjectDetectionPage implements OnInit {

  //Variable that holds the selected machine
  public equipmentDetected: any;
  //Variable that holds the list of routines given a machine
  public routinesByMachine: any[];
  //Variable that indicates the selected machine
  public responseImagePredicted: any;

  private route: Router = this.injector.get(Router);
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public translate: TranslateService = this.injector.get(TranslateService);
  public routineCategoryService: RoutineCategoryService = this.injector.get(RoutineCategoryService);
  public imageProcessingService: ImageProcessingService = this.injector.get(ImageProcessingService);
  private ionLoader: LoaderService = this.injector.get(LoaderService);
  private picture: Picture = this.injector.get(Picture); //COMMENT

  public constructor(protected injector: Injector) {
  }

  ngOnInit() {
    
    window.localStorage.setItem('IMAGE_PREDICTED', null);
  }

  public async getPicture(): Promise<string> {

    try {
      const response = await this.picture.getObjectDetectionImage(); ///COMMENT
      this.ionLoader.showLoader();
      let responseImagePredicted = await this.ProcessingImage(response.Base64);//imageBase64.DUMBBELL
      if(responseImagePredicted){
        if (responseImagePredicted.split('_')[0] != '0') {
          window.localStorage.setItem('IMAGE_PREDICTED', responseImagePredicted);
          this.equipmentDetected = await this.GetRoutinesByMachineString(responseImagePredicted)
          await this.ionLoader.hideLoader();
          
          this.goToEquipmentDetectedDetail();
        } else{
          this.ionLoader.hideLoader();
          await (await this.alertCtrl.create({
            header: this.translate.instant('error'),
            message: this.translate.instant('image-not-found'),
            buttons: [{ text: this.translate.instant("bt-ok") }]
          })).present();
        }
      } else{
        await this.ionLoader.hideLoader();
      }
      

    }
    catch (e) {
      console.log(e);
      this.ionLoader.hideLoader();
      await (await this.alertCtrl.create({
        header: this.translate.instant('error'),
        message: this.translate.instant('unexpected'),
        buttons: [{ text: this.translate.instant("bt-ok") }]
      })).present();
    }
    return this.equipmentDetected;
  }


  public async GetRoutinesByMachineString(str: string) {
      this.routinesByMachine = await (await this.routineCategoryService.GetByMachineWithString(str)).objModel;
      return this.routinesByMachine;
  }

  public async ProcessingImage(response: string) {
    try {

      this.responseImagePredicted = await (await this.imageProcessingService.PredictImage({ image: response }));
      return this.responseImagePredicted;
    }
    catch (e) {
      return await (await this.alertCtrl.create({
        header: this.translate.instant('error'),
        message: this.translate.instant('unexpected'),
        buttons: [{ text: this.translate.instant("bt-ok") }]
      })).present();
    }
  }

  public goToEquipmentDetectedDetail() {
    this.route.navigate(['./equipment-detected-detail'], { queryParams: { equipmentDetected: JSON.stringify(this.equipmentDetected) } })
  }


}
