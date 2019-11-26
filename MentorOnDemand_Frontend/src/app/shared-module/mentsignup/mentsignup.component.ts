import { Component, OnInit } from '@angular/core';
import { Mentor } from 'src/app/models/mentor';
import { MentorService } from 'src/app/service/mentor.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './mentsignup.component.html',
  styleUrls: ['./mentsignup.component.css']
})
export class MentsignupComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  msg:string;

  constructor(private _service:MentorService) {
    this.item=new Mentor();
    this._service.GetAll().subscribe(k=>this.list=k)
   }

  ngOnInit() {
  }
public Add(){
  this._service.Add(this.item).subscribe(k=>this.msg=k)
}
public Search(){
  this._service.search(this.item.mentorId).subscribe(k=>this.item=k)
  console.log(this.item);
}
public Update()
{
  this._service.Update(this.item).subscribe(k=>k=this.msg)
}
public Delete(){
  this._service.Delete(this.item.mentorId).subscribe(k=>k=this.msg);
}}
