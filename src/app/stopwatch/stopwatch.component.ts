import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent {

  value$: Observable<Date> = of(new Date);
  time = new Date();

  start(): void {
    this.time = new Date();
  }
}
