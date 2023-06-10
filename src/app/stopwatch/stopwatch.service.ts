import { Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StopwatchService {
  inProgress: boolean = false;

  counter: number = 0;

  stopwatchStream$ = new BehaviorSubject<any>(0);

  interval$: Observable<any> = of(null);

  intervalSubsctiption: any;

  constructor() {
    //this.stopwatchStream$.next(0);
  }

  getTime() {
    return this.stopwatchStream$;
  }

  pauseCounter() {
    if (this.inProgress) {
      this.intervalSubsctiption.unsubscribe();
    } else {
      this.startScript();
    }
    this.inProgress = !this.inProgress;
  }

  resetCouter() {
    this.stopwatchStream$.next(0);
  }

  startCount() {
    this.inProgress = !this.inProgress;
    if (this.inProgress) {
      this.startScript();
    } else {
      this.stopScript();
    }
  }

  private startScript() {
    this.interval$ = interval(1000);
    this.intervalSubsctiption = this.interval$.subscribe((d) => {
      this.counter++;
      this.stopwatchStream$.next(this.counter);
      console.log(this.counter);
    });
  }

  private stopScript() {
    console.log('stop');
    this.counter = 0;
    this.interval$ = of(null);
    this.intervalSubsctiption.unsubscribe();
  }
}
