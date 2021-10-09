import { RandomQuestions } from '../../../core/utils/random-questions.util';
import { Quesction } from '../../../core/models/question.model';
import { Injectable } from '@angular/core';
import { QUIZ_QUESTIONS } from '@core/questions/quiz-questions';

@Injectable()
export class QuizService {
  private quesctions: Quesction[];

  constructor() {
    this.quesctions = RandomQuestions.get(QUIZ_QUESTIONS);
  }

  getQuesctions() {
    return this.quesctions;
  }
}
