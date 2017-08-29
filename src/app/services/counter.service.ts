import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CounterElement } from '../models/counter-element';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

@Injectable()
export class CounterService {
  /**
   * Activates a counter with the given interval. The Counter starts with the value 0.
   * @param {number} interval
   * @returns {Observable<CounterElement>}
   */
  public startCounter(interval: number): Observable<CounterElement> {
    return Observable.interval(interval)
      .map<number, CounterElement>(count => ({interval: interval, currentCount: count + 1}))
      .startWith({interval: interval, currentCount: 0});
  }
}
