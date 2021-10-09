import { QuestionOption } from './question-option.model';

export interface Quesction {
  question: string;
  options: QuestionOption[];
  explanation: string;
}
