import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CounterElement } from '../models/counter-element';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-good-design',
  templateUrl: './good-design.component.html',
  styleUrls: ['./good-design.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodDesignComponent implements OnInit, DoCheck {
  public counterElement$: Observable<CounterElement>;
  private interval = 1000;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.startCounter();
  }

  startCounter(): void {
    this.counterElement$ = this.counterService.startCounter(this.interval);
  }

  ngDoCheck() {
    console.log('Angular is doing change detection in GoodDesignComponent');
  }
}
