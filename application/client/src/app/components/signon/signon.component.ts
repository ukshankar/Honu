/// <reference path="../../../../node_modules/@types/gapi.auth2/index.d.ts" />

import { Component, OnInit , NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { GoogleSignInSuccess } from '../google/google.component';
import { SignonService } from '../../services/signon/signon.service';




@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.css']
})
export class SignonComponent implements OnInit {

  public myLongTitle="true";
  public myTheme="dark";
  public myWidth="223";

  private myClientId: string = '280072419521-l9s8j0jig6oee7hqrs1a53itd86dre0h.apps.googleusercontent.com';

  usrObj:any;
  userAuth:boolean=false;

  constructor(public route: Router, public signonService: SignonService, public zone: NgZone) { }

  ngOnInit() {
  }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {

    this.zone.run(() => {
        let googleUser: gapi.auth2.GoogleUser = event.googleUser;
        let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
        console.log('Name: ' + profile.getName());
        this.usrObj = {"googleToken":googleUser.getAuthResponse().id_token,"email":profile.getEmail(),"password":""};
        this.userAuth=true;
        this.signIn();
      });

    
  }

  signIn(){
      this.signonService.signIn(this.usrObj)
      .subscribe(user => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('user_token', user.jwtToken);
        this.route.navigate(['main']);
       
      });
  }

}