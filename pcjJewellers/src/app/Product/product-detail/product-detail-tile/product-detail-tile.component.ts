import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Product } from '../../../data/hero';
import { Router } from '@angular/router';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductDetailNotifyService } from '../../../sharedServices/product-detail-notify.service';




@Component({
  selector: 'app-product-detail-tile',
  templateUrl: './product-detail-tile.component.html',
  styleUrls: ['./product-detail-tile.component.css']
})
export class ProductDetailTileComponent implements OnInit {
  @Input() currentTileProductDetail:Product;
  @Input() currentTileProduct:Product;
 // @Output() clicked=new EventEmitter<number>(); 
  @Output() productDetailToCart = new EventEmitter();
  private Id;
  private productIdSelected;
  private saveProductDetails;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.currentTileProductDetail);
    this.Id=this.currentTileProductDetail;
    console.log(this.Id);
  }
 
  getDetails(sku_id){
    console.log(sku_id);
    this.productIdSelected=sku_id;
   console.log("productimage was selected");
  // this._productDetailNotifyService.notifyOther(this.productIdSelected); 
   console.log(this.productIdSelected);
    this.router.navigate(['/main/header/subheader/productDetail',sku_id]);
  }
  createOrder(productdetils:Product,sku_id){
    console.log(productdetils);
    this.saveProductDetails=productdetils;
    console.log(this.saveProductDetails);
    console.log(sku_id);
    this.router.navigate(['/main/header/subheader/cart',sku_id]);
 
  }
   /* createOrder(productdetails:Product){
      console.log(productdetails);
      //this.productDetailToCart.emit(productdetils);
      this.router.navigate(['/main/header/subheader/cart']);
   
    }*/
   
}
