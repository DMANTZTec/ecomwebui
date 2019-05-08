

	export class NavigationList{
		catalogName: string;
		catalogId: number;
		catalogDesc: string;
		catalogLevel: number;
		parentCatalogId: number;
		childCatalog:any[];
		storeId:number;
	}
	
	
	export class Child{
		catalogName: string;
		catalogId: number;
		catalogDesc: string;
		catalogLevel: number;
		parentCatalogId: number;
		childCatelog:any[];
	}
	export class User {
		email_id: string;
		password: string;
		firstName: string;
		lastName: string;
	}
	export class Response{
		response:string;
	}
	export class DropdownSvcParams{
		startLevel:number;
		endLevel:number;
		storeId:number;
		parentCatalogId:number;
	  }

	  export class Product {
		productId:number;
		productManufacturerName:string;
		brandName:string;
		productSkus:Skus;

	  }
	  
	  export class Skus{
		  sku:number;
		  options:Options;
		  productSkus:Options;
		  image:string;
		  price:number;
		  productSkuCode:string;
	  }
	  export class Options{
		  optionName:string;
		  optionValue:string;
		  //options:any[];
	  }
    export class FilterCriteria{
		catalog_id:number;
		filterEnabled:string;
	}
	export class FilterCriteriaObj{
		filterCriteria:FilterCriteria;
	} 
	export class Order{
		customerId:string; 
		orderItemObj:any[];
	}
	export class OrderItem{
		order_id:number;
		productSku:string;
		mrpPrice:string;
		price:number;
		discountApplied:string;
		quantity:string;
		giftWrapped:string;
		productId:number;
		productName:string;
	   // orderItemObj:any[];
	}
	export class CreateOrderResponse{
		status:string;
		orderId:number;
	}
	export class UpdateOrderResponse{
		totalQuantity:number ;
		status:string ;
	}
