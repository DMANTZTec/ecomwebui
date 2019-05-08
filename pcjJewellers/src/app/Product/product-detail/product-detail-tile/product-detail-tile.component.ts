import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Product } from 'src/app/data/hero';
import { Router } from '@angular/router';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';




@Component({
  selector: 'app-product-detail-tile',
  templateUrl: './product-detail-tile.component.html',
  styleUrls: ['./product-detail-tile.component.css']
})
export class ProductDetailTileComponent implements OnInit {
  @Input() currentTileProductDetail:Product[];
 
  @Output() clicked=new EventEmitter<number>(); 
 
  private Id;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.currentTileProductDetail);
    this.Id=this.currentTileProductDetail;
    console.log(this.Id);
  }
  onClick(id){
    this.clicked.emit(this.Id);
    }
}
