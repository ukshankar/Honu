import { Component, OnInit } from '@angular/core';

import { SignonService } from '../../services/signon/signon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user={
    "email": "",
    "password":"",
    "password2":""
  };

  constructor(public route: Router, public signonService: SignonService) { }

  ngOnInit() {
  }

  submit(){
    console.log(this.user.email);
        this.signonService.signUp({"email": this.user.email, "password": this.user.password})
      .subscribe(user => {
        console.log(user);
 //       localStorage.setItem('user', JSON.stringify(user));
 //       localStorage.setItem('user_token', user.jwtToken);
        this.route.navigate(['regconf']);
      });
  }

}
