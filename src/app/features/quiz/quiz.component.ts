import { AppRoutes } from '@core/enums/app-router.enum';
import { CurrentUserService } from '@core/services/current-user.service';
import { Questions } from './utils/questions.util';
import { TimerSettings } from './enums/timer-settings.enum';
import { QuizService } from 'src/app/features/quiz/services/quiz.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, from, Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { Quesction } from './models/question.model';
import { IonSlides } from '@ionic/angular';
import { TimerService } from './services/timer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [QuizService]
})

export class QuizComponent implements OnInit, OnDestroy {
  @ViewChild(IonSlides, {static: true}) slides: IonSlides;
  questions$ = new BehaviorSubject<Quesction[]>(null);
  time: number;
  helpCounter = 3;
  private correctCounter = 0;
  private destroy = new Subject();

  constructor(
    private quizService: QuizService,
    private timer: TimerService,
    private currentUser: CurrentUserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.questions$.next( this.quizService.getQuesctions() );
    this.slides.lockSwipeToPrev(true);

    this.timer.getTimer()
      .pipe(takeUntil(this.destroy))
      .subscribe(time => {
        this.time = 100 / TimerSettings.TIME * time / 1000;
        if (this.time > 1) {
          this.endQuiz();
        }
      });
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  onChooseAnswer(correct: boolean) {
    if (correct) {
      this.correctCounter++;
    }
    from(this.slides.isEnd())
      .pipe(takeUntil(this.destroy))
      .subscribe(isEnd => {
        if(isEnd) {
          this.endQuiz();
        }
      });
  }

  getCorrectQuestion() {
    from(this.slides.getActiveIndex())
      .pipe(first())
      .subscribe(index => {
        let currentQuestion =  this.questions$.value[index];
        currentQuestion = Questions.filter(currentQuestion);
        this.helpCounter--;
      });
  }

  exitFromQuiz() {
    this.router.navigate([AppRoutes.ROOT]);
    this.currentUser.resetUser();
    this.destroy.next();
  }

  private endQuiz() {
    this.currentUser.results.next(this.correctCounter);
    this.destroy.next();
    this.navigateToResult();
  }

  private navigateToResult() {
    this.router.navigate([AppRoutes.USER_RESULT]);
  }
}
