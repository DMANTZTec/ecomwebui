import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/data/hero';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.css']
})
export class ProductTileComponent implements OnInit {
@Input() currentTileProduct:Product;
  constructor() { }

  ngOnInit() {
    console.log(this.currentTileProduct);
  }

}
