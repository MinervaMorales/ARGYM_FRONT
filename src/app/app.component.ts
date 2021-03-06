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

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'] 
})
export class AppComponent implements OnInit {
  rtlSide = "left"; 
  rtlSideMenu = "start";
  showSideMenu = false;
   public selectedIndex = 0;
   public appPages = [
    {
      title: 'home',
      url: '/home',
      icon: 'zmdi zmdi-home'
    }, 
     {
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
    }, 
    {
      title: 'share_app',
//      url: '',
      icon: 'zmdi zmdi-share'
    },
    {
      title: 'detect-object',
      url: '/object-detection',
      icon: 'zmdi zmdi-globe'
    }
    ];
  constructor(
    @Inject(APP_CONFIG) public config: AppConfig,
    private platform: Platform, private navCtrl: NavController,
    private modalController: ModalController, 
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService, private myEvent: MyEvent) {
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

  ngOnInit() {
    /* if (this.config.demoMode) {
      setTimeout(() => {
        this.presentModal()
      }, 15000)
    } */ 

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

  async presentModal () {
    const modal = await this.modalController.create({
      component: VtPopupPage
    })
    return await modal.present()
  }    
}
