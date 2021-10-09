import { QuizService } from './services/quiz.service';
import { SharedModule } from './../../shared/shared.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuestionComponent } from './components/question/question.component';
import { QuizComponent } from './quiz.component';
import { NgModule } from '@angular/core';

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
    QuizService
  ],
})
export class QuizModule { }
