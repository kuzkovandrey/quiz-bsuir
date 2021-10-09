import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { QuestionOption } from '@features/quiz/models/question-option.model';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent {
  @Input() text: string;
  @Input() options: QuestionOption[];
  @Output() chooseAnswer = new EventEmitter<boolean>();

  disabledButton = false;

  onChooseAnswer(correct: boolean) {
    this.chooseAnswer.emit(correct);
    this.disabledButton = true;
  }
}
