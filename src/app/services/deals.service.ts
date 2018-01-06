import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Deal } from 'app/models/deal';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DealsService {
  private filename = './assets/deals.json';

  constructor(private http: Http) {
  }

  getDeals(): Promise<Deal[]> {
    return this.http.get(this.filename)
      .map(res => {
        const rawList = res.json() as any[];
        return rawList.map(d => new Deal(d))
      })
      .toPromise();
  }
}
