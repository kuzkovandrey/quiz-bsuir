import { AppRoutes } from '@core/enums/app-router.enum';
import { ResultsStorageService } from '@core/services/results-storage.service';
import { CurrentUserService } from '@core/services/current-user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.scss'],
})
export class UserResultComponent implements OnInit, OnDestroy {
  user: string;
  result: number;
  appRoutes = AppRoutes;

  constructor(
    private currentUser: CurrentUserService,
    private storage: ResultsStorageService
  ) {}

  ngOnInit() {
    this.user = this.currentUser.userName.value;
    this.result = this.currentUser.results.value;
    this.storage.setUserResult(this.user, this.result);
  }

  ngOnDestroy() {
    this.currentUser.resetUser();
  }

}
