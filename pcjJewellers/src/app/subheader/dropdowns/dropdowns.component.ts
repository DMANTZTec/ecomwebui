import { Component, OnInit } from '@angular/core';
import { DropdownsService } from './dropdowns.service';
import { Child, NavigationList, DropdownSvcParams } from '../../data/hero';
import { DropdownNotifyService } from 'src/app/sharedServices/dropdown-notify.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  NavigationList: NavigationList[] = [];
  keys: String[];
  v1: boolean;
  isHovering = false;
  private dropdownsService;
  ChildList: Child[] = [];
  private startLevel = 1;
  private endLevel = 3;
  private storeId = 2;
  private parentCatalogId = 0;
  private _subscription: Subscription;
  public categoryidselected;
  loadcontent: boolean;
  constructor(private _dropdownsService: DropdownsService, private _dropdownNotifyService: DropdownNotifyService) { }

  ngOnInit() {
    this.getdatafromsrv();
  }

  getdatafromsrv() {
    console.log("after entering into the getdatafromsrv");
    const inputParams = new DropdownSvcParams();
    inputParams.startLevel = this.startLevel;
    inputParams.endLevel = this.endLevel;
    inputParams.storeId = this.storeId;
    inputParams.parentCatalogId = this.parentCatalogId;

    console.log(inputParams);
    this._dropdownsService.getnaviagtionmenu(inputParams).subscribe(
      data => {
        this.NavigationList = <NavigationList[]>data;

        console.log('Dropdown navigation list is', this.NavigationList);
      },
      error => console.error(error)
    );
  }


  catalogNameSelected(catalogId) {
    this.categoryidselected = catalogId;
    this._dropdownNotifyService.notifyOther(this.categoryidselected);    
  }

  subChildCatalogNmSelected(catalogId) {
    this.categoryidselected = catalogId;
    this._dropdownNotifyService.notifyOther(this.categoryidselected);
  }

  childCatalogNmSelected(catalogId) {
    this.categoryidselected = catalogId;
    this._dropdownNotifyService.notifyOther(this.categoryidselected);
  }

}