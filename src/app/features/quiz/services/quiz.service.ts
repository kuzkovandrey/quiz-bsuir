import { Questions } from '../utils/questions.util';
import { Quesction } from '../models/question.model';
import { Injectable } from '@angular/core';
import { QUIZ_QUESTIONS } from 'src/app/features/quiz/data/quiz-questions';

@Injectable()
export class QuizService {

  getQuesctions(): Quesction[] {
    return Questions.get(QUIZ_QUESTIONS);
  }
}
