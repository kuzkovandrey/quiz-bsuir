import { Results } from '@core/models/results.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ResultsStorageService {
  private storage: Storage | null = null;

  constructor(private storageService: Storage) {}

  async init() {
    const storage = await this.storageService.create();
    this.storage = storage;
  }

  setUserResult(user: string, points: number) {
    this.storage?.set(user, points);
  }

  getResults(): Results[] {
    const results: Results[] = [];
    this.storage?.forEach((user, points) => {
      results.push({user, points});
    });
    return results;
  }
}
