import { Results } from '@core/models/results.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ResultsStorageService {
  private storage: Storage | null = null;

  constructor(private storageService: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storageService.create();
    this.storage = storage;
  }

  public setUserResult(user: string, points: string) {
    this.storage?.set(user, points);
  }

  public getResults(): Results[] {
    const results: Results[] = [];

    this.storage?.forEach((user, points) => {
      results.push({user, points});
    });

    return results;
  }
}
