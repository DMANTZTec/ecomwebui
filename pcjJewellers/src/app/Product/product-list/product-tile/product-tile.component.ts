import { Component, OnInit } from '@angular/core';
import { Product } from '../../../data/hero';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
    
@Input() currentTileProduct:Product;
private Id;
private productName;
private productIdSelected;
private saveProductDetails;
private skuidtesting:any;

  constructor(private router: Router,private location:Location) { }

  ngOnInit() {
    console.log(this.currentTileProduct);
    this.Id=this.currentTileProduct.productId;
     }
getDetails(sku_id){
  this.skuidtesting=sku_id;
  console.log(sku_id);
  this.productIdSelected=sku_id;
 console.log("productimage was selected");
// this._productDetailNotifyService.notifyOther(this.productIdSelected); 
 console.log(this.productIdSelected);
  this.router.navigate(['/main/header/subheader/productDetail',sku_id]);
   
}
 createOrder(productdetils:Product,sku_id){
   console.log(productdetils);
   this.skuidtesting=sku_id;
   
   this.saveProductDetails=productdetils;
   console.log(this.saveProductDetails);
   console.log(sku_id);
   this.location.replaceState("/main/header/subheader/products/cart");
   //this.router.navigate(['/main/header/subheader/cart',sku_id]);

 }

updateOrder(){
  
}
}
