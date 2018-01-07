import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { BroadbandResult } from '../../types/broadbanddeals';
import { FilterState } from '../filters/filters.component';
import { DealsService } from '../../services/deals.service';
import { Deal } from '../../models/deal';
import { MockDealsService } from '../../services/mock-deals.service';

describe('GridComponent', () => {
  let fixture: ComponentFixture<GridComponent>;
  let component: GridComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GridComponent
      ],
      providers: [
        { provide: DealsService, useClass: MockDealsService }
      ]
    }).compileComponents();
    const sss = TestBed.get(DealsService);
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it('GIVEN results WHEN filtering by Broadband THEN show the 4 broadband only deals', async(async () => {
    component.setFilter(new FilterState(true, false, false, 0, 0));
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(4);
  }));

  it('GIVEN results WHEN filtering by Broadband AND Tv THEN show the 4 deals for broadband and Tv only', async(async () => {
    component.setFilter(new FilterState(true, true, false, 0, 0));
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(4);
  }));

  it('GIVEN results WHEN filtering by Broadband AND Mobile THEN show 1 deal for broadband and Mobile only', async(async () => {
    component.setFilter(new FilterState(true, false, true, 0, 0));
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(1);
  }));

  it('GIVEN results WHEN filtering by Mobile, Broadband, TV AND Mobile Data 5GB THEN 0 results', async(async () => {
    component.setFilter(new FilterState(true, true, true, 0, 5));
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(0);
  }));

  it('GIVEN results WHEN filtering by Mobile, Broadband, TV AND Mobile Data 4GB THEN 2 results', async(async () => {
    component.setFilter(new FilterState(true, true, true, 0, 4));
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(2);
  }));

  it('GIVEN results WHEN filtering by Broadband AND Speed 76MB THEN 2 results present', async(async () => {
    component.setFilter(new FilterState(true, false, false, 76, 0));
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(2);
  }));

});
