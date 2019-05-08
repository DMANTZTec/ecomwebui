import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { config } from 'rxjs';
import { User } from 'src/app/data/hero';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(email_id: string, password: string) {
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
        return this.http.post<User>("http://localhost:8089/getUser/emailId", { email_id:email_id, password: password },httpOptions)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.email_id) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser',user.email_id);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}