import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements DoCheck {
  @Input() currentCount: number;
  @Output() restartCounter: EventEmitter<void> = new EventEmitter<void>();

  restart(): void {
    this.restartCounter.emit();
  }

  ngDoCheck() {
    console.log(`Angular is doing change detection in ${this.constructor.name}`);
  }
}
