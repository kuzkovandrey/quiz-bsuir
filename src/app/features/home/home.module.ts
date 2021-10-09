import { CommonResultsPage } from './pages/common-results/common-results.page';
import { MainPage } from './pages/main/main.page';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    MainPage,
    CommonResultsPage
  ]
})
export class HomeModule {}
