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
  slotList:Array<Object>; 
  form = {
      "reqId": 1,
      "type": null,
      "aoi": null,
      "exp":"",
      "location":null,
      "message": null,
      "timeSlot":"",
      "createdTs": null,
      "updatedTs": null
    };

  userdetails: string = "";

  constructor( public configService: ConfigService, public httpService: HttpService,public route: Router ) { 
     this.name= JSON.parse(localStorage.getItem("user")).firstName;

    
  }

  ngOnInit() {
    this.httpService.get(this.configService.serviceHost + "calendar/events")
                   .subscribe(result => {
                     this.slotList =result.json()
                    });
    
  }

  submitDetails() {


    this.httpService.post(this.configService.serviceHost + "users/skills", this.form).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['regconf']);
      }
    );
  }

}
