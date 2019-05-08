import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/hero';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
   
    
@Input() currentTileProduct:Product;
private Id;
private productName;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.currentTileProduct);
    this.Id=this.currentTileProduct.productId;
     }
getDetails(sku_id){
  console.log(sku_id);
 console.log("productimage was selected"); 
  this.router.navigate(['/main/header/subheader/productDetail',sku_id]);
   
}
createOrder(){
  
  this.router.navigate(['/main/header/subheader/cart']);
}
updateOrder(){
  
}
}
