import { Component, OnInit,Input } from '@angular/core';
import {DropdownsComponent} from '../dropdowns.component';
import { Hero,EarRings, NewArrivals,Gold ,Child,NavigationList} from '../../../data/hero';
import  {DropdownsService} from '../dropdowns.service';


@Component({
  selector: 'app-diamonds',
  templateUrl: './diamonds.component.html',
  styleUrls: ['./diamonds.component.css']
})
export class DiamondsComponent implements OnInit {
  //@Input() NavigationList:any
  NavigationList: NavigationList[] = [];
  public result;
  constructor(private _dropdownsService:DropdownsService) { }

  ngOnInit() {
  }
  /*getnaviagtionmenu(){
    this._dropdownsService.getnaviagtionmenu().subscribe(
      data=>{
        this.NavigationList= <NavigationList[]>data;
        
        console.log('this.NavigationList',this.NavigationList);
        this.result = this.NavigationList.find(c => c.catalog_nm == "DIAMONDS");
       console.log(this.result);
      },
      error => console.error(error)
    );
  }*/
}
