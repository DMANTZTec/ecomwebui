import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoginDetails, User } from 'src/app/data/hero';
import { reject } from 'q';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginDetails: LoginDetails[];
  private resetPassword:{email_id:string,password:string};
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
  postData(credentials,type){
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
    return new Promise((resolve,reject)=>{
      
      this._http.post(environment.apiUrl+type,credentials,httpOptions)
      .subscribe(res=>{
        resolve(res);
      },(err)=>{
        reject(err);
      });
      });
  
  }

  resetPasswordInit(resetPassword){
    console.log(resetPassword);
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
    return this._http.post(environment.resetPasswordUrl,resetPassword,httpOptions).pipe();
  }
  getLoginStatus(user:User){
    const httpOptions = {
      headers :new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'responseType':'text/plain',              
        'Access-Control-Allow-Origin':'http://localhost:8080',
        'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers':'Content-Type,application/json',
        'Authorization':'my-auth-token'
        //'Access-Control-Allow-Headers':'application/json'
      })
    }
    return this._http.post<LoginDetails>(environment.getUserUrl,user,httpOptions).pipe();
  }
 
  CheckEmail(email_id:string):Observable<any>{
    console.log(email_id);
    const httpOptions = {
      headers :new HttpHeaders({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'responseType':'text/plain',              
        'Access-Control-Allow-Origin':'http://localhost:8080',
        'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
        'Access-Control-Allow-Headers':'Content-Type,application/json',
        'Authorization':'my-auth-token'
        //'Access-Control-Allow-Headers':'application/json'
      })
    }
    return this._http.post(environment.checkUserEmailUrl,email_id,httpOptions).pipe();
  }
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
