import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { SignOnComponent } from './signon';
import { MainComponent } from './main';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'signon', component: SignOnComponent },
  { path: 'main', component: MainComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
