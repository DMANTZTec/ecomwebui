import { Component, OnInit } from '@angular/core';
import { FilterCriteria, Product, Skus } from 'src/app/data/hero';
import { error } from '@angular/compiler/src/util';
import { ProductListService } from 'src/app/Product/product-list/productListService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 private productListService;
 private filterEnabled="sajana";
 Product:Product[]=[];

  constructor(private _productListService:ProductListService) { }

  ngOnInit() {
    const inputParam=new FilterCriteria();
    inputParam.filterEnabled=this.filterEnabled;
    console.log(inputParam);
    this._productListService.getProductList(inputParam).subscribe(
      (products: Product[])=>{
        this.Product = products;
        console.log("products list: ",products);
      },
      error=>console.log(error)
    );
  }
  
}


 /* getDataFromService(){
    console.log("this is getdatafrom service");
    const inputParam = new FilterCriteria();
    inputParam.filterEnabled=this.filterEnabled;
    console.log(inputParam);
    this._productListService.getProductList(inputParam).subscribe(
      data=>{
        this.Product=<any>data;
        console.log("product list is",this.Product);

      },
      error=>console.log(error)
    );
  }
  /*getproductlistbyId(){
    //var dropdown=(<HTMLCollectionOf<Element>>document.getElementsByClassName('list-inline category-section')).style.display = 'block';
    //(<HTMLElement>document.querySelector('list-inline category-section')).style.display = 'none';
    document.getElementById("rings").style.display='block';
  
    this._productListService.getProductList()
    .subscribe(
      data => {
        this.RingsList = <Hero[]>data;
        console.log( 'this.RingsList', this.RingsList);
       
  
      },
      error => console.error(error)
    );*/

