import { Component, NgZone } from '@angular/core';

// Google's login API namespace
declare var gapi:any;

@Component({
    selector: "signon",
    templateUrl: "signon.html"
})
export class LoginComponent {
  googleLoginButtonId = "google-login-button";
  userAuthToken = null;
  userDisplayName = "empty";

  constructor(private _zone: NgZone) { }

  // Angular hook that allows for interaction with elements inserted by the
  // rendering of a view.
  ngAfterViewInit() {
    // Converts the Google login button stub to an actual button.
    gapi.signin2.render(
      this.googleLoginButtonId,
      {
        "onSuccess": this.onGoogleLoginSuccess,
        "scope": "profile",
        "theme": "dark"
      });
  }

    // Triggered after a user successfully logs in using the Google external
    // login provider.
    onGoogleLoginSuccess = (loggedInUser) => {
        this._zone.run(() => {
            this.userAuthToken = loggedInUser.getAuthResponse().id_token;
            this.userDisplayName = loggedInUser.getBasicProfile().getName();
        });
    }

  signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
}