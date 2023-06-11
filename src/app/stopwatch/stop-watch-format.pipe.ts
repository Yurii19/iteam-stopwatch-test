import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stopWatchFormat',
  standalone: true,
})
export class StopWatchFormatPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): unknown {
    let hrs,
      min,
      sec: string = '';
    sec = this.toDouble(value % 60);
    min = this.toDouble(Math.trunc(value / 60));
    hrs = this.toDouble(Math.trunc(value / (60 * 60)));
    return `${hrs}:${min}:${sec}`;
  }

  private toDouble(val: number): string {
    return val > 9 ? `${val}` : `0${val}`;
  }
}
