import { CoreModule } from '@core/core.module';
import { CommonResultsComponent } from './features/common-results/common-results.component';
import { StartComponent } from './features/start/start.component';
import { UserResultComponent } from './features/user-result/user-result.component';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserResultComponent,
    StartComponent,
    CommonResultsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
