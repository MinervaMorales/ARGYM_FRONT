import { Component, Injector, OnInit } from '@angular/core';
import { Users } from 'src/models/Users';
import { Storage } from '@ionic/storage';
import { Picture } from 'src/common/utilities/picture';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user/user.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Events } from 'src/services/events/events.services';
import { RegExp } from 'src/common/const/regExp';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public userForm: FormGroup;
  public user: Users = new Users();
  public userService: UserService = this.injector.get( UserService );
  public formBuilder: FormBuilder = this.injector.get(FormBuilder);
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public loading: LoadingController = this.injector.get( LoadingController );
  public translate: TranslateService = this.injector.get( TranslateService );
  public event: Events = this.injector.get(Events); 
  public storage: Storage = this.injector.get( Storage );
  public camera: Picture = this.injector.get( Picture );

  constructor(protected injector: Injector) { 
  }

  public async getUser()
  {
    this.user = await this.storage.get( 'USER' );
    this.userForm.get('email').setValue(this.user.email);
    this.userForm.get('name').setValue(this.user.name);
    this.userForm.get('photo').setValue(this.user.photo);
    this.userForm.get('photoBase64').setValue(this.user.photoBase64);
    this.userForm.get('id').setValue(this.user.id);
  }
  ngOnInit() {
    this.buildForm();
    this.getUser();
  }

  public async buildForm() 
  {
    this.userForm = this.formBuilder.group({
      email: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      photo: new FormControl(''),
      photoBase64: new FormControl(''),
      id: new FormControl(0)
    });
  }


  public async getPicture()
  {
    let picture =  await this.camera.getProfilePicture();
    this.userForm.controls['PhotoBase64'].setValue(picture);
    this.user.photo = picture;
  }

  public async update()
  {
    this.user = new Users(this.userForm.value);
    (await this.loading.create()).present();
    try
    {
      let response = await (await this.userService.Update( this.user )).objModel;
      this.storage.set( 'USER', new Users(response));
      this.event.setUserData(response);
      this.loading.dismiss();
      await (await this.alertCtrl.create({
        header: this.translate.instant('changes-saved'),
        message: this.translate.instant('updated-successfully'),
        buttons: [{ text: this.translate.instant( "bt-ok" )}]
      })).present();
    }
    catch ( e )
    {
      console.log(e);
      this.loading.dismiss();

      await (await this.alertCtrl.create({
        header: this.translate.instant('error'),
        message: this.translate.instant('unexpected'),
        buttons: [{ text: this.translate.instant( "bt-ok" )}]
      })).present();
    }
  }

}
