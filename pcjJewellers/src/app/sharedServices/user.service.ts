import { Injectable } from '@angular/core';

import { User } from 'src/app/data/hero';
import { config } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
//import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }


    register(user:User) {
        console.log(user);
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
          };
          const headers=new HttpHeaders().set('Content-Type','application/x-www-formurlencoded');
         
       // return this.http.post<user>(environment.user_url).pipe();
       // return this.http.post("http://192.168.0.194:8080/register",user,httpOptions).pipe();
      // console.log(this.http.get<User>("http://localhost:8088/register",httpOptions));
       //return this.http.get("http://192.168.100.13:8080/EcommerceApp/viewOrder?order_id=480",httpOptions);
       // return this.http.post<User>("http://localhost:3000/users", user, httpOptions);
        //return this.http.post<User>("http://192.168.0.123:8080/register", user, httpOptions) .pipe();
      // return this.http.post("http://192.168.0.194:8080/register", user, {headers: headers, observe: "response"});
      console.log(this.http.post("http://localhost:8089/register", user, httpOptions) .pipe());
     return this.http.post<User[]>("http://localhost:8089/register", user, httpOptions) .pipe();
    }
   
    
}
