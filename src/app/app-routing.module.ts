import { ResultsComponent } from './features/results/results.component';
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
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'quizz',
    loadChildren: () => import('./features/quizz/quizz.module').then(m => m.QuizzModule)
  },
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
