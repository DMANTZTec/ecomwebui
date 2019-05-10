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
  
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.currentTileProductDetail);
    this.Id=this.currentTileProductDetail;
    console.log(this.Id);
  }
 
  
    createOrder(productdetails:Product){
      console.log(productdetails);
      //this.productDetailToCart.emit(productdetils);
      this.router.navigate(['/main/header/subheader/cart']);
   
    }
   
}
