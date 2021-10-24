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
  public tag: any;
  //Variable that indicates whether or not the ai detected a valid machine
  public flag: boolean;
  //Variable that holds the list of routines given a machine
  public routinesByMachine: any[];
  //Variable that indicates the selected machine
  public responseImagePredicted: any;

  private route: Router = this.injector.get(Router);
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public loading: LoadingController = this.injector.get(LoadingController);
  public translate: TranslateService = this.injector.get(TranslateService);
  public routineCategoryService: RoutineCategoryService = this.injector.get(RoutineCategoryService);
  public imageProcessingService: ImageProcessingService = this.injector.get(ImageProcessingService);
  private ionLoader: LoaderService = this.injector.get(LoaderService);
  private picture: Picture = this.injector.get(Picture);
 
  public constructor(protected injector: Injector) {
  }

  ngOnInit() {
  }

  public async getPicture(): Promise<string> {

    const response = await this.picture.getObjectDetectionImage();
    console.log(response.Base64)
    let responseImagePredicted = await this.ProcessingImage(response.Base64);
    this.tag = await this.GetRoutinesByMachineString(responseImagePredicted)
    return this.tag;
  }


  public async GetRoutinesByMachineString(str: string) {

    this.ionLoader.showLoader();
    try {

      this.routinesByMachine = await (await this.routineCategoryService.GetByMachineWithString(str)).objModel;
      this.flag = true;
      this.ionLoader.hideLoader();
      return this.routinesByMachine;

    }
    catch (e) {

      console.log(e);
      this.ionLoader.hideLoader();

      return await (await this.alertCtrl.create({
        header: this.translate.instant('error'),
        message: this.translate.instant('unexpected'),
        buttons: [{ text: this.translate.instant("bt-ok") }]
      })).present();
    }
  }

  public async ProcessingImage(response: string) {
    (await this.loading.create()).present;
    try {
      
      this.responseImagePredicted = await (await this.imageProcessingService.PredictImage({ image: response }));
      this.loading.dismiss();
      return this.responseImagePredicted;
    }
    catch (e) {

      this.loading.dismiss();

      return await (await this.alertCtrl.create({
        header: this.translate.instant('error'),
        message: this.translate.instant('unexpected'),
        buttons: [{ text: this.translate.instant("bt-ok") }]
      })).present();
    }
  }

  public SearchByMachineAndRoutineCategory(routine) {

    console.log(routine)
    console.log(this.tag?.objModel)

  }

  public seeRoutines() {
    this.route.navigate(['./routine-categories-filter'])
  }


}
