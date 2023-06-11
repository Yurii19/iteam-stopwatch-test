import { Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, of, Subject } from 'rxjs';
import { stopWatchState } from '../variables';

@Injectable({
  providedIn: 'root',
})
export class StopwatchService {
  // inProgress: boolean = false;
  //paused: boolean = false;
  state$ = new BehaviorSubject<string>(stopWatchState.inactive);
  state: string = stopWatchState.inactive;
  counter: number = 0;
  stopwatchStream$ = new BehaviorSubject<any>(0);
  interval$: Observable<number> = of(0);
  intervalSubsctiption: any;

  constructor() {}

  getState(): Observable<string> {
    return this.state$;
  }

  getTime(): Observable<number> {
    return this.stopwatchStream$;
  }

  pauseCounter() {
    if (this.state === stopWatchState.active) {
      this.intervalSubsctiption.unsubscribe();
      this.setPaused();
    } else if (this.state === stopWatchState.paused) {
      this.startScript();
      this.setActive();
    }
    // this.inProgress = !this.inProgress;
  }

  resetCouter() {
    this.counter = 0;
    this.stopwatchStream$.next(0);
    if (
      this.state === stopWatchState.active ||
      this.state === stopWatchState.paused
    ) {
      this.setActive();
      this.startScript();
    }
    //this.stopwatchState$.next(stopWatchState.active);
  }

  startCount() {
    //this.state = stopWatchState.active;
    if (this.state === stopWatchState.inactive) {
      this.startScript();
      this.setActive();
    } else {
      this.stopScript();
      this.setInactive();
      this.stopwatchStream$.next(0);
    }
  }

  private setActive() {
    this.state$.next(stopWatchState.active);
    this.state = stopWatchState.active;
  }

  private setInactive() {
    this.state$.next(stopWatchState.inactive);
    this.state = stopWatchState.inactive;
  }

  private setPaused() {
    this.state$.next(stopWatchState.paused);
    this.state = stopWatchState.paused;
  }

  private startScript() {
    this.interval$ = interval(1000);
    this.intervalSubsctiption = this.interval$.subscribe(() => {
      this.counter++;
      this.stopwatchStream$.next(this.counter);
    });
  }

  private stopScript() {
    console.log('stop');
    this.counter = 0;
    this.interval$ = of(0);
    this.intervalSubsctiption.unsubscribe();
  }
}
