import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from 'src/app/sharedServices/product-detail.service';
import { Input } from '@angular/core';
import { Product, Skus, FilterCriteria, FilterCriteriaObj } from 'src/app/data/hero';
import { Router ,NavigationExtras} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductListService } from 'src/app/Product/product-list/productListService';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() currentTileProduct:Product;
  private id;
  Skus:Skus[]=[];
  private sku=2;
  private productListService;
  private catalog_id=0;
  private filterEnabled="sajana";
  private ProductsList:Product[];
  public currentproductdetails:Product[]=[];
  constructor(private _productListService:ProductListService,private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe(params=>{
    this.id=+params['id'];
    const inputParam1=new FilterCriteria();
    inputParam1.catalog_id=this.catalog_id;
    inputParam1.filterEnabled=this.filterEnabled;
    const inputParam=new FilterCriteriaObj();
    inputParam.filterCriteria=inputParam1;
    console.log(inputParam);
    this._productListService.getProductList(inputParam).subscribe(
      (products: any)=>{
        this.ProductsList = products.products;
        console.log("products list: ",this.ProductsList);
      
        this.currentproductdetails=this.ProductsList.filter(product =>product.productSkus.find(item=>item.sku==this.id));
        console.log(this.currentproductdetails);
      },
      error=>console.log(error)
    );
    }
    );
  }
  OnClicked(){
    this.currentproductdetails=this.ProductsList.filter(product =>product.productSkus.find(item=>item.sku==this.id));
    console.log(this.currentproductdetails);
  }
  

}
