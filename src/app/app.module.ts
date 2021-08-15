import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_CONFIG, BaseAppConfig } from './app.config';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { UserService } from 'src/services/user/user.service';
import { Storage } from '@ionic/storage';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
   imports: [
	  BrowserModule, 
	  IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule,
      TranslateModule,    
      TranslateModule.forRoot({
        loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ AndroidPermissions,
    Camera,
    UserService,
    StatusBar,
    Storage,
    SplashScreen,
    { provide: APP_CONFIG, useValue: BaseAppConfig },      
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
