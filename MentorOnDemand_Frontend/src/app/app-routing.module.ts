import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './shared-module/login/login.component';
import{UsersignupComponent}from'./shared-module/usersignup/usersignup.component';
//import { MentloginComponent } from './shared-module/mentlogin/mentlogin.component';
import { MentsignupComponent } from './shared-module/mentsignup/mentsignup.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AdminmentorComponent } from './adminmentor/adminmentor.component';
import { AdmintrainingComponent } from './admintraining/admintraining.component';
import { AdmintechnologyComponent } from './admintechnology/admintechnology.component';
import { AdminpaymentComponent } from './adminpayment/adminpayment.component';
import { SearchComponent } from './search/search.component';
import { UserdashComponent } from './userdash/userdash.component';
import { MentordashComponent } from './mentordash/mentordash.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'usersignup',component:UsersignupComponent},
  {path:'search',component:SearchComponent},
  {path:'msignup',component:MentsignupComponent}
,{path:'admindash',component:AdmindashComponent,children:[
  {path:'adminuser',component:AdminuserComponent},
  {path:'adminmentor',component:AdminmentorComponent},
  {path:'admintraining',component:AdmintrainingComponent},
  {path:'admintechnology',component:AdmintechnologyComponent},
  {path:'adminpayment',component:AdminpaymentComponent}]},
  {path:'userdash',component:UserdashComponent},
  {path:'mentordash',component:MentordashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
