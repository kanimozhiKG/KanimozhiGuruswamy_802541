import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';
import { HttpClient } from '@angular/common/http';
import { Mentor } from '../models/mentor';
import { Payment } from '../Models/payment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  item:Mentor;
  list:Mentor[];
  skill;
  items:Payment;
  lists:Payment[];



  constructor(private _service : SearchService, private http: HttpClient) {
    
   }
 
  ngOnInit() {
  }
  
  
  public Search()
  {
    this._service.SearchMentor(this.skill).subscribe(k=>{this.list=k;
    console.log(k);
    });

}

}
