import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { UserWithJsonComponent } from './components/user-with-json/user-with-json.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'userwithjson', component: UserWithJsonComponent },
      // You can add more dashboard children like:
      // { path: 'profile', component: ProfileComponent },
    ],
  }
  // { path: 'dashboard', component: DashboardComponent }, 
  // { path: 'user', component: UserComponent }
];
