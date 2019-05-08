import { Injectable } from '@angular/core';
import { OrderItem, Order } from 'src/app/data/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private _http: HttpClient) { }
 
  createOrder(order:Order):Observable<any>{
    console.log(order);
    const httpOptions = {
      headers :new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'responseType':'text',              
        'Access-Control-Allow-Origin':'http://localhost:8089',
        'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers':'Content-Type,application/json',
        'Authorization':'my-auth-token'
      
        
      })
    };
     return this._http.post<any>('http://localhost:8089/EcommerceApp/createOrder2',order,httpOptions).pipe();
  
  }
 addItemOrderToBE(updateOrder:Order):Observable<any>{
   console.log(updateOrder);
   const httpOptions = {
    headers :new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'responseType':'text',              
      'Access-Control-Allow-Origin':'http://localhost:8089',
      'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
      'Access-Control-Allow-Headers':'Content-Type,application/json',
      'Authorization':'my-auth-token'
    
      
    })
  };
  return this._http.post<any>('http://localhost:8089/EcommerceApp//updateOrder',updateOrder,httpOptions).pipe();

 }
}
