import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Child,NavigationList, DropdownSvcParams, FilterCriteria, Product,FilterCriteriaObj } from '../../data/hero';
import { MessagesService } from '../../sharedServices/messages.service';
import { stringify } from '@angular/core/src/util';
import { EventEmitter } from 'events';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private _filterCriteriaParam: FilterCriteriaObj;
 
  $productDetails=new EventEmitter();
  products:Product[];
  constructor(private _http: HttpClient,private messageService:MessagesService) { }
 

  getProductList(inputParam:FilterCriteriaObj) {
    console.log(inputParam);
    this. _filterCriteriaParam = inputParam;
      
          const httpOptions = {
           
            headers :new HttpHeaders({
             'Content-Type':'application/json',
             'Accept':'application/json',
             'responseType':'text',              
             'Access-Control-Allow-Origin':'*',
             'Access-Control-Allow-Methods':"DELETE, POST, GET, OPTIONS",
             'Access-Control-Allow-Headers':'Content-Type,application/json',
             'Authorization':'my-auth-token'
            
            })
          };
   console.log("service call");
   console.log("result of product list is",this._http.post<Product[]>(environment.ProductListUrl,inputParam,httpOptions).pipe());
   return this._http.post<Product[]>(environment.ProductListUrl,inputParam,httpOptions).pipe();
  }
  productDetail(){
    console.log();
    
   // this.$productDetails.emit(this.products);
  }
 
}

