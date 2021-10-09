import { RandomQuestions } from '../utils/random-questions.util';
import { Quesction } from '../models/question.model';
import { Injectable } from '@angular/core';
import { QUIZ_QUESTIONS } from 'src/app/features/quiz/data/quiz-questions';

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
