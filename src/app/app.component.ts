import { ResultsStorageService } from '@core/services/results-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private storage: ResultsStorageService) {}

  ngOnInit() {
    this.storage.init();
  }
}
