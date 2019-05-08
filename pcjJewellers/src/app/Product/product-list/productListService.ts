import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Child,NavigationList, DropdownSvcParams, FilterCriteria, Product,FilterCriteriaObj } from 'src/app/data/hero';
import { MessagesService } from 'src/app/sharedServices/messages.service';
import { stringify } from '@angular/core/src/util';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  private _filterCriteriaParam: FilterCriteriaObj;
  navbarCartCount = 0;
	navbarFavProdCount = 0;
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
  // console.log("productlist",this._http.get<Product[]>(environment.ProductListUrl).pipe());
   // return this._http.get<Product[]>(environment.ProductListUrl).pipe();
   console.log("service call");
   console.log("result of product list is",this._http.post<Product[]>("http://localhost:8089/ec/catalog",inputParam,httpOptions).pipe());
   return this._http.post<Product[]>("http://localhost:8089/ec/catalog",inputParam,httpOptions).pipe();
  }
 /* addToCart(data: Product): void {
		let a: Product[];

		a = localStorage.getItem('avct_item') || [];
    console.log(a);
   // a.push(data);
    
		this.messageService.wait('Adding Product to Cart', 'Product Adding to the cart');
		setTimeout(() => {
			localStorage.setItem('avct_item', stringify(a));
			this.calculateLocalCartProdCounts();
		}, 500);
	}
  getLocalCartProducts(): Product[]{
    const products: Product[] = localStorage.getItem('avct_item') || [];
    
        return products;
    
  }
  calculateLocalCartProdCounts() {
   // this.navbarCartCount = this.getLocalCartProducts().length;
    console.log(this.navbarCartCount);
	}*/
}

