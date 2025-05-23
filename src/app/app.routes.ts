import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { EmployeeComponent } from './components/employee/employee.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'emp', component: EmployeeComponent },
      // You can add more dashboard children like:
      // { path: 'profile', component: ProfileComponent },
    ],
  }
  // { path: 'dashboard', component: DashboardComponent }, 
  // { path: 'user', component: UserComponent }
];
