import { Component, OnInit } from '@angular/core';
import { DropdownsService,DropdownSvcParams } from './dropdowns.service';
import { Hero,EarRings, NewArrivals,Gold ,Child,NavigationList} from '../../data/hero';
//import { EarRings } from '../../data/earrings';
//import {Navigation} from '../../data/hero';
//import * as $ from 'jquery';


@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  private rings;
  RingsList: Hero[] = [];
  NavigationList: NavigationList[] = [];
  EarRingsList: EarRings[] =[];
  keys:String[];
  v1:boolean;
  isHovering=false;
  private dropdownsService;
  NewArrivalsList: Hero[];
  GoldCoins: Hero[];
  Gold:Hero[];
  GoldList:Gold[] = [];
  ChildList:Child[]=[];
  private startLevel;
  private endLevel;
  private storeId;
  private parentCatalogId;


  constructor(private _dropdownsService:DropdownsService) { }

  ngOnInit() {
  this.getdatafromsrv();

    
}


getGold(){
  //var dropdown=(<HTMLCollectionOf<Element>>document.getElementsByClassName('list-inline category-section')).style.display = 'block';
  //(<HTMLElement>document.querySelector('list-inline category-section')).style.display = 'none';
 // document.getElementById("rings").style.display='block';

  this._dropdownsService.getGold()
  .subscribe(
    data => {
      this.GoldList = <Gold[]>data;
      console.log( 'this.GoldList', this.GoldList);
      var childitems=this.GoldList[0];
      for(var key in this.GoldList){
        console.log("key",key);
        if(childitems.hasOwnProperty(key)){
        }
      //  let result = this.GoldList.filter(book => book.child_catalog==this.GoldList[0]);
       // console.log(result);
      }   
    },
    error => console.error(error)
  );
}

getdatafromsrv(){
  const inputParams=new DropdownSvcParams();
 inputParams.startLevel=this.startLevel;
  inputParams.endLevel=this.endLevel;
  inputParams.storeId=this.storeId;
  inputParams.parentCatalogId=this.parentCatalogId;
  //var sThisVal=$(this).val;
  //console.log(sThisVal);
  
  this._dropdownsService.getnaviagtionmenu(inputParams).subscribe(
    data=>{
      this.NavigationList= <NavigationList[]>data;
      
      console.log('this.NavigationList',this.NavigationList);
    },
    error => console.error(error)
  );
}


 

  //method getEarrings

  getEarRings()
  {
    document.getElementById("earrings").style.display='block';
     this._dropdownsService.getEarrings()
              .subscribe(
                data=>{
                this.EarRingsList=<EarRings[]>data;
                console.log('Earrings list is',this.EarRingsList);
              },
             error=> console.error(error)
              
              );

  
  }

  //method for getNewArrivals

  getNewArrivals(){
    document.getElementById("newarrivals").style.display='block';
    this._dropdownsService.getNewArrivals()
     .subscribe(
       data=>{
         this.NewArrivalsList=data;
         console.log('new arrivals list is',this.NewArrivalsList);
       },
       error=>console.error(error)
       
     )
  }
  getGoldCoins(){
    this._dropdownsService.getGoldCoins()
     .subscribe(
       data=>{
         this.GoldCoins=<Hero[]>data;
         console.log('gold cois array is',this.GoldCoins);
       },
      error=> console.error(error)
       
     )
  }

  mouseout()
  {
    document.getElementById("rings").style.display='none';
  }
  setMouseOut(){
    document.getElementById("earrings").style.display='none';
  }
  setMouseOut2(){
    document.getElementById("newarrivals").style.display='none';
  }
  
  /*(function($){
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
  
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
      $('.dropdown-submenu .show').removeClass("show");
      });
  
      return false;
    });
  })(jQuery)*/
  
  
  }




