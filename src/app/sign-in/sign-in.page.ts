import { Component, Injector, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/services/user/user.service';
import { Events } from 'src/services/events/events.services';
import { Users } from 'src/models/Users';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import jwt_decode from "jwt-decode";

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
  public event: Events = this.injector.get(Events); 
  public storage: Storage = this.injector.get( Storage );

  
  public constructor(protected injector: Injector) 
  { 

  }

  ngOnInit() {
    
    this.storage.clear();
    window.localStorage.setItem('TOKEN', null);
    this.buildForm();
  } 
  
  public buildForm() 
  {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.maxLength(128), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'), Validators.required])),
      password: new FormControl('', Validators.compose([Validators.maxLength(8), Validators.required]))
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
    (await this.loading.create()).present();
    try
    {
      let response = await (await this.userService.Login( this.user )).objModel.access_Token;
      window.localStorage.setItem('TOKEN', response);
      this.storage.set( 'TOKEN', response );
      this.saveUser(response);
      this.loading.dismiss();
      this.home();
    }
    catch ( e )
    {
      console.log(e);
      this.loading.dismiss();
      let title = e.status == 400 ? 'invalid-data': 'error';
      let message = e.status == 400 ? 'try-again': 'unexpected';

      await (await this.alertCtrl.create({
        header: this.translate.instant(title),
        message: this.translate.instant(message),
        buttons: [{ text: this.translate.instant( "bt-ok" )}]
      })).present();
    }
  }

  public saveUser(token: string)
  {
    let user = new Users();
    let decoded: any = jwt_decode(token);
    let userData: string = decoded.unique_name.split(";");

    user.id = Number(userData[0]);
    user.name = userData[1];
    user.email = userData[2];
    user.photo = userData[3];
    this.storage.set( 'USER', user );
    window.localStorage.setItem('USER', JSON.stringify(user));
    this.event.setUserData(user);
  }

}
