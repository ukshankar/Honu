import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class AuthHttp{

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('jwt_header', `${localStorage.getItem('user_token')}`); 
    
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
        console.log("This is the text message - 1");
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}
