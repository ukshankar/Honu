import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config';
import { HttpService } from '../../services/utils';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name = null;
  slotList:Array<Object>; 
  aoiList=[{value:"Software Engineer",id:"softeng"},{value:"Customer Service Representative",id:"csr"},{value:"Business Analyst",id:"ba"},{value:"Other",id:"other"}]
  userdetails: string = "";

  constructor( public configService: ConfigService, public httpService: HttpService,public route: Router,private formBuilder: FormBuilder) { 
     this.name= JSON.parse(localStorage.getItem("user")).firstName;

    
  }

  registerForm: FormGroup;

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        aoi :['',Validators.required],
        exp :['',Validators.required],
        message :[,Validators.required],
        location :[],
        otheraoi:[]
      });

    /*this.httpService.get(this.configService.serviceHost + "calendar/events")
                   .subscribe(result => {
                     this.slotList =result.json()
                    });*/
    
  }

  submitForm(value: any) {


    this.httpService.post(this.configService.serviceHost + "users/skills", value).subscribe(
      res => {
        console.log(res);
        this.route.navigate(['regconf']);
      }
    );
  }

}
