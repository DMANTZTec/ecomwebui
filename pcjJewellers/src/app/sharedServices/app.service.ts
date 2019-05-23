import { Injectable } from '@angular/core';
import { LoginDetails } from 'src/app/data/hero';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public userdetails:LoginDetails;
  constructor() {
     console.log(this.userdetails);
    if(sessionStorage){
      this.userdetails=this.userdetails;
    }
   }
}
