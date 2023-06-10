import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  buffer,
  debounce,
  debounceTime,
  filter,
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
  @ViewChild('waitButton') waitButton!: ElementRef;
  clicks$: Observable<any> = of(0);

  // isClicked: boolean = false;
  sensor: number = 0;

  constructor(private stopWatch: StopwatchService) {}

  ngAfterViewInit() {
    // console.log('hello')
    this.clicks$ = fromEvent(this.waitButton.nativeElement, 'click');
    this.clicks$
      .pipe(
        buffer(this.clicks$.pipe(debounceTime(300))),
        filter((clickAccamulator) => clickAccamulator .length > 1)
      )
      .subscribe((d: any) => {
        // this.sensor++;
        // console.log(this.sensor);
        console.log(d.length);
        this.stopWatch.pauseCounter();
      });
  }

  wait(): void {
    //this.clicks$.next('clicked')
  }

  reset(): void {
    this.stopWatch.resetCouter();
  }

  start(): void {
    this.stopWatch.startCount();
  }
}
