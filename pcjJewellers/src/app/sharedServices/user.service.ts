import { Injectable } from '@angular/core';

import { User } from '../../app/data/hero';
import { config } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';


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
              'Access-Control-Allow-Origin':'http://localhost:8080',
              'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
              'Access-Control-Allow-Headers':'Content-Type,application/json',
              'Authorization':'my-auth-token'
             
            })
          };
          const headers=new HttpHeaders().set('Content-Type','application/x-www-formurlencoded');
      console.log(this.http.post(environment.Registration_Url, user, httpOptions) .pipe());
     return this.http.post<User[]>(environment.Registration_Url, user, httpOptions) .pipe();
    }
   
    
}
