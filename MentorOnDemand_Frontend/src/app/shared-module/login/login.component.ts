import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/user';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 [x: string]: any;
  email;
  pwd;
  userList:User[]=[];
  
  constructor(private http:HttpClient,private router:Router,private _service:LoginService) { }
  ngOnInit() {
  }
  public Login()
  {
    this._service.Login(this.email,this.pwd).subscribe(data=>{
      console.log(data)
      if(data.message=='User')
      {
        console.log("HAHAHAHHAHAHA");
        localStorage.setItem('token',data.token);
        this.router.navigate(['userdash'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Mentor')
      {
        localStorage.setItem('token',data.token);
        this.router.navigate(['mentordash'],{relativeTo:this._activatedRoute});
      }
      else if(data.message=='Admin')
      {
        localStorage.setItem('token',data.token);
        this.router.navigate(['admindash'],{relativeTo:this._activatedRoute});
      }
     
      else
      {
        console.log("Nothing found");
      }

    },
    err=>{
       console.log("subscribe err");
    });
  }
    
 

}