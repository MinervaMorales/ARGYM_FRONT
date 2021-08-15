import { Component, OnInit, Inject } from '@angular/core'; 
import { NavController, Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'src/models/contants.models';
import { MyEvent } from 'src/services/myevent.services';
import { APP_CONFIG, AppConfig } from './app.config'; 
import { BuyappalertPage } from '../app/buyappalert/buyappalert.page'
import { VtPopupPage } from './vt-popup/vt-popup.page' 
import { Storage } from '@ionic/storage';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'] 
})
export class AppComponent implements OnInit {
  rtlSide = "left"; 
  rtlSideMenu = "start";
  showSideMenu = false;
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
      url: '/workouts',
      icon: 'zmdi zmdi-run'
    },
    {
      title: 'detect-object',
      url: '/object-detection',
      icon: 'zmdi zmdi-camera'
    },
    /* {
      title: 'set_alarm',
      url: '/alarm',
      icon: 'zmdi zmdi-alarm'
    }, 
     {
      title: 'blogs',
      url: '/blogs',
      icon: 'zmdi zmdi-assignment'
    },  
     {
      title: 'privacy_policy',
      url: '/privacy-policy',
      icon: 'zmdi zmdi-alert-circle'
    }, 
     {
      title: 'change_language',
      url: '/change-language',
      icon: 'zmdi zmdi-globe'
    }*/
    ];
  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private modalController: ModalController, 
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService, private myEvent: MyEvent, public storage: Storage) {
    this.initializeApp();
    this.myEvent.getLanguageObservable().subscribe(value => {
      this.navCtrl.navigateRoot(['./']);
      this.globalize(value);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let defaultLang = window.localStorage.getItem(Constants.KEY_DEFAULT_LANGUAGE);
      this.globalize(defaultLang);
    });
  }

  globalize(languagePriority) {
    this.translate.setDefaultLang("en");
    let defaultLangCode = this.config.availableLanguages[0].code;
    this.translate.use(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
    this.setDirectionAccordingly(languagePriority && languagePriority.length ? languagePriority : defaultLangCode);
  }

  setDirectionAccordingly(lang: string) {
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

  async ngOnInit() {
    /* if (this.config.demoMode) {
      setTimeout(() => {
        this.presentModal()
      }, 15000)
    } */ 
    await this.storage.create();
    this.decodeToken()
  }
  profile() {
    this.navCtrl.navigateRoot(['./profile']);
  }    
 buyappalert () {
    this.modalController
      .create({ component: BuyappalertPage })
      .then(modalElement => {
        modalElement.present()
      })
  }

  public async decodeToken()
  {
    let token = await this.storage.get( 'TOKEN' )
    console.log('Home token', token);
    let decoded: any = jwt_decode(token);
    let userData: string = decoded.unique_name.split(";");
    console.log("name", userData[0])
    this.username = userData[0];
    this.userPhoto = userData[2];
    console.log("email", userData[1])
    console.log("photo", userData[2]);
  }

  async presentModal () {
    const modal = await this.modalController.create({
      component: VtPopupPage
    })
    return await modal.present()
  }    
}
