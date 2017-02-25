import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

@Component({
  selector: 'page-userhome',
  templateUrl: 'userhome.html'
})
export class UserHomePage {
  user: User
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.user=params.data;
  }

}
