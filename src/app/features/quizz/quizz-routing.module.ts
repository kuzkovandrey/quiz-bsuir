import { ResultsComponent } from './../results/results.component';
import { TestingComponent } from './pages/testing/testing.component';
import { StartComponent } from './pages/start/start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'test',
    component: TestingComponent
  },
  {
    path: 'result',
    component: ResultsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class QuizzRoutingModule {}
