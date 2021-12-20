import { AppRoutes } from '@core/enums/app-router.enum';
import { CurrentUserService } from '@core/services/current-user.service';
import { Questions } from './utils/questions.util';
import { QuizService } from 'src/app/features/quiz/services/quiz.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, from, Subject } from 'rxjs';
import { first, takeUntil, tap } from 'rxjs/operators';
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
  time = 15;
  helpCounter = 3;
  private correctCounter = 0;
  private destroy = new Subject();
  private endTimer = new Subject();

  constructor(
    private quizService: QuizService,
    private timer: TimerService,
    private currentUser: CurrentUserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.slides.lockSwipeToPrev(true);
    this.questions$.next(
      this.quizService.getQuesctions()
    );
    this.timerSubscription();
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  onChangeSlide() {
    this.endTimer.next();
    this.timerSubscription();
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
        //TODO: REFACTORING
        let currentQuestion =  this.questions$.value[index];
        currentQuestion = Questions.filter(currentQuestion);
        this.helpCounter--;
      });
  }

  exitFromQuiz() {
    this.router.navigate([AppRoutes.ROOT]);
    this.currentUser.resetUser();
    this.destroy.next();
    this.endTimer.next();
  }

  private endQuiz() {
    this.currentUser.results.next(this.correctCounter);
    this.destroy.next();
    this.endTimer.next();
    this.navigateToResult();
  }

  private navigateToResult() {
    this.router.navigate([AppRoutes.USER_RESULT]);
  }

  //TODO: REFACTORING
  private timerSubscription() {
    this.time = 15;
    this.timer.getTimer().pipe(
      tap(item => {
        console.log(item);
        if (item === 15) {
          this.slides.slideNext();
          this.slides.isEnd().then(isEnd => {
            if (isEnd) {
              this.endQuiz();
            } else {
              this.slides.slideNext();
            }
          });
        }
      }),
      takeUntil(this.endTimer)
    ).subscribe(time => this.time = 15 - time);
  }
}
