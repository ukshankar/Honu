import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { SignOnPage } from '../pages/signon/signon';
import { HomePage } from '../pages/home/home';
import { UserHomePage } from '../pages/userhome/userhome';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignOnPage,
    UserHomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignOnPage,
    UserHomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
