import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from '../Models/payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  path:string='http://localhost:5115/api/Payment';
  constructor(private _client:HttpClient) { }
  public GetAll():Observable<Payment[]>
  {
    return this._client.get<Payment[]>(this.path+'/GetAll');
  }
  public Add(item:Payment):Observable<string>
  {
    return this._client.post<string>(this.path+'/Add',item);
  }
  
  public Update(item:Payment){
    return this._client.put(this.path+'/Update',item);
  }
  public Delete(id:Number){
    return this._client.delete(this.path+'/Delete/'+id);
  }
  public Block(id:Number){
    return this._client.put(this.path+'/Block/'+id,id);
  }

}
  

