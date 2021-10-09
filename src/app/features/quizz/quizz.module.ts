import { TestPage } from './pages/test/test.page';
import { StartPage } from './pages/start/start.page';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { QuizzRoutingModule } from './quizz-routing.module';

@NgModule({
  imports: [
    SharedModule,
    QuizzRoutingModule
  ],
  declarations: [
    StartPage,
    TestPage
  ]
})
export class QuizzModule {}
