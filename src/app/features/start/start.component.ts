import { AppRoutes } from '@core/enums/app-router.enum';
import { CurrentUserService } from '@core/services/current-user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})

export class StartComponent implements OnInit{
  nameInput: FormControl;

  constructor(
    private currentUser: CurrentUserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.nameInput = new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]);
  }

  navigateToQuiz() {
    this.currentUser.userName.next(this.nameInput.value);
    this.router.navigate([AppRoutes.ROOT, AppRoutes.QUIZ]);
  }
}
