import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../Models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  path:string='http://localhost:5114/api/Training';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Training[]>
  {
    return this._client.get<Training[]>(this.path+'/GetAll');
  }
  public Add(item:Training):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',item);
  }
  // public search(id:number):Observable<Training>{
  //   return this._client.get<Training>(this.path+'/GetById/'+id);
  // }
  public Update(item:Training){
    return this._client.put(this.path+'/Update',item);
  }
  public GetTrainingByUser(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'/GetTrainingByUser/'+id);
  }
  public GetTrainingBymentor(id :number):Observable<Training[]>
  { 
      return this._client.get<Training[]>(this.path+'/GetTrainingByMentor/'+id);
  }
  // public Delete(id:Number){
  //   return this._client.delete(this.path+'/Delete/'+id);
  // }
  // public Block(id:Number){
  //   return this._client.put(this.path+'/BlockUser/'+id,id);
  // }

}
