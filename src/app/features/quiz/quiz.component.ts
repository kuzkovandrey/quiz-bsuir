import { QuizService } from 'src/app/features/quiz/services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quesction } from '@core/models/question.model';

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})

export class QuizComponent implements OnInit {
  questions$ = new BehaviorSubject<Quesction[]>(null);

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.questions$.next( this.quizService.getQuesctions() );
    console.log(this.questions$.value);
  }

  onChooseAnswer(correct: boolean) {
    console.log(correct);
  }
}
