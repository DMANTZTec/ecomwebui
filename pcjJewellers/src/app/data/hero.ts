export class Hero {
	
		popularringstypes:any[];
		bypricerange:any[];
		bymetalandstones:any[];
	
		
		/*dailywear:string;
		engagement:string;
		couplebrands:string;*/      
		
		
	}
	export class EarRings 
	{
		popularearringstypes:any[];
		bypricerange:any[];
		bymetalandstones:any[];
	}
	
	export class NewArrivals
	{
		popularpendentstypes:any[];
		bypricerange:any[];
		bymetalandstones:any[];
	
	}
	
	export class GoldCoins{
		byweight:any[];
		bydesign:any[]
	
	}
	export class NavigationList{
		catalogName: string;
		catalogId: number;
		catalogDesc: string;
		catalogLevel: number;
		parentCatalogId: number;
		childCatalog:any[];
		storeId:number;
	}
	
	export class Gold{
		catalogName: string;
		catalogId: number;
		catalogDesc: string;
		catalogLevel: number;
		parentCatalogId: number;
		childCatalog:Child;
	
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
		  options:any[];
	  }
    export class FilterCriteria{
		filterEnabled:string;
	}