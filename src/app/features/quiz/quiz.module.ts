import { SharedModule } from '@shared/shared.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuestionComponent } from './components/question/question.component';
import { QuizComponent } from './quiz.component';
import { NgModule } from '@angular/core';
import { TimerService } from './services/timer.service';

@NgModule({
  imports: [
    QuizRoutingModule,
    SharedModule
  ],
  declarations: [
    QuizComponent,
    QuestionComponent
  ],
  providers: [
    TimerService
  ],
})
export class QuizModule { }
