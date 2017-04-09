import { Routes } from '@angular/router';
import { HomeComponent } from './components/home';
import { SignonComponent } from './components/signon';
import { MainComponent } from './components/main';
import { SignupComponent } from './components/signup';
import { RegconfComponent } from './components/regconf';
import { AuthGuard } from './guards';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'signon', component: SignonComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard]},
  { path: 'regconf', component: RegconfComponent, canActivate: [AuthGuard]}
];
