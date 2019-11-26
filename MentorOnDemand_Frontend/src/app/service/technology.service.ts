import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Technology } from '../Models/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  path:string='http://localhost:5109/api/Technology';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Technology[]>
  {
    return this._client.get<Technology[]>(this.path+'/GetAll');
  }
  public Add(item:Technology):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',item);
  }
  
  public Update(item:Technology){
    return this._client.put(this.path+'/Update',item);
  }
  public Delete(id:Number){
    return this._client.delete(this.path+'/Delete/'+id);
  }
  public Block(id:Number){
    return this._client.put(this.path+'/Block/'+id,id);
  }

}