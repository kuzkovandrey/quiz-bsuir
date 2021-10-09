import { StartComponent } from './features/start/start.component';
import { UserResultComponent } from './features/user-result/user-result.component';
import { QuizComponent } from './features/quiz/quiz.component';
import { CommonResultsComponent } from './features/common-results/common-results.component';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'common-results',
    component: CommonResultsComponent
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'quiz',
    loadChildren: () => import('./features/quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: 'user-result',
    component: UserResultComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
