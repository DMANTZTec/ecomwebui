import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";
@Injectable({
  providedIn: 'root'
})
export class ProductDetailNotifyService {

 
  private notify = new Subject<any>();
  public notifyObservable = this.notify.asObservable();
  constructor(){}
 
  public notifyOther(data: any) {
  if (data) {
  this.notify.next(data);
  }
  }
}
