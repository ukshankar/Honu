import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToastyModule} from 'ng2-toasty';

import { AppComponent } from './app.component';
import { SignonComponent } from './components/signon';
import { HomeComponent } from './components/home';
import { MainComponent } from './components/main';
import { RegconfComponent } from './components/regconf';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';
import { GoogleSignInComponent } from './components/google';
import { SignonService } from './services/signon';
import { HttpService } from './services/utils';
import { ConfigService } from './services/config';
import { AuthGuard } from './guards';
import { SignupComponent } from './components/signup/signup.component';
import { ContactusComponent } from './components/contactus/contactus.component';


const APP_PROVIDERS = [
  SignonService, HttpService, ConfigService, AuthGuard
];


@NgModule({
  declarations: [
    AppComponent,
    SignonComponent,
    HomeComponent,
    MainComponent,
    RegconfComponent,
    GoogleSignInComponent,
    SignupComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ToastyModule.forRoot()
  ],
  providers: [ APP_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
