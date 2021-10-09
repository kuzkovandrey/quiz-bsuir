import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { CommonResultsPage } from './pages/common-results/common-results.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    pathMatch: 'full'
  },
  {
    path: 'common-results',
    component: CommonResultsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
