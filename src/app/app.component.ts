import { Component } from '@angular/core';
import {StopwatchComponent} from './stopwatch/stopwatch.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports:[StopwatchComponent]
})
export class AppComponent {
  title = 'iteam-stopwatch';
}
