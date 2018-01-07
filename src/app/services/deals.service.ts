import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { BroadbandResult } from '../types/broadbanddeals';
import { Deal } from '../models/deal';

@Injectable()
export class DealsService {
  private filename = './assets/deals.json';

  constructor(private http: HttpClient) {
  }

  getDeals(): Promise<Deal[]> {
    return this.http.get<BroadbandResult.RootObject>(this.filename)
      .map(obj => obj.deals.map(o => new Deal(o)))
      .toPromise();
  }
}
