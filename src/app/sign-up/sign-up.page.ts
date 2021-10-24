import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { RegExp } from 'src/common/const/regExp';
import { Users } from 'src/models/Users';
import { UserService } from 'src/services/user/user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  public signUpForm: FormGroup;
  public user: Users;
  public userService: UserService = this.injector.get( UserService );
  private navCtrl: NavController = this.injector.get(NavController);
  public formBuilder: FormBuilder = this.injector.get(FormBuilder);
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public loading: LoadingController = this.injector.get( LoadingController );
  public translate: TranslateService = this.injector.get( TranslateService );

  
  public constructor(protected injector: Injector) 
  { 

  }

  ngOnInit() {
    this.buildForm();
  } 
  
  public buildForm() 
  {
    this.signUpForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.maxLength(128), Validators.pattern(RegExp.EMAIL), Validators.required])),
      password: new FormControl('', Validators.compose([Validators.minLength(6), Validators.maxLength(30), Validators.required])),
      name: new FormControl('', Validators.compose([Validators.maxLength(100), Validators.required]))
    });
  }

  public signIn() 
  {
    this.navCtrl.navigateRoot(['./sign-in']);
  }

  public async Insert()
  {
    this.user = new Users(this.signUpForm.value);
    (await this.loading.create()).present();
    try
    {
      let response = await (await this.userService.Insert( this.user )).objModel;
      this.loading.dismiss();
      await (await this.alertCtrl.create({
        header: this.translate.instant('welcome-new-user'),
        message: this.translate.instant('new-user-added'),
        buttons: [{ text: this.translate.instant( "bt-ok" )}]
      })).present();
      this.signIn();
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
