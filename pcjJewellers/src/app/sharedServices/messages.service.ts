import { Injectable } from '@angular/core';

declare var message: any;
@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() {}
  
    success(title, msg) {
      message.success(msg, title);
    }
    info(title, msg) {
      message.info(msg, title);
    }
    warning(title, msg) {
      message.warning(msg, title);
    }
    error(title, msg) {
      message.error(msg, title);
    }
  
    wait(title, msg) {
      message.info(msg, title, { timeOut: 3000 });
    }
}
