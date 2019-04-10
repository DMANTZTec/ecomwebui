
import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";
@Injectable({
  providedIn: 'root'
})
export class DropdownNotifyService {

  private notify = new Subject<any>();
  public notifyObservable = this.notify.asObservable();
  constructor(){}
  public notifyOther(data: any) {
  if (data) {
  this.notify.next(data);
  }
  }
  
}
