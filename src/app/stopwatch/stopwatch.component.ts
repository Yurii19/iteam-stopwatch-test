import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent {
  time = new Date();

  start(): void {
    this.time = new Date();
  }
}
