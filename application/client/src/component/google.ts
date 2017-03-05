import { Component, NgZone } from "@angular/core";

declare var gapi:any;

@Component({
    selector: "google-signin",
    templateUrl: "google.html"
})
export class GoogleSignIn {

  googleLoginButtonId = "google-login-button";
  userAuthToken = null;
  userDisplayName = "empty";

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    // Converts the Google login button stub to an actual button.
    gapi.signin2.render(
      this.googleLoginButtonId,
      {
        "onSuccess": this.onGoogleLoginSuccess,
        "scope": "profile",
        "theme": "light"
      });
  }

    // Triggered after a user successfully logs in using the Google external
  // login provider.
  onGoogleLoginSuccess = (loggedInUser) => {
        this.zone.run(() => {
            this.userAuthToken = loggedInUser.getAuthResponse().id_token;
            this.userDisplayName = loggedInUser.getBasicProfile().getName();
            console.log('This is the sample text');
        });
  }

}