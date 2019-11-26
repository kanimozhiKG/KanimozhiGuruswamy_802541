import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { MentsignupComponent } from './mentsignup/mentsignup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, UsersignupComponent,  MentsignupComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
    // RouterModule.forRoot([{path:'login',component:LoginComponent}])
  ]
})
export class SharedModuleModule { }
