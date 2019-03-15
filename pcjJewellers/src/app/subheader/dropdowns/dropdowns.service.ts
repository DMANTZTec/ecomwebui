import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero, Gold,Child,NavigationList } from 'src/app/data/hero';
@Injectable({
  providedIn: 'root'
})
export class DropdownsService {
  private _svcKpiHeatMapParams: DropdownSvcParams;
  constructor(private _http: HttpClient) { }
    getGold() {
        return this._http.get<Gold[]>(environment.gold_url).pipe();
        
    }

    getnaviagtionmenu(inputParams:DropdownSvcParams) {
          this._svcKpiHeatMapParams = inputParams;
    
    const httpBody = {
      'startLevel': this._svcKpiHeatMapParams.startLevel,
      'endLevel': this._svcKpiHeatMapParams.endLevel,
      'storeId': this._svcKpiHeatMapParams.storeId,
      'parentCatalogId':this._svcKpiHeatMapParams.parentCatalogId
     
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
    };
        //return this._http.post<NavigationList[]>(environment.navigation_url,httpBody,httpOptions).pipe();
          return this._http.get<NavigationList[]>(environment.navigation_url).pipe();
          
          }
        //service call to get earrings
        getEarrings(){
         return  this._http.get(environment.Earrings_url).pipe();
        }

        //service call to newarrivals

        getNewArrivals(){

          return this._http.get<Hero[]>(environment.NewArrivals_url).pipe();
        }

        //service call to getgoldcoins

        getGoldCoins(){
          return this._http.get<Hero[]>(environment.goldcoins_url).pipe();
        }




}

export class DropdownSvcParams{
  startLevel:number;
  endLevel:number;
  storeId:number;
  parentCatalogId:number;
}