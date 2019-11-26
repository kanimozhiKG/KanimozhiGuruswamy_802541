import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { UserService } from '../service/user.service';
import { TrainingService } from '../service/training.service';
import { Training } from '../Models/training';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  item:User;
  list:User[];
  msg:string;
  addclick;
  lists:Training[];
  items:Training;

  UserName:number;
  constructor(private router : Router,private _service:UserService,private _trservice:TrainingService) {
    this.UserName = +localStorage.getItem('token');
    this.item=new User();
    this._service.GetAll().subscribe(k=>this.list=k);
    this.item.userId=this.UserName;
    this.items=new Training();
   
   }

  ngOnInit() {
    if(localStorage.getItem('token')==null)
    {
      this.router.navigate(['login']);
    }
 
 
 }
 logout(){
   localStorage.removeItem('token');
   this.router.navigate(['login']);
 
   }
   public add()
  {
    this.addclick=1;
  }
   public Update()
{
 
  this._service.Update(this.item).subscribe(k=>k=this.msg)
}
public UserCurTrainings(){
  this._trservice.GetTrainingByUser(this.UserName).subscribe(k=>this.lists=k);
  // this.curtrainingclick=1;
  // this.updatepassclick=0;
}


  }

