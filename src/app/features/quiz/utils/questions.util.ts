import { Quesction } from '../models/question.model';

export class Questions {
  public static get(quesctions: Quesction[], amount: number = 10): Quesction[] {
    return quesctions
      .sort(() => Math.random() - 0.5)
      .slice(0, amount);
  }

  //TODO: REFACTORING
  public static filter(quesction: Quesction) {
    let correct = 1;
    let wrong = 1;
    quesction.options = quesction.options.filter(quest => {
        if (correct && quest.correct) {
          correct--;
          return true;
        }
        if (wrong && !quest.correct) {
          wrong--;
          return true;
        }
    });
    return quesction;
  }
}
