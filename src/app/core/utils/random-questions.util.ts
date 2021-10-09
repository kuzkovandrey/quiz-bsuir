import { Quesction } from '@core/models/question.model';

export class RandomQuestions {
  public static get(quesctions: Quesction[], amount: number = 10): Quesction[] {
    return quesctions
      .sort(() => Math.random() - 0.5)
      .slice(0, amount);
  }
}
