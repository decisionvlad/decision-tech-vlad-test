import { Component, Input, NgZone } from '@angular/core';
import { FilterState } from '../filters/filters.component';
import { DealsService } from '../../services/deals.service';
import { Deal } from '../../models/deal';



@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() isMobile: boolean;
  
  private filter: FilterState;

  setFilter(ff: FilterState) {
    this.filter = ff;
    this.filteredDeals = this.allDeals.filter(d => this.filterFunction(d));
  }

  allDeals: Deal[] = [];
  filteredDeals: Deal[] = [];

  constructor(
    private dealsService: DealsService
  ) {
    this.dealsService.getDeals().then(deals => {
      this.allDeals = deals;
      this.setFilter(new FilterState(true, true, true, 0, 0));
    });
  }

  private filterFunction(d: Deal): boolean {
    const f = this.filter;

    const isCategoryMatch = d.isBroadband === f.broadbandChecked && d.isMobile === f.mobileChecked && d.isTV === f.tvChecked;
    if (!isCategoryMatch)
      return false;

    if (f.broadbandChecked)
      if (+f.speed !== 0 && +f.speed !== d.speed)
        return false;

    if (f.mobileChecked)
      if (+f.data !== 0 && +f.data !== d.data)
        return false;

    return true;
  }
}
