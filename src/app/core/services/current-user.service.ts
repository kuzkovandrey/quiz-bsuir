import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CurrentUserService {
  userName = new BehaviorSubject<string>(null);
  results = new BehaviorSubject<number>(null);

  resetUser() {
    this.userName.next(null);
    this.results.next(null);
  }
}
