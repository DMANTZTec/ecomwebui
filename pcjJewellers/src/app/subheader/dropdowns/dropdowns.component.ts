import { Component, OnInit } from '@angular/core';
import { DropdownsService } from './dropdowns.service';
import { Hero,EarRings, NewArrivals,Gold ,Child,NavigationList,DropdownSvcParams} from '../../data/hero';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  NavigationList: NavigationList[] = [];
  keys:String[];
  v1:boolean;
  isHovering=false;
  private dropdownsService;
  ChildList:Child[]=[];
  private startLevel=1;
  private endLevel=3;
  private storeId=2;
  private parentCatalogId=0;


  constructor(private _dropdownsService:DropdownsService) { }

  ngOnInit() {
  this.getdatafromsrv();
}

getdatafromsrv(){
  console.log("after entering into the getdatafromsrv");
  const inputParams=new DropdownSvcParams();
 inputParams.startLevel=this.startLevel;
  inputParams.endLevel=this.endLevel;
  inputParams.storeId=this.storeId;
  inputParams.parentCatalogId=this.parentCatalogId;
  
  console.log(inputParams);
  this._dropdownsService.getnaviagtionmenu(inputParams).subscribe(
    data=>{
      this.NavigationList= <NavigationList[]>data;
      
      console.log('Dropdown navigation list is', this.NavigationList);
    },
    error => console.error(error)
  );
}
 }




