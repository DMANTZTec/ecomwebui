import { Component, OnInit, Input } from '@angular/core';
import { Product, Order, OrderItem, CreateOrderResponse, FilterCriteriaObj, FilterCriteria } from '../../data/hero';
import { ProductListService } from '../../Product/product-list/productListService';
import { OrderService } from '../../sharedServices/order.service';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';
import { ProductDetailComponent } from '../../Product/product-detail/product-detail.component';
import { ActivatedRoute } from '@angular/router';
import { Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	@Output() cartValueChanged = new EventEmitter();
	private Counter = 0;
	@Input() skuidtesting:any;
	@Input() savecurrentTileProduct:Product;
  	UserVariable:CreateOrderResponse;
	  private Id;
	  public itemsaddedcount=0;
	public cartList=[];
	private cartLength:number;
	order:Order;
	private id;
	private response={};
	private orderItem;
    public orderitems=[];
	private currentOrder:Order;
	private existItem:OrderItem;
	private currentchildDetail:any;
    private catalog_id=0;
	private filterEnabled="sajana";
	private ProductsList:Product[];
	public currentproductdetails:Product[];
	private totalquantity:number=0;
	
	constructor(private productListService:ProductListService,private route:ActivatedRoute,private orderservice:OrderService,private router: Router,) {}

	ngOnInit() {
		console.log("skuidtesting",this.skuidtesting);
		
		console.log(this.savecurrentTileProduct);	
		console.log(this.currentproductdetails);		
		//this.createOrder("102",this.orderItem);
		this.additem(this.orderItem);
	}
	createOrder(customerId:string,orderItem:OrderItem){
		this.newMethod();
	}
	newMethod(){
		this.route.params.subscribe(params=>{
		this.id=+params['id'];
		console.log(this.id);
		const inputParam1=new FilterCriteria();
		inputParam1.catalog_id=this.catalog_id;
		inputParam1.filterEnabled=this.filterEnabled;
		const inputParam=new FilterCriteriaObj();
		inputParam.filterCriteria=inputParam1;
		console.log(inputParam);
		this.productListService.getProductList(inputParam).subscribe(
			(products: any)=>{
				this.ProductsList = products.products;
				console.log("products list: ",this.ProductsList);
				this.currentproductdetails=this.ProductsList.filter(product =>product.productSkus.find(item=>item.sku==this.id));
				console.log(this.currentproductdetails);
				var inputParam=new Order();
				this.orderItem=new OrderItem();
				inputParam.customerId="sajana";
				this.orderItem.discountApplied="0";
				this.orderItem.giftWrapped="yes";
				this.orderItem.mrpPrice="10.0";
				this.orderItem.price=this.currentproductdetails[0].productSkus[0].price;
				this.orderItem.productId=this.currentproductdetails[0].productId;
				this.orderItem.productName=this.currentproductdetails[0].productName;
				this.orderItem.productSku=this.currentproductdetails[0].productSkus[0].sku;
				this.orderItem.quantity="2";
				this.orderitems.push(this.orderItem);
				inputParam.orderItemObj=this.orderitems;
				console.log(inputParam);
				this.cartList.push(inputParam);
				//this.cartList.length=this.cartList.length+1;
				console.log(this.cartList);
				this.cartLength=this.cartList.length;
				console.log(this.cartLength);
				console.log("this is addtocart");
				this.orderservice.createOrder(inputParam).subscribe(
					data=>{
						this.UserVariable=<any>data;
						console.log("data is",this.UserVariable);
						console.log(this.UserVariable.status);
						if(this.UserVariable.status="item added"){ 
							console.log("item is added to the cart");
							this.itemsaddedcount=this.itemsaddedcount+1;
							console.log("item count:",this.itemsaddedcount);							
						}
						else{
							error=>console.log(error);
						}
					},
					error=>console.log(error)
				);
			},
			error=>console.log(error)
		);
		}
		);	
		console.log("item count:",this.itemsaddedcount);							
		
	}
	

	 doesItemExist(orderItem:OrderItem){
    if(this.cartList.length>0){
		console.log("item exist");
		return true;
	}
	else{
		console.log("item doesn't exist");
		return false;
	}
	 }
	additem(orderItem:OrderItem){
		this.cartList=new Array();
		this.route.params.subscribe(params=>{
			this.id=+params['id'];
			console.log(this.id);
			const inputParam1=new FilterCriteria();
			inputParam1.catalog_id=this.catalog_id;
			inputParam1.filterEnabled=this.filterEnabled;
			const inputParam=new FilterCriteriaObj();
			inputParam.filterCriteria=inputParam1;
			console.log(inputParam);
			this.productListService.getProductList(inputParam).subscribe(
				(products: any)=>{
					this.ProductsList = products.products;
					console.log("products list: ",this.ProductsList);
					this.currentproductdetails=this.ProductsList.filter(product =>product.productSkus.find(item=>item.sku==this.id));
					console.log(this.currentproductdetails);
				});
			});

			if(this.cartList.length==0){
				//create new order to cartList and increase the list length
				//else update
				this.createOrder("102",this.orderItem);
				//this.cartList.length=this.cartList.length+1;
				console.log(this.cartList);
				//console.log(this.cartList.slice(0,1));
			}
			else{
				
			}



		/*if (this.cartList.length>0) {
			console.log("object exists update the order");
			//if object exist with customerid,productsku then update quantity
			//else add another item to that customer
			console.log("item exist")
			console.log(this.cartList.find(item=>item.sku));
			
			this.calculateTotals();
			this.totalQuantity();
			this.cartTotal();
		}
		
		else{
			console.log("order does not exist add the item");
			this.createOrder("102",this.orderItem);
			this.cartList.length++;
			console.log(this.cartList.length);
			//var skuid=this.cartList.find(item=>item.productSku==this.currentproductdetails[0].productSkus[0].sku);
			//this.currentproductdetails=this.ProductsList.filter(product =>product.productSkus.find(item=>item.sku==this.id));
			//console.log(this.currentproductdetails);
			this.calculateTotals();
			this.totalQuantity();
			this.cartTotal();
		}*/

	}
	calculateTotals(){

	}
	totalQuantity(){
		// for(this.cartList){

		// }

	}
	cartTotal(){

	}
 
}

	/*addItemOrderToBE(){
		var inputParam=new Order();
		this.orderItem=new OrderItem();
       // var inputParam=new OrderItem();
		this.orderItem.discountApplied="0";
		this.orderItem.giftWrapped="yes";
		this.orderItem.mrpPrice="10.0";
		this.orderItem.price=10;
		this.orderItem.productId=this.currentproductdetails[0].productId;
		this.orderItem.productName="redmi";
		this.orderItem.productSku="1234567";
		this.orderItem.quantity="2";
		this.orderitems.push(this.orderItem);
		console.log(inputParam);
		console.log("this is addtocart");
		this.orderservice.addItemOrderToBE(inputParam).subscribe(
			data=>{
				this.response=data;
				console.log(this.response);
			},
			error=>console.log(error)
		);
	}
	
}*/




