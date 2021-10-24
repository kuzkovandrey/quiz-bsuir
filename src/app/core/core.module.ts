import { CurrentUserService } from './services/current-user.service';
import { ResultsStorageService } from './services/results-storage.service';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    IonicStorageModule.forRoot(),
    SharedModule
  ],
  exports: [
    SharedModule
  ],
  providers: [
    ResultsStorageService,
    CurrentUserService
  ],
})
export class CoreModule { }
