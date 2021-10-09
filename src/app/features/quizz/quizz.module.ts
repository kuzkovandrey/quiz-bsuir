import { ResultsComponent } from './../results/results.component';
import { TestingComponent } from './pages/testing/testing.component';
import { StartComponent } from './pages/start/start.component';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { QuizzRoutingModule } from './quizz-routing.module';

@NgModule({
  imports: [
    SharedModule,
    QuizzRoutingModule
  ],
  declarations: [
    StartComponent,
    TestingComponent,
    ResultsComponent
  ]
})
export class QuizzModule {}
