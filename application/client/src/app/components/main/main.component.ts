import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config';
import { HttpService } from '../../services/utils';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
    name = null;
  public localState: any;
  userdetails: string = "Area of expertise:"+   
"No. of years experience:    "+
"Location:  "+ 
"How can we help you to find a better job:";

  constructor( public configService: ConfigService, public httpService: HttpService,public route: Router ) { 
     this.name= JSON.parse(localStorage.getItem("user")).firstName;
  }

  ngOnInit() {
  }

  submitDetails() {

    let obj = {
      "reqId": 123,
      "type": null,
      "message": this.userdetails,
      "createdTs": null,
      "updatedTs": null
    };
    this.httpService.post(this.configService.serviceHost + "users/skills", obj).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['regconf']);
      }
    );
  }

}
