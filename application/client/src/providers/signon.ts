import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../models/user';
import {AppConfig} from '../config/appconfig';

/*
  Generated class for the Authorize provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SignOn {

  constructor(public http: Http, public appConfig: AppConfig) {
    console.log('Hello Home Provider');
  }

  signIn(login:string): Observable<User> {
    return this.http.post(this.appConfig.serverHost+'/service/signon',{name:login})
      .map(res => <User>(res.json()))
  }
}
