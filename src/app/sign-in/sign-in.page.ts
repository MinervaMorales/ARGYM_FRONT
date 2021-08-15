import { Component, Injector, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user/user.service';
import { Users } from 'src/models/Users';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  public loginForm: FormGroup;
  public user: Users;
  public userService: UserService = this.injector.get( UserService );
  private navCtrl: NavController = this.injector.get(NavController);
  public formBuilder: FormBuilder = this.injector.get(FormBuilder);
  private route: Router = this.injector.get(Router);
  private alertCtrl: AlertController = this.injector.get(AlertController);
  public loading: LoadingController = this.injector.get( LoadingController );
  public translate: TranslateService = this.injector.get( TranslateService );
  public storage: Storage = this.injector.get( Storage );

  
  public constructor(protected injector: Injector ) 
  { 

  }

  ngOnInit() {
    this.buildForm();
  } 
  
  public buildForm() 
  {
    this.loginForm = this.formBuilder.group({
      Email: new FormControl('', Validators.compose([Validators.maxLength(128), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'), Validators.required])),
      Password: new FormControl('', Validators.compose([Validators.maxLength(8), Validators.required]))
    });
  }


  public forgot_password() 
  {
    this.route.navigate(['./forgot-password']);
  }  

  public home() 
  {
    this.navCtrl.navigateRoot(['./home']);
  }

  public sign_up() 
  {
    this.route.navigate(['./sign-up']);
  }  

  public async login()
  {
    this.user = new Users(this.loginForm.value);
    this.loading.create();
    try
    {
      let response = await (await this.userService.Login( this.user )).objModel.access_Token;
      console.log("response", response);
      this.storage.set( 'TOKEN', response );
      console.log("TOKEN", await this.storage.get( 'TOKEN' ));
      
      this.home();
    }
    catch ( e )
    {
      console.log(e);
      this.loading.dismiss();

      await (await this.alertCtrl.create({
        header: this.translate.instant('invalid-data'),
        message: this.translate.instant('try-again'),
        buttons: [{ text: this.translate.instant( "bt-ok" )}]
      })).present();
    }
  }
}
