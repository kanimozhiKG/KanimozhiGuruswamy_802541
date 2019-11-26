import { Component, OnInit } from '@angular/core';
import { Mentor } from '../models/mentor';
import { MentorService } from '../service/mentor.service';

@Component({
  selector: 'app-adminmentor',
  templateUrl: './adminmentor.component.html',
  styleUrls: ['./adminmentor.component.css']
})
export class AdminmentorComponent implements OnInit {

  item:Mentor;
  list:Mentor[];
  msg:string;
  constructor(private _service:MentorService) { 
    this.item=new Mentor();
    this._service.GetAll().subscribe(k=>this.list=k)
   
  }

  ngOnInit() {
  }
  public Delete(Id:number){
    this._service.Delete(Id).subscribe(k=>k=this.msg)
  }
  public Block(Id:number){
    this._service.Block(Id).subscribe(k=>k=this.msg)
  }
  public UnBlock(Id:number){
    this._service.UnBlock(Id).subscribe(k=>k=this.msg)
  }

}
