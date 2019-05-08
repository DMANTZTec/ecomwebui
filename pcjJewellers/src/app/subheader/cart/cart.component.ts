import { Component, OnInit } from '@angular/core';
import { Product, Order, OrderItem, CreateOrderResponse } from 'src/app/data/hero';
import { ProductListService } from 'src/app/Product/product-list/productListService';
import { OrderService } from 'src/app/sharedServices/order.service';
import { Router } from '@angular/router';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  UserVariable:CreateOrderResponse;

  cartProducts: Product[];
	showDataNotFound = true;
   // private orderitem:OrderItem;
	// Not Found Message
	messageTitle = 'No Products Found in Cart';
	messageDescription = 'Please, Add Products to Cart';
	 //orderItemList:OrderItem[];
	 private totalAmt:DoubleRange;
	 private totalQty:number;
	// OrderItem:OrderItem[]=[];
	 order:Order;
	 orderVar:any;
	 private response={};
	 private orderItem;
   public orderitems=[];
	 private currentOrder:Order;
	 private existItem:OrderItem;
	constructor(private productListService:ProductListService,private orderservice:OrderService,private router: Router,) {}

	ngOnInit() {
    this.createOrder("102",this.orderItem);
  }
  createOrder(customerId:string,orderItem:OrderItem){
	//	this.getCartProduct();
	var inputParam=new Order();
	this.orderItem=new OrderItem();
	//inputParam.orderItemObj[0]=this.orderItem;
	inputParam.customerId="sajana";
	this.orderItem.discountApplied="0";
	this.orderItem.giftWrapped="yes";
	this.orderItem.mrpPrice="10.0";
	this.orderItem.price=10;
	this.orderItem.productId=4;
	this.orderItem.productName="redmi";
	this.orderItem.productSku="1234567";
	this.orderItem.quantity="2";
	this.orderitems.push(this.orderItem);
	inputParam.orderItemObj=this.orderitems;
	console.log(inputParam);
	console.log("this is addtocart");
    this.orderservice.createOrder(inputParam).subscribe(

      data=>{
        this.UserVariable=<any>data;
        console.log("data is",this.UserVariable);
        console.log("asdfghjkl");
        console.log(this.UserVariable.status);
    if(this.UserVariable.status="item added"){ 
     // console.log("the response data is",this.UserVariable);
      console.log("item is added to the cart");
      this.router.navigate(['/main/header/subheader/products']);
    }else{
      error=>console.log(error);
    }
		console.log("abcd");
		
       // console.log("orderitem list: ",data);
      },
      error=>console.log(error)
	);
}

  addItem(orderItem:OrderItem){
    if (this.currentOrder == null) {
      this.createOrder("102",this.orderItem);
      this.currentOrder=new Order();
      
    }
    }


	addItemOrderToBE(){
		var inputParam=new Order();
		this.orderItem=new OrderItem();
       // var inputParam=new OrderItem();
		this.orderItem.discountApplied="0";
		this.orderItem.giftWrapped="yes";
		this.orderItem.mrpPrice="10.0";
		this.orderItem.price=10;
		this.orderItem.productId=4;
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
}
/*	addItem(orderitem){
	this.orderItemList	
//	if (orderItemList.) {
	//	this.orderItemList.add(orderitem);
	   console.log(this.orderItemList);
		this.calculateTotals();
	   this.totalQuantity();
	   this.cartTotal();
//	}	
	//else{
       console.log(this.orderItemList);
	   this.calculateTotals();
	   this.totalQuantity();
	   this.cartTotal();
	//}
	}
	calculateTotals(){
		
	}
	totalQuantity(){
		
		console.log(this.totalQuantity);
		

	}
	cartTotal(){

	}
	}

/*	removeCartProduct(product: Product) {
		this.productService.removeLocalCartProduct(product);

		// Recalling
		this.getCartProduct();
	}

	getCartProduct() {
		this.cartProducts = this.productListService.getLocalCartProducts();
	}*/




