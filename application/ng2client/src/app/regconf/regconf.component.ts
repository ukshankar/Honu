import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConfig } from '../config';
import { AuthHttp } from '../common/auth';
import { User } from '../common/model/user'; 
import { Router } from '@angular/router';

@Component({
  template:require('./regconf.component.html')
})
export class RegConfComponent implements OnInit {
  name = null;
  constructor(
    public appConfig: AppConfig, public authHttp: AuthHttp,public route: Router, 
  ) {

     this.name= JSON.parse(localStorage.getItem("user")).firstName;

  }

  public ngOnInit() {

  }


}