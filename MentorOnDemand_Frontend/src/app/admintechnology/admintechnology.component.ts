import { Component, OnInit } from '@angular/core';
import { Technology } from '../Models/technology';
import { TechnologyService } from '../service/technology.service';

@Component({
  selector: 'app-admintechnology',
  templateUrl: './admintechnology.component.html',
  styleUrls: ['./admintechnology.component.css']
})
export class AdmintechnologyComponent implements OnInit {

  item:Technology;
  list:Technology[];
  msg:string;
  addclick;
  constructor(private _service:TechnologyService) { 
    this.item=new Technology();
    this._service.GetAll().subscribe(k=>this.list=k)
   
  }
  ngOnInit() {
  }

  public add()
  {
    this.addclick=1;
  }
public AddTechnology(){
  this._service.Add(this.item).subscribe(k=>this.msg=k)
}
  
}
