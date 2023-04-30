import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import {AppointmentComponent} from './components/appointment/appointment.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'profile', component:ProfileComponent,canActivate: [AuthGuard]},
  {path:'dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
  {path:'', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'appointment', component:AppointmentComponent,canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
