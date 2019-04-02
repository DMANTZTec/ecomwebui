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
		id: number;
		name: string;
	  }