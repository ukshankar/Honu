import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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

const APP_PROVIDERS = [
  SignonService, HttpService, ConfigService
];


@NgModule({
  declarations: [
    AppComponent,
    SignonComponent,
    HomeComponent,
    MainComponent,
    RegconfComponent,
    GoogleSignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  providers: [ APP_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
