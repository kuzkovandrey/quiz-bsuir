import { AppRoutes } from './core/enums/app-router.enum';
import { StartComponent } from './features/start/start.component';
import { UserResultComponent } from './features/user-result/user-result.component';
import { CommonResultsComponent } from './features/common-results/common-results.component';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: AppRoutes.ROOT,
    redirectTo: AppRoutes.HOME,
    pathMatch: 'full'
  },
  {
    path: AppRoutes.HOME,
    component: HomeComponent,
  },
  {
    path: AppRoutes.COMMON_RES,
    component: CommonResultsComponent
  },
  {
    path: AppRoutes.START,
    component: StartComponent
  },
  {
    path: AppRoutes.QUIZ,
    loadChildren: () =>
      import('./features/quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: AppRoutes.USER_RESULT,
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
