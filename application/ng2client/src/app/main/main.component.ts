import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

@Component({
  selector: 'user-home',
  template:require('./main.component.html')
})
export class MainComponent implements OnInit {
  name = null;
  public localState: any;
  constructor(
    public appState: AppState
  ) {

     this.name= this.appState.get("name");

  }

  public ngOnInit() {

  }

}