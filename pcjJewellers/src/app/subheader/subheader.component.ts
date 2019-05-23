import { Component, OnInit, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Product, OrderItem } from '../../app/data/hero';
//import { count } from 'rxjs/operators';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.css']
})
export class SubheaderComponent implements OnInit {

  
  loginLinks=[];
 
  constructor() { 
    this.getLoginLinks();
  }

  ngOnInit() {
   
    
  }
getLoginLinks(){
  {
    this.loginLinks = [
      { label: 'login', link: 'login' },
      { label: 'register', link: 'register' },
      { label: 'favorites', link: 'favorites'},
     // { label:'cart',link:'cart'}
     // { label: 'cart', link: 'cart'},
     { label: 'userProfile', link:'userProfile'}
       ];
  }
  
  


}

}
