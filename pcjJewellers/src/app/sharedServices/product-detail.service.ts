import { Injectable } from '@angular/core';
import { Skus, Product } from 'src/app/data/hero';
import { Input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  
  @Input() currentTileProduct:Product;
  private id;
  constructor(private _http: HttpClient) { }
  ngOnInIt(){
    console.log(this.currentTileProduct);
    this.id=this.currentTileProduct.productId;
  }
  getProductDetail(id){
    console.log(this.id);
    console.log("productimage was selected"); 
    return this._http.get<any>(environment.productDetailListUrl).pipe();
  /*  const httpOptions = {
      
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
    // return this._http.get<any>(environment.productDetailListUrl).pipe();

    // console.log("result of product list is",this._http.post<Product[]>("http://localhost:8089/ec/catalog",httpBody,httpOptions).pipe());
     //return this._http.post<Product[]>("http://localhost:8089/ec/catalog",httpBody,httpOptions).pipe();
  }*/
}
}
