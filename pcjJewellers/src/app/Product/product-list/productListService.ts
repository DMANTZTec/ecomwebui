import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero, Gold,Child,NavigationList, DropdownSvcParams, FilterCriteria, Product } from 'src/app/data/hero';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private _filterCriteriaParam: FilterCriteria;
  
  constructor(private _http: HttpClient) { }
 

  getProductList(inputParam:FilterCriteria) {
    console.log(inputParam);
    this. _filterCriteriaParam = inputParam;
    const httpBody = {
      'filterEnabled':this._filterCriteriaParam.filterEnabled
      };
      console.log(httpBody);
      
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
  // console.log("productlist",this._http.get<Product[]>(environment.ProductListUrl).pipe());
   // return this._http.get<Product[]>(environment.ProductListUrl).pipe();
   console.log("service call");
   console.log("result of product list is",this._http.post<Product[]>("http://localhost:8089/ec/catalog",httpBody,httpOptions).pipe());
   return this._http.post<Product[]>("http://localhost:8089/ec/catalog",httpBody,httpOptions).pipe();
  }
}

