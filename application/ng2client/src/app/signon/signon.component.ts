/// <reference path="../../../node_modules/@types/gapi.auth2/index.d.ts" />

import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {GoogleSignInSuccess} from '../common/google';
import { AppState } from '../app.service';
import { SignOnProvider } from './signon.provider';


@Component({
  selector: 'signon',
    providers: [
    SignOnProvider
  ],
  styles: [`
  `],
  template: require('./signon.component.html'),

})

export class SignOnComponent implements OnInit {

  public localState: any;

  public myLongTitle="true";
  public myTheme="dark";
  public myWidth="223";

  constructor(public route: Router, public appState: AppState, public signOnProvider: SignOnProvider) {
    console.log('Test is the best');
  }


  public ngOnInit() {
  }

  private myClientId: string = '280072419521-l9s8j0jig6oee7hqrs1a53itd86dre0h.apps.googleusercontent.com';

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    console.log('Name: ' + profile.getName());
    this.appState.set("name",profile.getName());
    let usrObj = {"googleToken":googleUser.getAuthResponse().id_token,"email":profile.getEmail(),"password":""};
    this.signOnProvider.signIn(usrObj)
      .subscribe(user => {
        this.appState.set("email",profile.getEmail());
        console.log(user);
        localStorage.setItem('user', JSON.stringify(usrObj));
        this.route.navigate(['main']);
      })
    
  }
}