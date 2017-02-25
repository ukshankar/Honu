import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { UserHomePage } from '../userhome/userhome';
import { SignOn } from '../../providers/signon';
import { User } from '../../models/user';


@Component({
  selector: 'page-signon',
  templateUrl: 'signon.html'
})
export class SignOnPage {
  login: string;
  user: User;

  constructor(public navCtrl: NavController, private navParams: NavParams,private signOn: SignOn) {
    this.login = navParams.get('login');
  }

  signon(){
    this.signOn.signIn(this.login).subscribe(user => {
      this.user = user;
      console.log(user);
      this.navCtrl.setRoot(UserHomePage,user);
    })
    
  }

}
