import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SignOnPage } from '../signon/signon';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(login){
   this.navCtrl.push(SignOnPage, {login});
  }

}
