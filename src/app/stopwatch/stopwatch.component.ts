import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buffer, debounceTime, filter, fromEvent, Observable, of } from 'rxjs';
import { StopwatchService } from './stopwatch.service';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent {
  value$: Observable<any> = this.stopWatch.getTime();
  @ViewChild('waitButton') waitButton!: ElementRef;
  clicks$: Observable<any> = of(0);

  constructor(private stopWatch: StopwatchService) {}

  ngAfterViewInit() {
    this.clicks$ = fromEvent(this.waitButton.nativeElement, 'click');
    this.clicks$
      .pipe(
        buffer(this.clicks$.pipe(debounceTime(300))),
        filter((clickAccamulator) => clickAccamulator.length > 1)
      )
      .subscribe(() => {
        this.stopWatch.pauseCounter();
      });
  }

  reset(): void {
    this.stopWatch.resetCouter();
  }

  start(): void {
    this.stopWatch.startCount();
  }
}
