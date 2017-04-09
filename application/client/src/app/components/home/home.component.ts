import { Component, OnInit } from '@angular/core';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig) {
         this.toastyConfig.theme = 'default';
          this.toastyConfig.position = "top-center";
   }

  ngOnInit() {
  }

  showMessage(){
     //this.toastyService.default('Hi there');
      var toastOptions:ToastOptions = {
            title: "Feature",
            msg: "Coming Soon ...",
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: (toast:ToastData) => {
                console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
         this.toastyService.info(toastOptions);
  }
}
