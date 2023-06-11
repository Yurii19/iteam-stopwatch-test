import { Component } from '@angular/core';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [StopwatchComponent, CommonModule],
})
export class AppComponent {
  title = 'iteam-stopwatch';
}
