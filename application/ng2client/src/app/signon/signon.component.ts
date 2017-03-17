import {
  Component,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import {GoogleSignInSuccess} from '../shared/google';
import { AppState } from '../app.service';
import { SignOnProvider } from './signon.provider';


@Component({
  selector: 'signon',
  styles: [`
  `],
  template:require('./signon.component.html'),
  providers: [SignOnProvider] 
})
export class SignOnComponent implements OnInit {

  public localState: any;

  public myLongTitle="true";
  public myTheme="dark";

  constructor(
    public route: Router, public appState: AppState, public signOnProvider: SignOnProvider
  ) {}

  public ngOnInit() {
  }

  private myClientId: string = '280072419521-l9s8j0jig6oee7hqrs1a53itd86dre0h.apps.googleusercontent.com';

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    console.log('ID: ' +
      profile
        .getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    this.appState.set("name",profile.getName())
    this.signOnProvider.signIn({"googleToken":id,"email":profile.getEmail(),"password":""})
      .subscribe(user => {
        this.appState.set("user",user);
        console.log(user);
        this.route.navigate(['main']);
      })
    
  }
}