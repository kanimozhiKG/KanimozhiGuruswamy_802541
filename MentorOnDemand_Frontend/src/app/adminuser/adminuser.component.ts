import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {

  item:User;
  list:User[];
  msg:string;
  constructor(private _service:UserService) { 
    this.item=new User();
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
