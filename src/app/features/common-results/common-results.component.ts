import { Results } from '@core/models/results.model';
import { ResultsStorageService } from '@core/services/results-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-results',
  templateUrl: './common-results.component.html',
  styleUrls: ['./common-results.component.scss'],
})
export class CommonResultsComponent implements OnInit {
  public results: Results[];

  constructor(private storage: ResultsStorageService) {}

  ngOnInit() {
    this.results = this.storage.getResults();
  }
}
