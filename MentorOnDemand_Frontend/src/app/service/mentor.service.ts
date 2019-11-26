import { Injectable } from '@angular/core';
import { Mentor } from '../models/mentor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MentorService {

  path:string='http://localhost:5092/api/Mentor';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Mentor[]>
  {
    return this._client.get<Mentor[]>(this.path+'/GetAllMentor');
  }
  public Add(item:Mentor):Observable<string>
  {
    return this._client.post<string>(this.path+'/AddUser',item);
  }
  public search(id:number):Observable<Mentor>{
    return this._client.get<Mentor>(this.path+'/GetMentorById/'+id);
  }
  public Update(item:Mentor){
    return this._client.put(this.path+'/UpdateMentor',item);
  }
  public Delete(id:Number){
    return this._client.delete(this.path+'/Delete/'+id);
  }
  public Block(id:Number){
    return this._client.put(this.path+'/BlockMentor/'+id,id);
  }
  public UnBlock(id:Number){
    return this._client.put(this.path+'/UnBlockMentor/'+id,id);
  }

}
