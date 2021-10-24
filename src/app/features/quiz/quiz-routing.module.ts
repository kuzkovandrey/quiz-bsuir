import { AppRoutes } from '@core/enums/app-router.enum';
import { QuizComponent } from './quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: AppRoutes.ROOT,
    component: QuizComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuizRoutingModule { }
