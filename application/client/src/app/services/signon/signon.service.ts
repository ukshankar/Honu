import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { User } from '../../models/user';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { HttpService } from '../../services/utils';

@Injectable()
export class SignonService {


  public token: string;

  constructor(public httpService: HttpService, public configService: ConfigService) {
    console.log('Hello Home Provider');
  }

  signIn(user:User): Observable<User> {
    return this.httpService.postPresignOn(this.configService.serviceHost+'signon',user)
      .map(res => <User>(res.json()));
  }

}
