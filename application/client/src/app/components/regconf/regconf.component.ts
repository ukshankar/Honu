import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'; 


@Component({
  selector: 'app-regconf',
  templateUrl: './regconf.component.html',
  styleUrls: ['./regconf.component.css']
})
export class RegconfComponent implements OnInit {

  name = null;
  constructor(
  ) {

     this.name= JSON.parse(localStorage.getItem("user")).firstName;

  }
  ngOnInit() {
  }

}
