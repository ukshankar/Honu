import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { SignOnPage } from '../pages/signon/signon';
import { HomePage } from '../pages/home/home';
import { UserHomePage } from '../pages/userhome/userhome';
import { LoginComponent } from '../pages/signon/logon';
import { SignOn } from '../providers/signon';
import {AppConfig} from '../config/appconfig';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignOnPage,
    UserHomePage,
    LoginComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignOnPage,
    UserHomePage,
    LoginComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},SignOn,AppConfig]
})
export class AppModule {}
