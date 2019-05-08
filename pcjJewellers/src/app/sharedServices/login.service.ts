import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http:HttpClient) { }
/*  getLoginStatus(logindata){
    console.log("result from backend");
    const httpOptions = {
      headers :new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'responseType':'text',              
        'Access-Control-Allow-Origin':'http://localhost:8089',
        'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers':'Content-Type,application/json',
        'Authorization':'my-auth-token'
        //'Access-Control-Allow-Headers':'application/json'
      })
    }
    //console.log( this._http.post('http://192.168.0.194:8080/register',logindata,httpOptions).pipe());
    //return this._http.post('http://192.168.0.194:8080/register',logindata,httpOptions).pipe();
    //console.log(this._http.get('http://localhost:3000/users'));
    return this._http.get('http://localhost:8089/getUser/emailId');
  }*/
}
