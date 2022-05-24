import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor() { }

  message = new BehaviorSubject('');
  messageSource = this.message.asObservable();

  getSend(data:string){
    this.message.next(data);
  }
}
