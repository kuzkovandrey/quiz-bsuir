import { TimerSettings } from './../enums/timer-settings.enum';
import { Injectable } from '@angular/core';
import { interval } from 'rxjs';

@Injectable()
export class TimerService {

  getTimer() {
    return interval(TimerSettings.INTERVAL);
  }

}
