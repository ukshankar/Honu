import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppConfig } from '../config';
import { AuthHttp } from '../common/auth';
import { User } from '../common/model/user'; 

@Component({
  selector: 'user-home',
  styleUrls: [ './main.component.css' ],
  template:require('./main.component.html')
})
export class MainComponent implements OnInit {
  name = null;
  public localState: any;
  userdetails: string = "Area of expertise:"+   
"No. of years experience:    "+
"Location:  "+ 
"How can we help you to find a better job:";
  constructor(
    public appConfig: AppConfig, public authHttp: AuthHttp
  ) {

     this.name= JSON.parse(localStorage.getItem("user")).firstName;

  }

  public ngOnInit() {

  }

  submitDetails(){

    let obj = {       
      "reqId": 123,      
      "type": null,
      "message": this.userdetails,
      "createdTs": null,
      "updatedTs": null 
   };
    this.authHttp.post(this.appConfig.serverHost+"/service/users/skills",obj).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}