import { Component, OnInit, Input } from '@angular/core';
import { BroadbandResult } from '../../types/broadbanddeals';
import { FilterState } from '../filters/filters.component';
import { GridTestData } from './grid.component.testdata';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  filter = new FilterState(false, false, false, 0, 0);
  allDeals: BroadbandResult.Deal[] = [];
  filteredDeals: BroadbandResult.Deal[] = [];

  private filterFunction(deal: BroadbandResult.Deal): boolean {
    return true;
  }
}
