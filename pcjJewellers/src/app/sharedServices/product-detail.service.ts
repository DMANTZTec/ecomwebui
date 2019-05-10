import { Injectable } from '@angular/core';
import { Skus, Product } from '../../app/data/hero';
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
  
}
}
