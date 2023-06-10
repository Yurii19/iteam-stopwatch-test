import { Injectable } from '@angular/core';
import { from, interval, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StopwatchService {
  inProgress: boolean = false;

  counter: number = 0;

  stopwatchStream$ = new Subject<any>();

  intervalStream$: Observable<any> = of(null);

  sub: any;

  constructor() {}

  getTime() {
    return this.stopwatchStream$;
  }

  resetCouter(){
    this.stopwatchStream$.next(0)
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
    this.intervalStream$ = interval(1000);
    this.sub = this.intervalStream$.subscribe((d) => {
      this.counter = this.counter + 1;
      this.stopwatchStream$.next(this.counter);
      // console.log(d);
      console.log(this.counter);
    });
  }

  private stopScript() {
    console.log('stop');
    this.counter = 0;
    this.intervalStream$ = of(null);
    this.sub.unsubscribe();
  }
}
