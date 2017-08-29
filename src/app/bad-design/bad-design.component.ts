import { ChangeDetectionStrategy, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { CounterElement } from '../models/counter-element';
import { CounterService } from '../services/counter.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-bad-design',
  templateUrl: './bad-design.component.html',
  styleUrls: ['./bad-design.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
  changeDetection: ChangeDetectionStrategy.Default
})
export class BadDesignComponent implements OnInit, DoCheck, OnDestroy {
  public counterElement: CounterElement;
  private interval = 1000;
  private counterSubscription: Subscription;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.startCounter();
  }

  startCounter(): void {
    // If another Subscription is in place we have to unsubscribe from that first.
    this.unsubscribe();

    this.counterSubscription = this.counterService.startCounter(this.interval)
      .subscribe(counterElement => this.counterElement = counterElement);
  }

  private unsubscribe(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  ngDoCheck() {
    console.log('Angular is doing change detection in BadDesignComponent');
  }
}
