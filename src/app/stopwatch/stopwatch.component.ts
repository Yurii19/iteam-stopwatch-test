import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  debounce,
  debounceTime,
  from,
  fromEvent,
  map,
  Observable,
  of,
  Subject,
  throttleTime,
} from 'rxjs';
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
  //clicks$ = new Subject<any>();
  clicks$ = fromEvent(document, 'click');

  isClicked: boolean = false;

  constructor(private stopWatch: StopwatchService) {
    this.clicks$
     // .pipe(debounceTime(300))
      .subscribe((d) => console.log(d));
  }

  wait(): void {
   //this.clicks$.next('clicked')
  }

  reset(): void {
    this.stopWatch.resetCouter();
  }

  start(): void {
    // this.time = new Date();
    this.stopWatch.startCount();
  }

  // clickedHandle() {
  //   this.isClicked = true;
  //   setTimeout(() => {
  //     this.isClicked = false;
  //   }, 300);
  // }
}
