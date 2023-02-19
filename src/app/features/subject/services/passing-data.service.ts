import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PassingDataService {
  public replaySubject$ = new ReplaySubject();
  public behaviorSubject$ = new BehaviorSubject(1);
  public subject$ = new Subject();
  public value1!: number;
  constructor() {
    console.log('PassingDataConstructor');
    this.value1 = 1;
  }
}
