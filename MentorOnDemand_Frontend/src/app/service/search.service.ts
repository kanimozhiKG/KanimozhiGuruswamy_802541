import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor } from '../models/mentor';
import { Payment } from '../Models/payment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  path: String = "http://localhost:5092/api/User"
  constructor(private _client : HttpClient) { }
  public SearchMentor(skill): Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'/GetMentorBySkill/'+skill);
  }
  public Add(items:Payment):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',items);
  }
  
}
 