import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpService {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('jwt_header', `${localStorage.getItem('user_token')}`); 
  }

  getPresignOn(url)  {
       return this.http.get(url);
  }

  postPresignOn(url, data) {
    return this.http.post(url, data);
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

}
