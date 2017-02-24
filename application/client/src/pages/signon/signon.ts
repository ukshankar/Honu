import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { UserHomePage } from '../userhome/userhome';

@Component({
  selector: 'page-signon',
  templateUrl: 'signon.html'
})
export class SignOnPage {
    login: String;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.login = navParams.get('login');
  }

  signon(){
    this.navCtrl.setRoot(UserHomePage);
  }

}
