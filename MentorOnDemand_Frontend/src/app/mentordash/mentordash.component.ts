import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from '../models/mentor';
import { MentorService } from '../service/mentor.service';
import { Training } from '../Models/training';
import { TrainingService } from '../service/training.service';

@Component({
  selector: 'app-mentordash',
  templateUrl: './mentordash.component.html',
  styleUrls: ['./mentordash.component.css']
})
export class MentordashComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  msg:string;
  addclick;
  lists:Training[];
  items:Training;


  UserName:number;
  constructor(private router : Router,private _service:MentorService,private _trservice:TrainingService) {
    this.UserName = +localStorage.getItem('token');
    this.item=new Mentor();
    this._service.GetAll().subscribe(k=>this.list=k);
    this.item.mentorId=this.UserName;
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
public MentorCurTrainings(){
  this._trservice.GetTrainingBymentor(this.UserName).subscribe(k=>this.lists=k);
  // this.curtrainingclick=1;
  // this.updatepassclick=0;
}

  }

