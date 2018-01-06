import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { GridComponent } from './grid.component';
import { BroadbandResult } from '../../types/broadbanddeals';
import { GridTestData } from './grid.component.testdata';
import { FilterState } from '../filters/filters.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GridComponent ]
    });
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    component.allDeals = GridTestData.getData().deals;
    fixture.detectChanges();
  });

  it('no filter displays all list (11)', () => {
    expect(component.allDeals.length).toEqual(11);
  });

  it('no filter displays all list (11)', () => {
    expect(component.allDeals.length).toEqual(11);
  });

  it('GIVEN results WHEN filtering by Broadband (4)', () => {
    component.filter = new FilterState(true, false, false, 0, 0);
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(4);
  });

  it('GIVEN results WHEN filtering by Broadband AND Tv (4)', () => {
    component.filter = new FilterState(false, true, false, 0, 0);
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(4);
  });

  it('GIVEN results WHEN filtering by Broadband AND Mobile (1)', () => {
    component.filter = new FilterState(false, false, true, 0, 0);
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(1);
  });

  it('GIVEN results WHEN filtering by Mobile, Broadband, TV AND Mobile Data 5GB (0)', () => {
    component.filter = new FilterState(true, true, true, 0, 4);
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(0);
  });

  it('GIVEN results WHEN filtering by Mobile, Broadband, TV AND Mobile Data 4GB (2)', () => {
    component.filter = new FilterState(true, true, true, 0, 2);
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(0);
  });

  it('GIVEN results WHEN filtering by Broadband AND Speed 76MB (2)', () => {
    component.filter = new FilterState(true, false, false, 76, 0);
    fixture.detectChanges();
    expect(component.filteredDeals.length).toEqual(0);
  });


});