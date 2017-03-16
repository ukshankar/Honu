import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User } from '../common/model/user';
import {AppConfig} from '../config';


@Injectable()
export class SignOnProvider {

  constructor(public http: Http, public appConfig: AppConfig) {
    console.log('Hello Home Provider');
  }

  signIn(user:User): Observable<User> {
    return this.http.post(this.appConfig.serverHost+'/service/users',user)
      .map(res => <User>(res.json()))
  }
}
