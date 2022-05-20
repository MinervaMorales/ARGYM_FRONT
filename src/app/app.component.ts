import { Component, OnInit, Inject } from '@angular/core'; 
import { NavController, Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/models/contants.models';
import { Events } from 'src/services/events/events.services';
import { APP_CONFIG, AppConfig } from './app.config'; 
import { BuyappalertPage } from '../app/buyappalert/buyappalert.page'
import { VtPopupPage } from './vt-popup/vt-popup.page' 
import { Storage } from '@ionic/storage';
import { Users } from 'src/models/Users';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'] 
})
export class AppComponent implements OnInit {

  public rtlSide: string = "left"; 
  public rtlSideMenu: string = "start";
  public showSideMenu: boolean = false;
  public user: Users = new Users();
  userPhoto;
  username;
   public selectedIndex = 0;
   public appPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'zmdi zmdi-home'
    }, 
    {
      title: 'routines',
      url: '/routine-categories',
      icon: 'zmdi zmdi-run'
    },
    {
      title: 'detect-object',
      url: '/object-detection',
      icon: 'zmdi zmdi-camera'
    },
  
    /* {
      title: 'blogs',
      url: '/blogs',
      icon: 'zmdi zmdi-assignment'
    },  
     {
      title: 'privacy_policy',
      url: '/privacy-policy',
      icon: 'zmdi zmdi-alert-circle'
    }, */
     {
      title: 'change_language',
      url: '/change-language',
      icon: 'zmdi zmdi-globe'
    },
    {
      title: 'logout',
      url: '/sign-in',
      icon: 'zmdi zmdi-sign-in'
    } 
    ];
  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private modalController: ModalController, 
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService, 
    private event: Events, 
    private camera: Camera, 
    private androidPermissions: AndroidPermissions,
    public storage: Storage) 
  {
    this.initializeApp();

    this.event.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });

    this.event.getUserObservable().subscribe(value=>{
      this.getUser();
    })
  }

  public initializeApp() 
  {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  public globalize(languagePriority) 
  {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  public setDirectionAccordingly(lang: string) 
  {
    this.showSideMenu = false;
    switch (lang) {
      case 'iw':
      case 'ar':
        this.rtlSide = "rtl";
        this.rtlSideMenu = "end";
        break;
      default:
        this.rtlSide = "ltr";
        this.rtlSideMenu = "start";
        break;
    }
    setTimeout(() => this.showSideMenu = true, 100);
  }

  public async ngOnInit() 
  {
    await this.storage.create();
    this.getUser();
  }

  public profile() 
  {
    this.navCtrl.navigateRoot(['./profile']);
  }    
 
  public buyappalert () 
  {
    this.modalController
      .create({ component: BuyappalertPage })
      .then(modalElement => {
        modalElement.present()
      })
  }

  public async getUser()
  {
   // this.user = new Users(await this.storage.get( 'USER' ));
    console.log(window.localStorage.getItem('USER'));
    this.user = new Users(JSON.parse(window.localStorage.getItem('USER')));
  }

  public async presentModal () 
  {
    const modal = await this.modalController.create({
      component: VtPopupPage
    })
    return await modal.present()
  }   
 
}
