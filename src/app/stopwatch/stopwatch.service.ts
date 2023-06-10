import { Injectable } from '@angular/core';
import { from, interval, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StopwatchService {
  inProgress: boolean = false;

  counter: number = 0;

  stopwatchStream$ = new Subject<any>();

  interval$: Observable<any> = of(null);

  sub: any;

  constructor() {}

  getTime() {
    return this.stopwatchStream$;
  }

  pauseCounter() {
    if (this.inProgress) {
      this.sub.unsubscribe();
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
    this.sub = this.interval$.subscribe((d) => {
      this.counter++;
      this.stopwatchStream$.next(this.counter);
      console.log(this.counter);
    });
  }

  private stopScript() {
    console.log('stop');
    this.counter = 0;
    this.interval$ = of(null);
    this.sub.unsubscribe();
  }
}
