import { Component, OnInit } from '@angular/core';
import { FilterCriteria, Product, Skus, FilterCriteriaObj } from 'src/app/data/hero';
import { error } from '@angular/compiler/src/util';
import { ProductListService } from 'src/app/Product/product-list/productListService';
import { Subscription } from 'rxjs/internal/Subscription';
import { DropdownNotifyService } from 'src/app/sharedServices/dropdown-notify.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  categoryidselected: any;
  
  _subscription: Subscription;
 private productListService;
 private catalog_id=0;
 private filterEnabled="sajana";
 Product:Product[]=[];

  constructor(private _productListService:ProductListService,private _dropdownNotifyService:DropdownNotifyService) { }

  ngOnInit() {
    const inputParam1=new FilterCriteria();
    inputParam1.catalog_id=this.catalog_id;
    inputParam1.filterEnabled=this.filterEnabled;
    const inputParam=new FilterCriteriaObj();
    inputParam.filterCriteria=inputParam1;
    console.log(inputParam);
    this._productListService.getProductList(inputParam).subscribe(
      (products: Product[])=>{
        this.Product = products;
        console.log("products list: ",products);
      },
      error=>console.log(error)
    );

    this._subscription = this._dropdownNotifyService.notifyObservable.subscribe(
      data => {
        console.log(data);
       // this.loadcontent = false;
        if (this.categoryidselected !== data) {
          this.categoryidselected = data;
          console.log(this.categoryidselected);
        }
      });
  }
  
}


 