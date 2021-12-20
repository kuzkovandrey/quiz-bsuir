import { TimerSettings } from './../enums/timer-settings.enum';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimerService {

  getTimer() {
    return interval(TimerSettings.INTERVAL)
      .pipe(map(iter => (iter % 15) + 1));
  }


}
