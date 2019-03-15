import { Component, OnInit, Input } from '@angular/core';
import  {DropdownsService} from '../dropdowns.service';
import {DropdownsComponent} from '../dropdowns.component';
import { Hero,EarRings, NewArrivals,Gold ,Child,NavigationList} from '../../../data/hero';



@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
 //@Input() NavigationList:any[];
 NavigationList: NavigationList[] = [];
 public result;
 public subitem;
 
  constructor(private _dropdownsService:DropdownsService) { }
  
  ngOnInit() {
    console.log("gold");
    this.getsubitems();

    this.result = this.NavigationList.find(c => c.catalog_nm == "GOLD");
    console.log(this.result);
  
 /*this.result=this.NavigationList.map(item => "GOLD").filter((value,index,self)=> self.indexOf(value)===index);
  console.log(this.result);*/

  }
  /*getnaviagtionmenu(){
    this._dropdownsService.getnaviagtionmenu().subscribe(
      data=>{
        this.NavigationList= <NavigationList[]>data;
        
        console.log('this.NavigationList',this.NavigationList);
        this.result = this.NavigationList.find(c => c.catalog_nm == "GOLD");
       console.log(this.result);
      },
      error => console.error(error)
    );
  }*/
  
    
  //var result = this.NavigationList.data.segments.find((c) => c.catalog_nm === "Gold");
 // console.log(this.result);
 getsubitems(){
  this.result = this.NavigationList.find(c => c.catalog_nm == "GOLD");
  console.log(this.result);
  this.subitem=this.result.find(c => c.c.child_catalog);
  console.log(this.subitem);
for(var i=0;i<this.result.length;i++){
 //for(var j=0;i<)
}
}

}

