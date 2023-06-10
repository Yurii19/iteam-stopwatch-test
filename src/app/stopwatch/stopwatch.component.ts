import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from, Observable, of } from 'rxjs';
import { StopwatchService } from './stopwatch.service';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent {
  constructor(private stopWatch: StopwatchService) {}

  value$: Observable<any> = this.stopWatch.getTime();
  // time = new Date();

  wait(): void {
    this.stopWatch.pauseCounter();
  }

  reset(): void {
    this.stopWatch.resetCouter();
  }

  start(): void {
    // this.time = new Date();
    this.stopWatch.startCount();
  }
}
