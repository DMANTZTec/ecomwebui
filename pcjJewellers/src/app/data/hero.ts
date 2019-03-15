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
export interface NavigationList{
	catalog_nm: string;
    catalog_id: number;
    catalog_desc: string;
    catalog_level: number;
    parent_catalog_id: number;
    child_catalog:NavigationList[];
}

export class Gold{
	catalog_nm: string;
    catalog_id: number;
    catalog_desc: string;
    catalog_level: number;
    parent_catalog_id: number;
    child_catalog:Child;

}
export class Child{
	catalog_nm: string;
	catalog_id: number;
	catalog_desc: string;
	catalog_level: number;
	parent_catalog_id: number;
	child_catelog:any[];
}